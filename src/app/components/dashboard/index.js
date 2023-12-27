import React from "react";
import { Box } from "@chakra-ui/react";
import SalesOverview from "./salesOverview";
import PropertyOverview from "./propertyOverview";
import CustomerOverview from "./customerOverview";
import ListingOverview from "./listingOverview";
import OutstandingBalance from "./outstandingBalance";
import TopSelling from "./topSelling";
import Footer from "./footer";
import Welcome from "./welcome";

const Dashboard = () => {
  return (
    <Box px={"4rem"} mt={"12rem"}>
      <Welcome />
      <Box mt={".8rem"} display={"flex"} gap={"1.5rem"}>
        <SalesOverview />
        <Box width={"40%"}>
          <PropertyOverview />
          <CustomerOverview />
        </Box>
      </Box>
      <Box display={"flex"} gap={"1.2rem"} mt={"1.5rem"} mb={"1rem"}>
        <ListingOverview />
        <OutstandingBalance />
        <TopSelling />
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
