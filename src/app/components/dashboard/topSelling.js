import React from "react";
import Image from "next/image";
import noImg from "../../../app/assets/noImg.svg";
import cross from "../../../app/assets/cross.svg";
import bulb from "../../../app/assets/bulb.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

const TopSelling = () => {
  return (
    <>
      {" "}
      {/* Top Selling */}
      <Box
        borderRadius={"16px"}
        backgroundColor={"#fff"}
        boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
        padding={"18px"}
        width={"30%"}
        position={"relative"}
      >
        <Text
          fontSize={"16px"}
          fontWeight={600}
          color={"#12D8A0"}
          fontStyle={"normal"}
          mt={".6rem"}
        >
          Top Selling
        </Text>
        <Text
          fontSize={"28px"}
          fontWeight={600}
          color={"191919"}
          fontStyle={"normal"}
          mt={".5rem"}
        >
          $0
          <span style={{ color: "#cbcbcb" }}>.00</span>
        </Text>
        <Text
          fontSize={"14px"}
          fontWeight={400}
          color={"#606060"}
          fontStyle={"normal"}
        >
          Total Sold
        </Text>
        <Flex mt={".6rem"} gap={"1rem"}>
          <Flex
            width={"155px"}
            height={"154px"}
            backgroundColor={"#f5f5f5"}
            borderRadius={"12px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image src={noImg} alt="noImg" width={100} height={100} />
          </Flex>
          <Flex flexDir={"column"} gap={"1.5rem"}>
            <Text
              fontSize={"20px"}
              fontWeight={600}
              color={"191919"}
              fontStyle={"normal"}
            >
              None
            </Text>
            <Flex flexDir={"column"}>
              <Text
                fontSize={"14px"}
                fontWeight={600}
                color={"#cbcbcb"}
                fontStyle={"normal"}
              >
                0
              </Text>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                color={"606060"}
                fontStyle={"normal"}
              >
                Whole units sold
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          backgroundColor={"#4545FE"}
          borderRadius={"70px"}
          boxShadow={"4px 4px 8px 0px rgba(123, 157, 157, 0.15)"}
          padding={"12px"}
          width={"65%"}
          position={"absolute"}
          right={-4}
          bottom={7}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image src={bulb} alt="bulb" width={24} height={24} />
          <Text
            fontSize={"20px"}
            fontWeight={400}
            color={"#ffffff"}
            fontStyle={"normal"}
          >
            Veerge Assistant
          </Text>
          <Image src={cross} alt="cross" width={24} height={24} />
        </Box>
      </Box>
    </>
  );
};

export default TopSelling;
