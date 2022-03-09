import React, { useEffect,useState } from "react";
import {
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  Stack,
  Spacer,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";



export default function Hero(props) {
  const endTime = new Date("Feb 26, 2022 10:00:00").getTime()
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex position={"inherit"}>
      <Box
        w="full"
        h="container.sm"
        backgroundImage="url(/images/hackhero.jpg)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", , "5xl"]}
              fontWeight="black"
              color="white"
            >
              Hack @ SKCET
            </Heading>
            <Text fontSize={["3xl"]} color="white" fontWeight="black">
              Held on February 26,27 and 28 (2022)
            </Text>
            <Text
              className="timer"
              fontSize={["2xl"]}
              color="white"
              fontWeight="black"
            ></Text>
            <Spacer />

            </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
