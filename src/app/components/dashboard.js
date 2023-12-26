import React from "react";
import Image from "next/image";
import hand from "../../app/assets/hand.svg";
import leftArrow from "../../app/assets/leftArrow.svg";
import rightArrow from "../../app/assets/rightArrow.svg";
import greenIcon from "../../app/assets/greenIcon.svg";
import orangeIcon from "../../app/assets/orangeIcon.svg";
import block from "../../app/assets/block.svg";
import house from "../../app/assets/house.svg";
import slimArrow from "../../app/assets/slimArrow.svg";
import customer from "../../app/assets/customer.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Dealings = [
  {
    amount: "$0.00",
    title: "Balance",
    icon: greenIcon,
    percentage: "0%",
    color: "#4545FE",
  },
  {
    amount: "$0.00",
    title: "Deposit",
    icon: greenIcon,
    percentage: "0%",
    color: "#12D8A0",
  },
  {
    amount: "$0.00",
    title: "Purchase",
    icon: greenIcon,
    percentage: "0%",
    color: "#191919",
  },
  {
    amount: "$0.00",
    title: "Withdrawal",
    icon: orangeIcon,
    percentage: "0%",
    color: "#FF6A6A",
  },
];

export const Property = [
  {
    number: "0",
    content: "Total",
  },
  {
    number: "0",
    content: "Available",
  },
  {
    number: "0",
    content: "Sold Out",
  },
];

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

const Dashboard = () => {
  return (
    <Box px={"4rem"} mt={"2rem"}>
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
          color={"3d3d3d"}
          fontStyle={"normal"}
          mt={".8rem"}
        >
          Welcome to your Dashboard
        </Text>
      </Box>
      <Box mt={".8rem"} display={"flex"} gap={"1.5rem"}>
        {/* Sales Overview */}
        <Box
          borderRadius={"16px"}
          backgroundColor={"#fff"}
          boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
          width={"70%"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            mb={".2rem"}
            padding={"16px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontFamily={"Euclid Circular B"}
                fontSize={"20px"}
                fontWeight={600}
                color={"191919"}
                fontStyle={"normal"}
              >
                Sales Overview
              </Text>
              <Text
                fontFamily={"Euclid Circular B"}
                fontSize={"12px"}
                fontWeight={400}
                color={"606060"}
                fontStyle={"normal"}
                mt={".4rem"}
              >
                Showing overview Jan 2022 - Sep 2022
              </Text>
            </Flex>
            <Box
              display={"flex"}
              flexDir={"column"}
              justifyContent={"flex-end"}
              alignItems={"end"}
            >
              <Box
                border={"1px solid #cbcbcb"}
                borderRadius={"12px"}
                color={"#cbcbcb"}
                padding={"14px 30px"}
                fontSize={"12px"}
              >
                View Transactions
              </Box>
              <Box display={"flex"} mt={"1rem"} justifyContent={"space-evenly"}>
                <Box
                  fontFamily={"Euclid Circular B"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"3d3d3d"}
                  fontStyle={"normal"}
                  padding={"6px 20px"}
                >
                  1 Week
                </Box>
                <Box
                  fontFamily={"Euclid Circular B"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"3d3d3d"}
                  fontStyle={"normal"}
                  padding={"6px 20px"}
                >
                  1 Month
                </Box>
                <Box
                  fontFamily={"Euclid Circular B"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"3d3d3d"}
                  fontStyle={"normal"}
                  padding={"6px 20px"}
                  borderRadius={"8px"}
                  backgroundColor={"#f5f5f5"}
                  textAlign={"center"}
                >
                  1 Year
                </Box>
              </Box>
            </Box>
          </Box>
          <hr />
          <Box
            padding={"16px"}
            display={"flex"}
            justifyContent={"space-between"}
            mt={"1rem"}
          >
            {/* months */}
            <Box
              display={"flex"}
              width={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                width={"18"}
                height={"18"}
                borderRadius={"50%"}
                backgroundColor={"#e4e4e4"}
              >
                <Image src={leftArrow} alt="arrow" width={24} height={24} />
              </Box>
              <Box borderBottom={"1px solid e4e4e4"} width={"100%"}></Box>
              <Image src={block} alt="block" width={73} height={163} />
              <Box
                width={"18"}
                height={"18"}
                borderRadius={"50%"}
                backgroundColor={"#e4e4e4"}
              >
                <Image src={rightArrow} alt="arrow" width={24} height={24} />
              </Box>
              <hr />
            </Box>
            {/* Dealings */}
            <Box
              width={"50%"}
              display={"flex"}
              flexWrap={"wrap"}
              gap={"1rem"}
              justifyContent={"flex-end"}
            >
              {Dealings.map((item, index) => (
                <Flex
                  key={index}
                  borderRadius={"12px"}
                  border={"1px solid #e4e4e4"}
                  backgroundColor={"#fff"}
                  padding={"12px 16px"}
                  width={"45%"}
                  flexDir={"column"}
                >
                  <Text
                    fontFamily={"Proxima Nova"}
                    fontSize={"20px"}
                    fontWeight={600}
                    color={item.color}
                    fontStyle={"normal"}
                  >
                    {item.amount}
                  </Text>
                  <Flex alignItems={"center"} gap={".2rem"}>
                    <Text
                      fontFamily={"Proxima Nova"}
                      fontSize={"10px"}
                      fontWeight={600}
                      color={"#3d3d3d"}
                      fontStyle={"normal"}
                    >
                      {item.title}
                    </Text>
                    <Image src={item.icon} alt="arrow" width={14} height={14} />
                    <Text
                      fontFamily={"Proxima Nova"}
                      fontSize={"10px"}
                      fontWeight={600}
                      color={index === 3 ? "#FF6A6A" : "#12D8A0"}
                      fontStyle={"normal"}
                    >
                      {item.percentage}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Box>
          </Box>
        </Box>
        <Box width={"40%"}>
          {/* Property Overview */}
          <Box
            borderRadius={"16px"}
            backgroundColor={"#fff"}
            boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
            padding={"16px"}
          >
            <Flex justifyContent={"space-between"} mb={"1rem"}>
              <Flex gap={".5rem"} alignItems={"center"}>
                <Image src={house} alt="house" width={24} height={24} />
                <Text
                  fontFamily={"Euclid Circular B"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"3d3d3d"}
                  fontStyle={"normal"}
                >
                  Property Overview
                </Text>
              </Flex>
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
            <Box display={"flex"} gap={"1rem"} mt={"1.5rem"}>
              {Property.map((item, index) => (
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
                    fontFamily={"Euclid Circular B"}
                    fontSize={"24px"}
                    fontWeight={600}
                    color={"#191919"}
                    fontStyle={"normal"}
                    textAlign={"center"}
                  >
                    {item.number}
                  </Text>
                  <Text
                    fontFamily={"Euclid Circular B"}
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
                  fontFamily={"Euclid Circular B"}
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
                    fontFamily={"Euclid Circular B"}
                    fontSize={"24px"}
                    fontWeight={600}
                    color={"#191919"}
                    fontStyle={"normal"}
                    textAlign={"center"}
                  >
                    {item.number}
                  </Text>
                  <Text
                    fontFamily={"Euclid Circular B"}
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
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
