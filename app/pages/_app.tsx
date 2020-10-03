import { ColorModeProvider, CSSReset, theme, ThemeProvider } from "@chakra-ui/core"
import { loadStripe } from "@stripe/stripe-js"
import { AppProps, ErrorComponent, useRouter } from "blitz"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"
import { queryCache } from "react-query"

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!)

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      resetKeys={[router.asPath]}
      onReset={() => {
        // This ensures the Blitz useQuery hooks will automatically refetch
        // data any time you reset the error boundary
        queryCache.resetErrorBoundaries()
      }}
    >
      <ThemeProvider theme={theme}>
        <ColorModeProvider value="dark">
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <ErrorComponent
      statusCode={(error as any)?.statusCode || 400}
      title={error?.message || error?.name}
    />
  )
}
