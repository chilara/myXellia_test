"use client";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../app/assets/logo.svg";
import Plus from "../../../app/assets/Plus.svg";
import calendarIcon from "../../../app/assets/calendarIcon.svg";
import Notification from "../../../app/assets/Notification.svg";
import user from "../../../app/assets/user.svg";
import Frame from "../../../app/assets/Frame.svg";
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import calAL from "../../../app/assets/calAL.svg";
import calAR from "../../../app/assets/calAR.svg";

export const Days = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

export const nums = [
  "29",
  "30",
  "31",
  "Nov 1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "Dec 1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];

const DarkNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      padding={"20px 16px"}
      backgroundColor={"#000"}
      px="4rem"
    >
      <Flex flexDir={"column"}>
        <Image src={logo} alt="logo" width={90} height={60} />
        <Text
          fontSize={"14px"}
          fontWeight={400}
          color={"#fff"}
          fontStyle={"normal"}
        >
          For Mainstone
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"} gap={"3rem"}>
        <Flex justifyContent={"space-between"} gap={"1rem"}>
          <Image src={Plus} alt="plus" width={26} height={26} />

          <Image
            src={calendarIcon}
            alt="calendarIcon"
            width={26}
            height={26}
            style={{ cursor: "pointer" }}
            ref={btnRef}
            onClick={onOpen}
          />

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="sm"
          >
            <DrawerOverlay />
            <DrawerContent
              mt={"5.5rem"}
              width={"100%"}
              height={"1100px"}
              boxShadow={
                "2.914px 2.914px 5.829px 0px rgba(123, 157, 157, 0.15), -2.914px -2.914px 5.829px 0px rgba(123, 157, 157, 0.15)"
              }
              backgroundColor={"#0D0D0D"}
            >
              <DrawerBody>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  padding={"12.85px 24px 13.15px 22.746px"}
                  width={"100%"}
                  backgroundColor={"#171717"}
                >
                  <Text
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#fff"}
                    fontStyle={"normal"}
                  >
                    Calendar
                  </Text>
                  <DrawerCloseButton
                    mr={"3.2rem"}
                    mt={".6rem"}
                    border={"none"}
                    color={"#fff"}
                  />
                </Box>
                <Box
                  width={"227px"}
                  height={"24px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"29px"}
                  mt={"1.5rem"}
                  mb={"2rem"}
                  ml={"20%"}
                >
                  <Image src={calAL} alt="calAL" width={24} height={24} />
                  <Text
                    fontSize={"16px"}
                    fontWeight={600}
                    color={"#fff"}
                    fontStyle={"normal"}
                  >
                    November 2023
                  </Text>
                  <Image src={calAR} alt="calAR" width={24} height={24} />
                </Box>
                <Box
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  border={"0.474px solid #242424"}
                >
                  <Box
                    height={"20.4px"}
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    {Days.map((item, index) => (
                      <Flex
                        key={index}
                        fontSize={"7.576px"}
                        fontWeight={500}
                        color={"#969696"}
                        fontStyle={"normal"}
                        width={"50.143px"}
                        padding={"5.6px"}
                        borderRight={"0.474px solid #242424"}
                        borderBottom={"0.474px solid #242424"}
                      >
                        {item}
                      </Flex>
                    ))}
                  </Box>
                  <Box
                    display={"flex"}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={"100%"}
                  >
                    {nums.map((item, index) => (
                      <Flex
                        key={index}
                        height={"91.2px"}
                        fontSize={"9.944px"}
                        fontWeight={500}
                        color={"#969696"}
                        fontStyle={"normal"}
                        width={"50px"}
                        padding={"5.682px"}
                        borderRight={"0.474px solid #242424"}
                        borderBottom={"0.474px solid #242424"}
                      >
                        {index === 18 ? (
                          <Text
                            fontSize={"9.944px"}
                            height={"15px"}
                            fontWeight={500}
                            fontStyle={"normal"}
                            backgroundColor={"#2525E6"}
                            borderRadius={"200px"}
                            padding={"0px 10px"}
                            color={"#fff"}
                            textAlign={"center"}
                          >
                            16
                          </Text>
                        ) : (
                          item
                        )}
                      </Flex>
                    ))}
                  </Box>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Image src={Notification} alt="Notification" width={26} height={26} />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Image src={user} alt="user" width={48} height={48} />
          <Text
            fontSize={"16px"}
            fontWeight={500}
            color={"#fff"}
            fontStyle={"normal"}
          >
            Ahmed Ali
          </Text>
          <Image src={Frame} alt="frame" width={24} height={24} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DarkNavbar;
