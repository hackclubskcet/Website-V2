import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Stack,
  Heading,
  Container,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

const Events = () => {
  return (
    <div>
      <Container paddingBottom={20} maxW={"6xl"} mt={10} textAlign="center">
        <Heading paddingBottom={10} fontSize={"3xl"}>
          Upcoming Events
        </Heading>
        <Heading color={"#ec3750"} paddingBottom={10} fontSize={"l"}>
          Coming soon. Stay tuned...
        </Heading>
        {/* <SimpleGrid columns={[1, null, 2]} spacing={70} textAlign="center">
          <Image
            src="https://raw.githubusercontent.com/hackclubskcet/Club-Website/master/images/HackFromHomewater.png"
            alt="Segun Adebayo"
          />
          <Image
            src="https://raw.githubusercontent.com/hackclubskcet/Club-Website/master/images/HackFromHomewater.png"
            alt="Segun Adebayo"
          />
          <Image
            src="https://raw.githubusercontent.com/hackclubskcet/Club-Website/master/images/HackFromHomewater.png"
            alt="Segun Adebayo"
          />
        </SimpleGrid> */}
      </Container>
    </div>
  );
};

export default Events;
