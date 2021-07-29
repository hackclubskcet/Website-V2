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
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import Icon from "@hackclub/icons";

import Marquee from "react-fast-marquee";

export default function Sponsors() {
  return (
    <Box marginTop={10} marginBottom={10} p={4}>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Our Sponsors</Heading>
      </Stack>

      <Container paddingTop={10} maxW={"xl"} mt={10}>
        <SimpleGrid
          textAlign={"center"}
          columns={[2, null, 2]}
          spacing={70}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack align={"center"}>
            {" "}
            <Image
              src="https://www.stickermule.com/about/_next/static/public/logoColored.67e93281fc7b7837ca6c47a44ff7ea56.svg"
              alt="Stickermule"
            />
          </HStack>
          <HStack align={"center"}>
            {" "}
            <Image
              src="https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2019/09/replit-logo.png?resize=730%2C389&ssl=1"
              alt="Repl.it"
            />
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
