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

function neat_time(distance)
{
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return days + "d " + hours + "h " + minutes + "m " + seconds + "s "
  
}

export default function Hero(props) {
  const endTime = new Date("Feb 26, 2022 10:00:00").getTime()
  const [countDownDate, setDate] = useState(neat_time(endTime - Date.now()));
  useEffect(() => {
 
   
    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = endTime - now;

    
      setDate(neat_time(distance));

        
      if (distance < 0) {
        clearInterval(x);
        setDate("EXPIRED");
      }
    }, 1000);
  }, [countDownDate]);
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
            >{countDownDate}</Text>
            <Spacer />

            </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
