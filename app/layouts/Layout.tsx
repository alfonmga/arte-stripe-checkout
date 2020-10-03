import { Flex } from "@chakra-ui/core"
import React from "react"

function Layout({ children }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="100%"
      h="100%"
      minHeight={{ xs: "initial", md: "100vh" }}
      justifyContent={{ xs: "flex-start", md: "center" }}
      py={5}
      px={2}
    >
      <Flex direction="column" alignItems="center" textAlign="center">
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
