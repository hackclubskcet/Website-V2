import { Box, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import Banner from "@hackclub/banner";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { FaDiscord, FaClipboardCheck, FaUserFriends } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";

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
          {/* <Banner year={2021} href="/" style={{ width: "170px" }} /> */}
          <img
            src="https://assets.hackclub.com/banners/2022.svg"
            alt="Hack Club"
            style={{
              position: "absolute",
              top: "10px",
              left: "0px",
              border: "0px",
            }}
            width={"200px"}
          ></img>
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

export default SidebarContent;
