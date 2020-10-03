import Stripe from "stripe"

type GetCheckoutSessionInput = {
  sessionId: string
}

export default async function getCheckoutSession({ sessionId }: GetCheckoutSessionInput) {
  const { STRIPE_SECRET } = process.env

  const stripe = new Stripe(STRIPE_SECRET!, {
    apiVersion: "2020-08-27",
  })

  const session = await stripe.checkout.sessions.retrieve(sessionId)

  return session
}
