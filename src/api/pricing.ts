import Stripe from 'stripe'
import { NextApiRequest, NextApiResponse } from 'next'

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: '2022-11-15',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const price = await stripe.prices.retrieve('price_1Mq8fdF1546knLTb4ZS4gqVd', {
    expand: ['product'],
  })
  const product = {
    priceId: price.id,
     amount: price.unit_amount ?? 0 / 100,
    }
    
    
    
  
  res.status(200).json({ product })
}

