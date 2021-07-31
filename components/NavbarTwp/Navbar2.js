import React from "react";
import {
  chakra,
  HStack,
  Link,
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
import { FaMoon, FaSignOutAlt, FaSun, FaUserFriends } from "react-icons/fa";
import { Logo } from "@choc-ui/logo";

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
      ></Link>
    );
  };

  const MobileNavContent = (
    <div>
      <Banner
        year={2021}
        style={mobileNav.isOpen ? { width: "125px" } : { width: "200px" }}
      />
      <VStack
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
          aria-label="Close menu"
          justifySelf="self-start"
          onClick={mobileNav.onClose}
        />
        <Link href="/dashboard">
          <a>
            <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
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
        <Link href="/members">
          <a>
            <Button w="full" variant="ghost" leftIcon={<FaUserFriends />}>
              Members
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

        <Button w="full" variant="ghost" leftIcon={<FaSignOutAlt />}>
          Sign Out
        </Button>
      </VStack>
    </div>
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
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link href="/">
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
                  fontSize="lg"
                  aria-label={`Switch to ${text} mode`}
                  variant="ghost"
                  color="current"
                  ml={{ base: "0", md: "3" }}
                  onClick={toggleMode}
                  icon={<SwitchIcon />}
                />
                <Avatar
                  name={props.name}
                  src={props.avatar_url}
                  alt={props.avatar_url}
                />
                <button onClick={props.handleSignOut}>Sign out</button>{" "}
                {/*TODO: GURU BRUH TAKE CARE */}
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
    </React.Fragment>
  );
}
