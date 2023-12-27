import React from "react";
import Image from "next/image";
import Home from "../../../app/assets/Home.svg";
import Location from "../../../app/assets/Location.svg";
import Profile from "../../../app/assets/Profile.svg";
import Wallet from "../../../app/assets/Wallet.svg";
import Req from "../../../app/assets/Req.svg";
import Setting from "../../../app/assets/Setting.svg";
import Search from "../../../app/assets/Search.svg";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

export const Data = [
  {
    icon: Location,
    title: "Listings",
  },
  {
    icon: Profile,
    title: "Users",
  },
  {
    icon: Wallet,
    title: "Account",
  },
  {
    icon: Req,
    title: "Request",
  },
  {
    icon: Setting,
    title: "Settings",
  },
];

const LightNavbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      padding={"16px"}
      backgroundColor={"#fff"}
      px={"4rem"}
      //   border={"1px solid green"}
    >
      <Box
        borderRadius={"8px"}
        backgroundColor={"#F5F5F5"}
        width={"9rem"}
        padding={"6px 2px"}
        display={"flex"}
        gap={"1rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={Home} alt="home" width={26} height={26} />
        <Text
          fontSize={"14px"}
          fontWeight={600}
          color={"#191919"}
          fontStyle={"normal"}
        >
          Dashboard
        </Text>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} gap={"5rem"}>
        {Data.map((item, index) => (
          <Flex
            key={index}
            gap={".8rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image src={item.icon} alt="location" width={26} height={26} />
            <Text
              fontSize={"14px"}
              fontWeight={400}
              color={"#3d3d3d"}
              fontStyle={"normal"}
            >
              {item.title}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Flex width={"25%"}>
        <InputGroup backgroundColor={"#f5f5f5"} borderRadius={"12px"}>
          <Input
            placeholder="Search... properties, customers here"
            fontSize={"12px"}
          />
          <InputRightElement>
            <Image src={Search} alt="search" width={24} height={24} />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default LightNavbar;
