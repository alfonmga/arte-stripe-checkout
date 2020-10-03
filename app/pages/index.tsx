import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core"
import { BlitzPage } from "blitz"
import ComprarCuadroBoton from "../components/ComprarCuadroBoton"

const Home: BlitzPage = () => {
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
          <Box textAlign="center">
            <Heading size="2xl">Don Pelayo</Heading>
            <Text fontSize="lg">
              El héroe que frenó la expansión de los musulmanes iniciando la reconquista
            </Text>
          </Box>

          <Flex direction="column" alignItems="center" my={"20px"}>
            <Image size="40%" src="/arte/pelayo.jpg" />
          </Flex>

          <ComprarCuadroBoton />
        </Flex>
        <Box mt={5} textAlign="center">
          <Text color="gray.300" fontSize="sm">
            «Aviso a los que venís a la tierrina: Un mes ye veraneo. Dos, invasión.» Rey Pelayo.
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default Home
