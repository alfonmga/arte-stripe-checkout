import Stripe from "stripe"

export default async function createCheckoutSession() {
  const { STRIPE_SECRET, STRIPE_PRODUCT_PRICE_ID, DOMAIN_URL } = process.env

  const stripe = new Stripe(STRIPE_SECRET!, {
    apiVersion: "2020-08-27",
  })
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price: STRIPE_PRODUCT_PRICE_ID,
        quantity: 1,
      },
    ],
    success_url: `${DOMAIN_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${DOMAIN_URL}/?status=CANCELLED`,
  })

  return session.id
}
