import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
      </Box>
    </ChakraProvider>
  );
}
