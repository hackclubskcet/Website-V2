import React from "react";
import {
  chakra,
  HStack,
  Link as ChakraLink,
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
  Container,
} from "@chakra-ui/react";
import Banner from "@hackclub/banner";
import Link from "next/link";

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
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSignInAlt, FaSun, FaUserFriends } from "react-icons/fa";
import { Logo } from "@choc-ui/logo";

export default function Navbar(props) {
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
      <ChakraLink
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
      ></ChakraLink>
    );
  };

  const MobileNavContent = (
    <Box minW={"100%"}>
      <Link href="/">
        <a>
          <Banner
            year={2021}
            href="/"
            style={mobileNav.isOpen ? { width: "125px" } : { width: "200px" }}
          />
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
        m={2}
        bg={bg}
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <CloseButton
          p={10}
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

        <Link href="members/">
          <a>
            <Button w="full" variant="ghost" leftIcon={<FaUserFriends />}>
              Members
            </Button>
          </a>
        </Link>
        <Link href="login/">
          <a>
            <Button w="full" variant="ghost" leftIcon={<FaSignInAlt />}>
              Login
            </Button>
          </a>
        </Link>
      </VStack>
    </Box>
  );
  return (
    <Flex pos="static">
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        borderBottomWidth={mobileNav.isOpen ? 200 : 0}
        borderBottomColor={useColorModeValue("gray.200", "gray.900")}
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <HStack>
                <Logo />
              </HStack>
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Link href="/#about">
                  <a>
                    <Button
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Abous us
                    </Button>
                  </a>
                </Link>
                <Link href="members/">
                  <a>
                    <Button
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Members
                    </Button>
                  </a>
                </Link>
                <Link href="/#events">
                  <a>
                    <Button
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Events
                    </Button>
                  </a>
                </Link>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
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
                <Link href="login/">
                  <a>
                    <Button
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Login
                    </Button>
                  </a>
                </Link>
                <Register />
              </HStack>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Flex>
  );
}

// Join Waitlist Modal

function Register() {
  return (
    <>
      <Link href="signup/">
        <a>
          <Button
            rounded={"full"}
            px={6}
            colorScheme="white"
            fontWeight="extrabold"
            color="white"
            bgGradient="linear(to-r, #ff8c37,#ec3750)"
            _hover={{
              bgGradient: "linear(to-r, #ff8c37,#ec3750)",
              bgClip: "text",
              size: "lg",
            }}
          >
            REGISTER
          </Button>
        </a>
      </Link>
    </>
  );
}
