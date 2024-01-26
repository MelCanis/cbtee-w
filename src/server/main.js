require('dotenv').config()

const express = require("express");
const ViteExpress = require("vite-express");
const app = express();
// ViteExpress.config({ mode: "production" })
app.use(express.json())
const cors = require('cors');
app.use(
  cors({
    origin: "https://connectingbacktoearthelements.com"
  })
)
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.post('/api/checkout', async (req, res) => {
  try {
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          mode: 'payment',
          line_items: req.body.items.map( i => {
            return {
              price_data: {
                currency: 'usd',
                product_data: {
                    name: i.name
                },
                unit_amount: i.price
              },
              quantity: 1
            }
          } ),
          success_url: `${process.env.SERVER_URL}/success`,
          cancel_url: `${process.env.SERVER_URL}/shop`,
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
      })
      res.json({ url: session.url })
  } catch (e) {
      res.status(500).json({ error: e.message })
  }
})

ViteExpress.listen(app, 5500, () =>
  console.log("Server is listening on port 5500...")
);



