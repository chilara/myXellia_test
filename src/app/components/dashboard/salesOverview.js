import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import leftArrow from "../../../app/assets/leftArrow.svg";
import rightArrow from "../../../app/assets/rightArrow.svg";
import greenIcon from "../../../app/assets/greenIcon.svg";
import orangeIcon from "../../../app/assets/orangeIcon.svg";
import block from "../../../app/assets/block.svg";

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

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];

const SalesOverview = () => {
  return (
    <>
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
              fontSize={"20px"}
              fontWeight={600}
              color={"191919"}
              fontStyle={"normal"}
            >
              Sales Overview
            </Text>
            <Text
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
                fontSize={"14px"}
                fontWeight={400}
                color={"3d3d3d"}
                fontStyle={"normal"}
                padding={"6px 20px"}
              >
                1 Week
              </Box>
              <Box
                fontSize={"14px"}
                fontWeight={400}
                color={"3d3d3d"}
                fontStyle={"normal"}
                padding={"6px 20px"}
              >
                1 Month
              </Box>
              <Box
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
          mt={".5rem"}
        >
          {/* months */}
          <Box
            display={"flex"}
            width={"50%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              width={"18px"}
              height={"18px"}
              borderRadius={"50%"}
              backgroundColor={"#e4e4e4"}
            >
              <Image src={leftArrow} alt="arrow" width={24} height={24} />
            </Box>
            <Box display={"flex"} flexDir={"column"} mt={"9rem"}>
              <Box width={"100%"}></Box>
              <hr />
              <Flex gap={".8rem"} justifyContent={"space-between"} mt={".5rem"}>
                {months.map((item, index) => (
                  <Text
                    key={index}
                    fontSize={"10px"}
                    fontWeight={500}
                    color={"#919191"}
                    fontStyle={"normal"}
                  >
                    {item}
                  </Text>
                ))}
              </Flex>
            </Box>
            <Image src={block} alt="block" width={73} height={163} />
            <Box
              width={"18px"}
              height={"18px"}
              borderRadius={"50%"}
              backgroundColor={"#e4e4e4"}
              position={"absolute"}
              top={300}
              left={420}
            >
              <Image src={rightArrow} alt="arrow" width={24} height={24} />
            </Box>
            <hr />
          </Box>
          {/* Dealings */}
          <Box
            width={"60%"}
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
                <Box
                  fontSize={"20px"}
                  fontWeight={600}
                  color={item.color}
                  fontStyle={"normal"}
                >
                  {index === 2 ? (
                    <p>
                      <span>$0</span>
                      <span style={{ color: "#CBCBCB" }}>.00</span>
                    </p>
                  ) : (
                    item.amount
                  )}
                </Box>
                <Flex alignItems={"center"} gap={".2rem"} mt={".2rem"}>
                  <Text
                    fontSize={"10px"}
                    fontWeight={600}
                    color={"#3d3d3d"}
                    fontStyle={"normal"}
                  >
                    {item.title}
                  </Text>
                  <Image src={item.icon} alt="arrow" width={14} height={14} />
                  <Text
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
    </>
  );
};

export default SalesOverview;
