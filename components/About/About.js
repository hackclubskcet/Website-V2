import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Icon from "@hackclub/icons";

export default function About() {
  return (
    <Box marginTop={10} marginBottom={10} p={4}>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>About Hack Club SKCET</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Hack Club SKCET is the student coding club of Sri Krishna College of
          Engineering and Technology. We are a community of coders, hackers and
          geeks who love technology. We maintain an active community on Discord
          where we discuss healthy topics - be it technical or fun.
        </Text>
      </Stack>

      <Container paddingTop={10} maxW={"6xl"} mt={10}>
        <SimpleGrid columns={[2, null, 4]} spacing={70}>
          <HStack align={"top"}>
            <Box color={"green.400"} px={2}>
              <Icon color="#ec3750" glyph="channels" size={32} />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Discord community</Text>
              <Text
                color={"gray.600"}
                fontSize={{ base: "9px", md: "40px", lg: "16px" }}
              >
                250+ members
              </Text>
            </VStack>
          </HStack>
          <HStack align={"top"}>
            <Box color={"green.400"} px={2}>
              <Icon color="#ec3750" glyph="event-code" size={32} />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Regular events</Text>
              <Text
                color={"gray.600"}
                fontSize={{ base: "9px", md: "40px", lg: "16px" }}
              >
                webinars, hacks & more
              </Text>
            </VStack>
          </HStack>
          <HStack align={"top"}>
            <Box color={"green.400"} px={2}>
              <Icon color="#ec3750" glyph="everything" size={32} />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Resources</Text>
              <Text
                color={"gray.600"}
                fontSize={{ base: "9px", md: "40px", lg: "16px" }}
              >
                learn & grow
              </Text>
            </VStack>
          </HStack>
          <HStack align={"top"}>
            <Box color={"green.400"} px={2}>
              <Icon color="#ec3750" glyph="sticker" size={32} />
            </Box>
            <VStack align={"start"}>
              <Text fontWeight={600}>Swags</Text>
              <Text
                color={"gray.600"}
                fontSize={{ base: "9px", md: "40px", lg: "16px" }}
              >
                earn stipend & goodies
              </Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
