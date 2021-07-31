import {
  chakra,
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
  SimpleGrid,
  InputLeftElement,
  Text,
  useColorModeValue,
  useDisclosure,
  Heading,
  HStack,
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

export default function DashboardGiveaways(props) {
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
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("white", "white")}
          fontWeight="semibold"
        >
          SKCET
        </Text>
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
          <Heading p={10}>Giveaways</Heading>
          <Text paddingLeft={10}>
            We giveaway swag, access to paid courses and tools occasionally.
            Stay tuned to our Discord for instant updates about the upcoming
            giveaways.
          </Text>
          <GiveawayCard />
        </Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
}

function GiveawayCard() {
  return (
    <SimpleGrid paddingTop={10} columns={[1, null, 3]} spacing="40px">
      <Link href="https://repl.it/claim?code=h4ckc1ub21">
        <a>
          <Flex
            maxW="md"
            mx="auto"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <Box
              w={1 / 3}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://uptime.com/media/website_profiles/repl.it.png')",
              }}
            ></Box>

            <Box w={2 / 3} p={{ base: 4, md: 4 }}>
              <chakra.h1
                fontSize="2xl"
                fontWeight="bold"
                color={useColorModeValue("gray.800", "white")}
              >
                Repl.it Pro
              </chakra.h1>

              <chakra.p
                mt={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Repl.it is an online coding IDE with tons of features
              </chakra.p>

              <Flex mt={3} alignItems="center" justifyContent="space-between">
                <chakra.h1
                  textDecoration="line-through"
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  $ 7
                </chakra.h1>
                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                  FREE
                </chakra.h1>
                <chakra.button
                  px={2}
                  py={1}
                  bg="white"
                  fontSize="xs"
                  color="gray.900"
                  fontWeight="bold"
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: "gray.200",
                  }}
                  _focus={{
                    bg: "gray.400",
                  }}
                >
                  CLAIM
                </chakra.button>
              </Flex>
            </Box>
          </Flex>
        </a>
      </Link>

      <Flex
        opacity="0.4"
        maxW="md"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://pbs.twimg.com/media/DcXwOo8VwAA_oRt.jpg')",
          }}
        ></Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            Sticker pack
          </chakra.h1>

          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Repl.it is an online coding IDE with tons of features
          </chakra.p>

          <Flex mt={3} alignItems="center" justifyContent="space-between">
            <chakra.h1
              textDecoration="line-through"
              color="white"
              fontWeight="bold"
              fontSize="lg"
            >
              $ 5
            </chakra.h1>
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              FREE
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              CLAIMED
            </chakra.button>
          </Flex>
        </Box>
      </Flex>

      <Flex
        opacity="0.4"
        maxW="md"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://yt3.ggpht.com/ytc/AKedOLRrH_wT7RwStCNum43bUnEavYBJNISAWhmMJgJWOg=s900-c-k-c0x00ffffff-no-rj')",
          }}
        ></Box>

        <Box w={2 / 3} p={{ base: 4, md: 4 }}>
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >
            Figma Pro
          </chakra.h1>

          <chakra.p
            mt={1}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Figma is a popular wireframing and prototyping tool.
          </chakra.p>

          <Flex mt={3} alignItems="center" justifyContent="space-between">
            <chakra.h1
              textDecoration="line-through"
              color="white"
              fontWeight="bold"
              fontSize="lg"
            >
              $ 12
            </chakra.h1>
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              FREE
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              CLAIMED
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
