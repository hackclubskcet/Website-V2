import React, { useEffect } from "react";
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
  useEffect(() => {
    let countDownDate = new Date("Feb 26, 2022 10:00:00").getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.querySelector(".timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  }, []);
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
              Hackthon begins in
            </Text>
            <Text
              className="timer"
              fontSize={["2xl"]}
              color="white"
              fontWeight="black"
            ></Text>
            <Spacer />

            <Link href="https://forms.gle/LTzXv15fzEetoqAa8">
              <a>
                <Button
                  rounded={"full"}
                  marginTop={5}
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
                  IDEA SUBMISSION
                </Button>
              </a>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
