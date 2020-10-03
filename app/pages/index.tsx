import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core"
import { BlitzPage } from "blitz"
import React from "react"
import ComprarCuadroBoton from "../components/ComprarCuadroBoton"
import Layout from "../layouts/Layout"

const Home: BlitzPage = () => {
  return (
    <Layout>
      <>
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

        <Box mt={5} textAlign="center">
          <Text color="gray.300" fontSize="sm">
            «Aviso a los que venís a la tierrina: Un mes ye veraneo. Dos, invasión.» Rey Pelayo.
          </Text>
        </Box>
      </>
    </Layout>
  )
}

export default Home
