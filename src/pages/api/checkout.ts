import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

// Acessível na rota "/api/hello".
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = 'price_1NoE16JGO9QmosftQ6JiyxNu'

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/success`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ],
  })

  // const checkoutSession = await stripe.checkout.sessions.create({
  //   mode: 'payment',
  //   line_items: [
  //     {
  //       price: ID 
  //     }
  //   ]
  // })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}