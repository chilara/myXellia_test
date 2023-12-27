import React from "react";
import DarkNavbar from "./darkNavbar";
import LightNavbar from "./lightNavbar";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box position={"fixed"} top={0} left={0} right={0}>
      <DarkNavbar />
      <LightNavbar />
    </Box>
  );
};

export default Navbar;
