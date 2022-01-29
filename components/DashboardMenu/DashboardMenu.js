import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";

import React from "react";

import SidebarContent from "./SideBarContent";

export default function DashboardMenu(props) {
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
          <Heading p={10}>Welcome {props.name}</Heading>
          <Text p={10}>
            Thanks for joining Hack Club SKCET. We are happy to know that you
            wanted to be a part of SKCET&apos;s most active community. At Hack
            Club SKCET, we belive that team based learning is the most effective
            way to learn a new skill / technology / hobby. We encourage you to
            join our Discord channel - the primary medium of communication. We
            love to discuss healthy topics and trending technologies in our
            Discord. Hack Club is a place for our students to have fun, learn
            and grow together. Please feel free to introduce yourself when you
            join our Discord channel.
            <br />
            <br />
            More features will be rolled out in this portal in the upcoming
            days. We have added you to our members list which is available on
            the side menu.
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
