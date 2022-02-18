import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/provider";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hackathon/Hero";
import Icon from "@hackclub/icons";
import { faqs } from "../components/Hackathon/faqs";

export default function Hackathon(props) {
  return (
    <>
      <Head>
        <title>Hack @ SKCET</title>
        <meta
          property="og:title"
          title="Hack Club SKCET"
          content="Hack Club SKCET is the student coding community of Sri Krishna College of Engieering and Technology, Coimbatore."
          key="title"
        />
      </Head>
      <ChakraProvider>
        <Navbar loggedIn={props.loggedIn} />
        <Hero />
        <Box marginTop={10} marginBottom={10} p={4}>
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"} className="title-text">
              About Hack @ SKCET
            </Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
              A 2 day in-person hackathon exclusively for SKCETians.
            </Text>
          </Stack>
        </Box>

        <div className="hack-flex-container">
          <div className="child">
            <h1>RULES</h1>
            <li>Max 5 members in a team.</li>
            <li>All coding should be done only during the event.</li>
            <li>Students from all departments can participate.</li>
            <li>
              Top 15 teams in the idea submission round are selected to
              participate in the finals.
            </li>
          </div>
          <div className="child">
            <h1>BENEFITS</h1>
            <li>Swags and merit certificates for all finalists.</li>
            <li>Exciting prizes for winners.</li>
            <li>3 beginner friendly workshops.</li>
            <li>
              Mentorship and support throughout the event from industry
              professionals.
            </li>
          </div>
        </div>
        <Box marginTop={10} marginBottom={10} p={4}>
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"} className="title-text">
              Important Dates
            </Heading>
            <div className="hack-flex-container jcsa">
              <HStack align={"top"} className="about-box">
                <Box color={"green.400"} px={2}>
                  <Icon
                    className="icon"
                    color="#ec3750"
                    glyph="idea"
                    size={32}
                  />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>Idea Submission</Text>
                  <Text
                    color={"gray.600"}
                    fontSize={{ base: "9px", md: "40px", lg: "16px" }}
                  >
                    ends on 21.02.2022 (Monday)
                  </Text>
                </VStack>
              </HStack>
              <HStack align={"top"} className="about-box">
                <Box color={"green.400"} px={2}>
                  <Icon
                    className="icon"
                    color="#ec3750"
                    glyph="flag"
                    size={32}
                  />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>Finals</Text>
                  <Text
                    color={"gray.600"}
                    fontSize={{ base: "9px", md: "40px", lg: "16px" }}
                  >
                    25.02.2022 and 26.02.2022
                  </Text>
                </VStack>
              </HStack>
            </div>
          </Stack>
        </Box>

        <Box marginTop={10} marginBottom={10} p={4}>
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"} className="title-text">
              FAQs
            </Heading>
            <div className="faqs">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <details>
                    <summary>{faq.question}</summary>
                    <p>{faq.ans}</p>
                  </details>
                </div>
              ))}
            </div>
          </Stack>
        </Box>
        <Footer p={20} />
      </ChakraProvider>
    </>
  );
}
