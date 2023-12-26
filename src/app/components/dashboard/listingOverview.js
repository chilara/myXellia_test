import React from "react";
import Image from "next/image";
import Bookmark from "../../../app/assets/Bookmark.svg";
import noImg from "../../../app/assets/noImg.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

const ListingOverview = () => {
  return (
    <>
      {/* Listing Overview */}
      <Box
        borderRadius={"16px"}
        backgroundColor={"#fff"}
        boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
        padding={"16px"}
        width={"35%"}
      >
        <Text
          fontFamily={"Euclid Circular B"}
          fontSize={"20px"}
          fontWeight={600}
          color={"191919"}
          fontStyle={"normal"}
        >
          Listing Overview
        </Text>
        <Box
          display={"flex"}
          mt={"1rem"}
          gap={"2rem"}
          justifyContent={"space-between"}
        >
          <Box width={"45%"}>
            <Text
              fontFamily={"Euclid Circular B"}
              fontSize={"12px"}
              fontWeight={400}
              color={"191919"}
              fontStyle={"normal"}
              mb={".3rem"}
            >
              Most viewed
            </Text>
            <hr />
            <Flex mt={".6rem"} gap={"1rem"} alignItems={"center"}>
              <Flex
                width={"67px"}
                height={"67px"}
                border={"1px solid #12D8A0"}
                borderRadius={"12px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={noImg} alt="noImg" width={36} height={36} />
              </Flex>
              <Text
                fontFamily={"Euclid Circular B"}
                fontSize={"16px"}
                fontWeight={600}
                color={"191919"}
                fontStyle={"normal"}
              >
                None
              </Text>
            </Flex>
          </Box>
          <Box width={"45%"}>
            <Text
              fontFamily={"Euclid Circular B"}
              fontSize={"12px"}
              fontWeight={400}
              color={"191919"}
              fontStyle={"normal"}
              mb={".3rem"}
            >
              Most shared
            </Text>
            <hr />
            <Flex mt={".6rem"} gap={"1rem"} alignItems={"center"}>
              <Flex
                width={"67px"}
                height={"67px"}
                border={"1px solid #4545FE"}
                borderRadius={"12px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={noImg} alt="noImg" width={36} height={36} />
              </Flex>
              <Text
                fontFamily={"Euclid Circular B"}
                fontSize={"16px"}
                fontWeight={600}
                color={"191919"}
                fontStyle={"normal"}
              >
                None
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box
          display={"flex"}
          backgroundColor={"#F5F5F5"}
          borderRadius={"12px"}
          padding={"12px"}
          mt={"1rem"}
          opacity={0.4}
          justifyContent={"space-between"}
        >
          <Box width={"45%"}>
            <Text
              fontFamily={"Euclid Circular B"}
              fontSize={"12px"}
              fontWeight={400}
              color={"191919"}
              fontStyle={"normal"}
              mb={".3rem"}
            >
              Most watchlisted
            </Text>
            <hr />
            <Flex mt={".6rem"} gap={"1rem"} alignItems={"center"}>
              <Flex
                width={"67px"}
                height={"67px"}
                border={"1px solid #FF9103"}
                borderRadius={"12px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={noImg} alt="noImg" width={36} height={36} />
              </Flex>
              <Text
                fontFamily={"Euclid Circular B"}
                fontSize={"16px"}
                fontWeight={600}
                color={"191919"}
                fontStyle={"normal"}
              >
                None
              </Text>
            </Flex>
          </Box>
          <Box
            width={"45%"}
            height={"67px"}
            border={"1px solid #e4e4e4"}
            borderRadius={"12px"}
            padding={"12px"}
            mt={"2rem"}
            backgroundColor={"#fff"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text
                fontFamily={"Euclid Circular B"}
                fontSize={"20px"}
                fontWeight={600}
                color={"191919"}
                fontStyle={"normal"}
              >
                0
              </Text>
              <Image src={Bookmark} alt="bookmark" width={24} height={24} />
            </Flex>
            <Text
              fontFamily={"Euclid Circular B"}
              fontSize={"10px"}
              fontWeight={400}
              color={"191919"}
              fontStyle={"normal"}
            >
              Number of watchlists
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ListingOverview;
