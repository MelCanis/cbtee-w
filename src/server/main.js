require('dotenv').config()

const express = require("express");
const ViteExpress = require("vite-express");
const app = express();
ViteExpress.config({ mode: "production" })
app.use(express.json())
const cors = require('cors');
app.use(
  cors(
    // { origin: "https://cbtee.vercel.app/" }
  )
)
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.post('/api/checkout', async (req, res) => {
  try {
      console.log("post made")  
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
          success_url: `${req.body.location}`,
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
      })
      res.json({ url: session.url })
  } catch (e) {
      console.log("is internal")
      res.status(500).json({ error: e.message })
  }
})

const PORT = process.env.PORT || 5500;
ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 5500...")
);