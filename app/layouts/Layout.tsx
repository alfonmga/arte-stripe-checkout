import { Flex } from "@chakra-ui/core"
import React from "react"

function Layout({ children }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="100%"
      h="100%"
      minHeight="100vh"
      justifyContent="center"
    >
      <Flex direction="column" alignItems="center" textAlign="center">
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout
