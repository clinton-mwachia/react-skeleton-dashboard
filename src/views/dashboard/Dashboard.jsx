import { Box, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

import Card from "./Card";
import BarChart from "./chats/BarChart";
import LineChart from "./chats/LineChart";

const Dashboard = () => {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Card title={"Users"} stat={"5,000"} icon={<BsPerson size={"3em"} />} />
        <Card
          title={"Servers"}
          stat={"1,000"}
          icon={<FiServer size={"3em"} />}
        />
        <Card
          title={"Datacenters"}
          stat={"7"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={3} mt={7}>
        <Box borderWidth="1px" borderRadius="lg" p={3}>
          <BarChart />
        </Box>
        <Box borderWidth="1px" borderRadius="lg" p={3}>
          <LineChart />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
