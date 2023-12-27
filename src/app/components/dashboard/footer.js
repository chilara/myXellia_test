import React from "react";
import Image from "next/image";
import lock from "../../../app/assets/lock.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={".5rem"}
        mb={"1.5rem"}
      >
        <Image src={lock} alt="lock" width={16} height={16} />
        <Text
          fontSize={"16px"}
          fontWeight={400}
          color={"#919191"}
          fontStyle={"normal"}
        >
          End-end encryption
        </Text>
      </Box>
    </>
  );
};

export default Footer;
