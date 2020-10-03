import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/core"
import { BlitzPage, GetServerSideProps, Link, PromiseReturnType, ssrQuery } from "blitz"
import getCheckoutSession from "../queries/getCheckoutSession"

type PageProps = {
  sessionData: PromiseReturnType<typeof getCheckoutSession>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ req, res, query }) => {
  const sessionData = await ssrQuery(
    getCheckoutSession,
    { sessionId: query.session_id as string },
    { req, res }
  )
  return {
    props: { sessionData },
  }
}

const Success: BlitzPage<PageProps> = ({ sessionData }) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="100vh"
    >
      <Box px={"20px"} py={"40px"}>
        <Flex direction="column" alignItems="center">
          <Box mb="7px">
            <Icon name="check-circle" size="50px" color="green.100" />
          </Box>
          <Heading>¡Gracias por confiar en nosotros!</Heading>
          <Box as="pre" my={3}>
            {JSON.stringify(sessionData, null, 2)}
          </Box>
          <Link href="/">
            <Button>Volver a la página de inicio</Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Success
