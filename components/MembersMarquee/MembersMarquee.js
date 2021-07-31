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
import React from "react";

export default function MembersMarquee(props) {
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
          {props.members.map((member, index) => (
              <WrapItem key={index}>
                <Avatar
                    size="xl"
                    name={member.name}
                    src={member.avatar_url}
                />
              </WrapItem>
          ))}
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
