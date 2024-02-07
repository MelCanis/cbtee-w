'use strict'
require('dotenv').config()

const express = require("express");
const ViteExpress = require("vite-express");
const app = express();
app.use(express.json())
ViteExpress.config({ mode: "production" })
const cors = require('cors');
app.use(cors())
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.post('/api/products', async (req, res) => {
  try {
    const products = await stripe.products.list({
      limit: 50,
    })
    const available = products.data.filter(i => i.active == true);
    const withprice = await Promise.all(available.map(async i => {
      const pricedata = await stripe.prices.retrieve(i.default_price);
      return {...i, price: pricedata.unit_amount*.01}
    }))
    res.json({ products: withprice })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.post('/api/checkout', async (req, res) => {
  try {
    console.log(req.body.items)
    const discountElligible = req.body.items.filter(i => i.price == 65).length > 1
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.items.map( i => {
          return {
            price_data: {
              product: i.id,
              currency: 'usd',
              unit_amount: i.price/.01
            },
            quantity: 1
          }
        } ),
        success_url: `${req.body.location}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.body.location}`,
        shipping_address_collection: {
          allowed_countries: ['US'],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 1000,
                currency: 'usd',
              },
              display_name: 'Shipping',
            },
          },
        ],
        discounts: discountElligible ? [{coupon: 'CKFqhAWt'}] : []
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.post('/api/success', async (req, res) => {
  try {
    const lineItems = await stripe.checkout.sessions.listLineItems(
      req.body.session_id
    );
    const withprice = await Promise.all(lineItems.data.map(async i => {
      const archived = await stripe.products.update(i.price.product,
        { active: false }
      )
    }))
    res.status(200).json({ message: "Products Archived" })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})



const PORT = process.env.PORT || 5500;
ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 5500...")
);