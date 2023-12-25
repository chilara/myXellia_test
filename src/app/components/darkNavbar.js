import React from "react";
import Image from "next/image";
import logo from "../../app/assets/logo.svg";
import { Box } from "@chakra-ui/react";

const DarkNavbar = () => {
  return (
    <Box padding={"20px 16px"} backgroundColor={"#000"}>
      <Image src={logo} alt="logo" width={90} height={60} />
    </Box>
  );
};

export default DarkNavbar;
