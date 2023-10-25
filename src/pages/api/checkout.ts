import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '@/lib/stripe'

// Acessível na rota "/api/hello".
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body
  console.log('priceId:', priceId)

  // Nossos dados formatados para o exigido pelo Stripe.
  const lineItems: { price: any; quantity: number }[] = []

  priceId.forEach((item: any) => {
    lineItems.push({
      price: item,
      quantity: 1,
    })
  })

  console.log(lineItems)

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed.',
    })
  }

  if (!priceId) {
    return res.status(400).json({
      error: 'Price not found.',
    })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: lineItems,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
