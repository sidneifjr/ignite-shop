import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'Ignite Shop',
  },
})
