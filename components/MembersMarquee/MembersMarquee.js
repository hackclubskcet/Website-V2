import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  Image,
  VStack,
  Wrap,
  Avatar,
  WrapItem,
  useColorModeValue,
  Button,
  useColorMode,
  Center,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import Icon from "@hackclub/icons";
import Link from "next/link";

import Marquee from "react-fast-marquee";

export default function MembersMarquee() {
  return (
    <Box marginTop={10} marginBottom={10} p={4}>
      <Stack
        marginBottom={10}
        spacing={4}
        as={Container}
        maxW={"5xl"}
        textAlign={"center"}
      >
        <Heading fontSize={"3xl"}>Club Members</Heading>
      </Stack>

      <Marquee gradientColor={useColorModeValue([255, 255, 255], [26, 32, 44])}>
        <Wrap height="100">
          <WrapItem>
            <Avatar
              size="xl"
              name="Dan Abrahmov"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS001.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Kola Tioluwani"
              src="http://results.skcet.ac.in:614/assets/StudentImage/18EUCS003.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Kent Dodds"
              src="http://results.skcet.ac.in:614/assets/StudentImage/18EUCS071.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Ryan Florence"
              src="http://results.skcet.ac.in:614/assets/StudentImage/18EUCS002.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Prosper Otemuyiwa"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS117.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS071.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS072.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS073.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS074.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS075.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS076.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS077.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS078.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS071.jpg"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="http://results.skcet.ac.in:614/assets/StudentImage/19EUCS071.jpg"
            />
          </WrapItem>
        </Wrap>
      </Marquee>

      <Center paddingTop={10}>
        <Link href="members/">
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
              VIEW ALL MEMBERS
            </Button>
          </a>
        </Link>
      </Center>
    </Box>
  );
}
