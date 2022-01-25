import React from "react";
import {
  chakra,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import Banner from "@hackclub/banner";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useViewportScroll } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import {
  AiFillHome,
  AiOutlineInbox,
  AiOutlineMenu,
  AiFillGift,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import {
  FaMoon,
  FaSignOutAlt,
  FaSun,
  FaTable,
  FaUserFriends,
} from "react-icons/fa";
import { Logo } from "@choc-ui/logo";
import Link from "next/link";

export default function NavbarTwo(props) {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.900");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const Section = (props) => {
    const ic = useColorModeValue("brand.600", "brand.50");
    const hbg = useColorModeValue("gray.50", "brand.400");
    const tcl = useColorModeValue("gray.900", "gray.50");
    const dcl = useColorModeValue("gray.500", "gray.50");
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
      />
    );
  };

  const MobileNavContent = (
    <Box minW={"100%"}>
      <Link href="/">
        <a>
          {/*<Banner*/}
          {/*    year={2021}*/}
          {/*    href="/"*/}
          {/*    style={mobileNav.isOpen ? { width: "125px" } : { width: "200px" }}*/}
          {/*/>*/}

          <img
            src="https://assets.hackclub.com/banners/2021.svg"
            alt="Hack Club"
            style={{
              position: "absolute",
              top: "10px",
              left: "0px",
              border: "0px",
              zIndex: `${mobileNav.isOpen ? "0" : "1"}`,
            }}
            width={"200px"}
          ></img>
        </a>
      </Link>
      <VStack
        minW="100%"
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        bg={bg}
        marginY={2}
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <CloseButton
          aria-label="Close menu"
          justifySelf="self-start"
          onClick={mobileNav.onClose}
        />
        <Link href="/">
          <a>
            <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
              Home
            </Button>
          </a>
        </Link>

        <Link href="/dashboard">
          <a>
            <Button w="full" variant="ghost" leftIcon={<FaTable />}>
              Dashboard
            </Button>
          </a>
        </Link>

        <Link href="https://discord.gg/gREKADreg9">
          <a>
            <Button w="full" variant="ghost" leftIcon={<FaUserFriends />}>
              Discord community
            </Button>
          </a>
        </Link>

        <Link href="dashboard/giveaways/">
          <a>
            <Button w="full" variant="ghost" leftIcon={<AiFillGift />}>
              Giveaways
            </Button>
          </a>
        </Link>

        <Link href="dashboard/signout/">
          <a>
            <Button w="full" variant="ghost" leftIcon={<FaSignOutAlt />}>
              Sign Out
            </Button>
          </a>
        </Link>
      </VStack>
    </Box>
  );

  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
        borderBottomWidth={2}
        borderBottomColor={useColorModeValue("gray.200", "gray.900")}
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1400px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link href="/" passHref={true}>
                <HStack>
                  <Logo />
                </HStack>
              </Link>
            </Flex>
            <Flex></Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <IconButton
                  size="md"
                  fontSize="25"
                  aria-label={`Switch to ${text} mode`}
                  variant="ghost"
                  color="current"
                  ml={{ base: "0", md: "3" }}
                  onClick={toggleMode}
                  icon={<SwitchIcon />}
                />
                <Avatar
                  name={props.name}
                  src={props.avatar_url.toLowerCase()}
                  alt={props.avatar_url}
                />
                <Link href="signout/">
                  <a>
                    <Button
                      rounded={"full"}
                      px={6}
                      colorScheme="white"
                      fontWeight="extrabold"
                      color="white"
                      bgGradient="linear(to-r, #ec3750,#ec3750)"
                      _hover={{
                        bgGradient: "linear(to-r, #ec3750,#ec3750)",
                        bgClip: "text",
                        size: "lg",
                      }}
                    >
                      SIGNOUT
                    </Button>
                  </a>
                </Link>
              </HStack>
              <HStack
                spacing="5"
                display={{ base: "flex", md: "none" }}
                justifyContent={"center"}
              >
                <IconButton
                  size="md"
                  fontSize="lg"
                  aria-label={`Switch to ${text} mode`}
                  variant="ghost"
                  color="current"
                  ml={{ base: "0", md: "3" }}
                  onClick={toggleMode}
                  icon={<SwitchIcon />}
                />

                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue("gray.800", "inherit")}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
              </HStack>
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}
