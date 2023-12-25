import React from "react";
import DarkNavbar from "./darkNavbar";
import LightNavbar from "./lightNavbar";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <DarkNavbar />
      <LightNavbar />
    </Box>
  );
};

export default Navbar;
