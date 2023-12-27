import React from "react";
import Image from "next/image";
import customer from "../../../app/assets/customer.svg";
import slimArrow from "../../../app/assets/slimArrow.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Customer = [
  {
    number: "0",
    content: "Total",
  },
  {
    number: "0",
    content: "New",
  },
  {
    number: "0",
    content: "Active",
  },
  {
    number: "0",
    content: "Inactive",
  },
];

const CustomerOverview = () => {
  return (
    <>
      {/* Customers Overview */}
      <Box
        borderRadius={"16px"}
        backgroundColor={"#fff"}
        boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
        padding={"16px"}
        mt={"1rem"}
      >
        <Flex justifyContent={"space-between"} mb={"1rem"}>
          <Flex gap={".5rem"} alignItems={"center"}>
            <Image src={customer} alt="customer" width={24} height={24} />
            <Text
              fontSize={"14px"}
              fontWeight={500}
              color={"3d3d3d"}
              fontStyle={"normal"}
            >
              Customers Overview
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Text
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
        <Box display={"flex"} gap={"1rem"} mt={"1.5rem"}>
          {Customer.map((item, index) => (
            <Flex
              key={index}
              borderRadius={"12px"}
              border={"1px solid #e4e4e4"}
              backgroundColor={"#fff"}
              padding={"12px 16px"}
              width={"65%"}
              flexDir={"column"}
            >
              <Text
                fontSize={"24px"}
                fontWeight={600}
                color={"#191919"}
                fontStyle={"normal"}
                textAlign={"center"}
              >
                {item.number}
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight={400}
                color={"#606060"}
                fontStyle={"normal"}
                textAlign={"center"}
              >
                {item.content}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CustomerOverview;
