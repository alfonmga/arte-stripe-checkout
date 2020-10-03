import { Button, CircularProgress } from "@chakra-ui/core"
import React from "react"
import createCheckoutSession from "../queries/createCheckoutSession"

function ComprarCuadroBoton() {
  const [isLoading, setLoading] = React.useState(false)

  const onClick = async () => {
    setLoading(true)
    const stripe = window.Stripe!(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!)
    const sessionId = await createCheckoutSession()
    await stripe.redirectToCheckout({
      sessionId,
    })
  }

  return (
    <Button size="lg" variantColor="teal" onClick={onClick} isDisabled={isLoading}>
      {isLoading && <CircularProgress size="12px" style={{ marginRight: "7px" }} />}
      {"Comprar cuadro de Don Pelayo (100.00€)"}
    </Button>
  )
}

export default ComprarCuadroBoton
