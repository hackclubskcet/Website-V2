import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  Stack,
  Spacer,
} from "@chakra-ui/react";

import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

const Hero = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex position={"inherit"}>
      <Box
        w="full"
        h="container.sm"
        backgroundImage="url(https://raw.githubusercontent.com/hackclubskcet/Club-Website/master/images/hc-carousel.png)"
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
            <ReactTypingEffect
              text={["We are developers", "We are engineers", "We are hackers"]}
              cursorRenderer={(cursor) => <Heading>{cursor}</Heading>}
              displayTextRenderer={(text, i) => {
                return (
                  <Heading
                    fontSize={["2xl", , "5xl"]}
                    fontWeight="black"
                    color="white"
                  >
                    {text}
                  </Heading>
                );
              }}
            />
            <Spacer />
            <Link href="signup/">
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
                  REGISTER
                </Button>
              </a>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Hero;
