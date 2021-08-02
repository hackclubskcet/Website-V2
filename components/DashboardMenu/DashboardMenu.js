import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import {
  FaBell,
  FaClipboardCheck,
  FaDiscord,
  FaPeopleCarry,
  FaPersonBooth,
  FaRss,
  FaUserFriends,
} from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { Logo } from "@choc-ui/logo";
import Footer from "../Footer/Footer";
import DashboardHome from "./DashboardComingSoon";

import Link from "next/link";
import Banner from "@hackclub/banner";

export default function DashboardMenu(props) {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: useColorModeValue("gray.600", "gray.300"),
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("gray.800", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Logo />
        <Link href="/">
          <a>
            <Banner
                year={2021}
                href="/"
                style={{width: "170px"} }
            />
          </a>
        </Link>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link href="/">
          <a>
            <NavItem icon={MdHome}>Home</NavItem>
          </a>
        </Link>
        <Link href="https://discord.gg/gREKADreg9">
          <a>
            <NavItem icon={FaDiscord}>Discord community</NavItem>
          </a>
        </Link>
        <Link href="/dashboard/comingsoon/">
          <a>
            <NavItem color="" icon={FaClipboardCheck}>
              Resources
            </NavItem>
          </a>
        </Link>
        <Link href="/dashboard/giveaways/">
          <a>
            <NavItem fontSize="sm" icon={AiFillGift}>
              Giveaways
            </NavItem>
          </a>
        </Link>
        <Link href="/members/">
          <a>
            <NavItem icon={FaUserFriends}>Members</NavItem>
          </a>
        </Link>
        <Link href="/dashboard/comingsoon/">
          <a>
            <NavItem color="" icon={BsGearFill}>
              Settings
            </NavItem>
          </a>
        </Link>
      </Flex>
    </Box>
  );
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
            wanted to be a part of SKCET's most active community. At Hack Club
            SKCET, we belive that team based learning is the most effective way
            to learn a new skill / technology / hobby. We encourage you to join
            our Discord channel - the primary medium of communication. We love
            to discuss healthy topics and trending technologies in our Discord.
            Hack Club is a place for our students to have fun, learn and grow
            together. Please feel free to introduce yourself when you join our
            Discord channel.
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
