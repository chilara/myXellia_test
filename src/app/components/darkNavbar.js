import React from "react";
import Image from "next/image";
import logo from "../../app/assets/logo.svg";
import Plus from "../../app/assets/Plus.svg";
import Calendar from "../../app/assets/Calendar.svg";
import Notification from "../../app/assets/Notification.svg";
import user from "../../app/assets/user.svg";
import Frame from "../../app/assets/Frame.svg";
import { Box, Flex, Text } from "@chakra-ui/react";

const DarkNavbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      padding={"20px 16px"}
      backgroundColor={"#000"}
      px={"4rem"}
    >
      <Flex flexDir={"column"}>
        <Image src={logo} alt="logo" width={90} height={60} />
        <Text
          fontFamily={"Proxima Nova"}
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
            src={Calendar}
            alt="calendar"
            width={26}
            height={26}
            style={{ cursor: "pointer" }}
            // onClick={() => console.log("Image clicked")}
          />
          <Image src={Notification} alt="Notification" width={26} height={26} />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Image src={user} alt="user" width={48} height={48} />
          <Text
            fontFamily={"Euclid Circular B"}
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
