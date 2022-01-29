import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue,
  useDisclosure,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SidebarContent from "./SideBarContent";

export default function DashboardComingSoon(props) {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          <Heading p={10}>Coming Soon</Heading>
          <Text p={10}>
            More features will be added in this portal in the upcoming days.
            Please let us know if you are intrested in contributing to our
            portal.
          </Text>
          <Text fontWeight={"bold"} p={10}>
            NOTE : This platform is currently under development. All the updates
            are given through Discord. You can join our discord on the side
            menu.{" "}
          </Text>
        </Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
}
