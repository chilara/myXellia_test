import React from "react";
import Image from "next/image";
import hand from "../../../app/assets/hand.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <>
      <Box>
        <Flex>
          <Image src={hand} alt="hand" width={29} height={29} />
          <Text
            fontFamily={"Euclid Circular B"}
            fontSize={"20px"}
            fontWeight={600}
            color={"#191919"}
            fontStyle={"normal"}
          >
            Hi Ahmed
          </Text>
        </Flex>
        <Text
          fontFamily={"Euclid Circular B"}
          fontSize={"12px"}
          fontWeight={400}
          color={"#3d3d3d"}
          fontStyle={"normal"}
          mt={".8rem"}
        >
          Welcome to your Dashboard
        </Text>
      </Box>
    </>
  );
};

export default Welcome;
