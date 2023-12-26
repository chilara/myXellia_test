import React from "react";
import Image from "next/image";
import leftArrow from "../../../app/assets/leftArrow.svg";
import rightArrow from "../../../app/assets/rightArrow.svg";
import slimArrow from "../../../app/assets/slimArrow.svg";
import noImg from "../../../app/assets/noImg.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

const OutstandingBalance = () => {
  return (
    <>
      {/* Outstanding balance */}
      <Box
        borderRadius={"16px"}
        backgroundColor={"#fff"}
        boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
        padding={"18px"}
        width={"32%"}
        position={"relative"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"1rem"}
        >
          <Text
            fontFamily={"Euclid Circular B"}
            fontSize={"28px"}
            fontWeight={600}
            color={"191919"}
            fontStyle={"normal"}
          >
            $0
            <span style={{ color: "#cbcbcb" }}>.00</span>
          </Text>
          <Flex alignItems={"center"}>
            <Text
              fontFamily={"Euclid Circular B"}
              fontSize={"12px"}
              fontWeight={500}
              color={"#cbcbcb"}
              fontStyle={"normal"}
            >
              View all
            </Text>
            <Image src={slimArrow} alt="arrow" width={18} height={18} />
          </Flex>
        </Flex>
        <Text
          fontFamily={"Euclid Circular B"}
          fontSize={"14px"}
          fontWeight={400}
          color={"#606060"}
          fontStyle={"normal"}
        >
          Total Outstanding Balance
        </Text>
        <Flex mt={"2rem"} gap={"1.3rem"}>
          <Flex
            width={"154px"}
            height={"155px"}
            backgroundColor={"#f5f5f5"}
            borderRadius={"12px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image src={noImg} alt="noImg" width={100} height={100} />
          </Flex>
          <Flex flexDir={"column"} gap={"2rem"}>
            <Text
              fontFamily={"Euclid Circular B"}
              fontSize={"20px"}
              fontWeight={600}
              color={"191919"}
              fontStyle={"normal"}
            >
              None
            </Text>
            <Flex flexDir={"column"}>
              <Text
                fontFamily={"Euclid Circular B"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#FF6A6A"}
                fontStyle={"normal"}
              >
                $0.00
              </Text>
              <Text
                fontFamily={"Euclid Circular B"}
                fontSize={"12px"}
                fontWeight={400}
                color={"606060"}
                fontStyle={"normal"}
              >
                Outstanding Balance
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap={".7rem"}
          alignItems={"center"}
          position={"absolute"}
          left={320}
          bottom={35}
        >
          <Text
            fontFamily={"Euclid Circular B"}
            fontSize={"14px"}
            fontWeight={400}
            color={"#606060"}
            fontStyle={"normal"}
          >
            1/5
          </Text>
          <Box
            width={"32px"}
            height={"32px"}
            borderRadius={"50%"}
            backgroundColor={"#e4e4e4"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Image src={leftArrow} alt="arrow" width={24} height={24} />
          </Box>
          <Box
            width={"32px"}
            height={"32px"}
            borderRadius={"50%"}
            backgroundColor={"#e4e4e4"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
          >
            <Image src={rightArrow} alt="arrow" width={24} height={24} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default OutstandingBalance;
