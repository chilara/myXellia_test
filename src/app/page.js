import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";

export default function Home() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Dashboard />
      </Box>
    </ChakraProvider>
  );
}
