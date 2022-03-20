import React, { useState } from "react";
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
  useMediaQuery,
} from "@chakra-ui/react";

import { Carousel } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hackathon/Hero";
import { faqs } from "../components/Hackathon/faqs";
import { galleries } from "../components/Hackathon/gallery";
import { winners } from "../components/Hackathon/winners";
import Sponsors from "../components/Hackathon/Sponsors";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default function HackSkcet(props) {
  const [checker] = useMediaQuery("(max-width: 768px)");

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
        {/*<Box marginTop={10} marginBottom={10} p={4}>*/}
        {/*  <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>*/}
        {/*    <Heading fontSize={"3xl"} className="title-text">*/}
        {/*      About Hack @ SKCET*/}
        {/*    </Heading>*/}
        {/*    <Text color={"gray.600"} fontSize={"xl"}>*/}
        {/*      A 2 day in-person hackathon organized by Hack Club SKCET.*/}
        {/*    </Text>*/}
        {/*  </Stack>*/}
        {/*</Box>*/}

        <Box marginTop={10} p={4}>
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"} className="title-text">
              Gallery
            </Heading>
          </Stack>
        </Box>

        <div
          className={"row justify-center mt-1 " + (checker ? "px-3" : "")}
          style={{ maxWidth: 1520, maxHeight: checker ? 268 : 700 }}
        >
          <Carousel
            fade
            className="carousel"
            style={{ maxWidth: 1100, paddingRight: 0 }}
          >
            {galleries.map((image, index) => (
              <Carousel.Item
                className="citem"
                key={index}
                style={{ maxHeight: checker ? 268 : 700 }}
              >
                <img
                  width={1300}
                  height={600}
                  className="carousel-pics d-block w-100"
                  src={image}
                  alt="slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <Box marginTop={16} marginBotton={10} p={4}>
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"} className="title-text">
              Winners
            </Heading>
          </Stack>
        </Box>

        <div
          className={"row justify-center mb-6 mt-7"}
          style={{ maxWidth: 1525 }}
        >
          <Carousel className="carousel" style={{ paddingRight: 0 }}>
            {winners.map((winner, index) => (
              <Carousel.Item className="citem" key={index}>
                <div className="container">
                  <div className="row justify-center">
                    <div className="col-md-5 col-sm-5 images winners_img">
                      <img src={winner.img} alt={winner.team_name} />
                    </div>
                    <div
                      className={
                        "data col-md-3 col-sm-5 text-center " +
                        (!checker ? "mt-5" : "ml-6")
                      }
                    >
                      <Heading fontSize={"2xl"} className="title-text">
                        {winner.team_name}
                      </Heading>
                      <div className="splitter" />
                      <Heading fontSize={"1xl"} className="title-text">
                        Team Members :
                      </Heading>
                      <Text color={"gray.400"} fontSize={"m"}>
                        {winner.Team_Members_1} <br />
                        {winner.Team_Members_2} <br />
                        {winner.Team_Members_3} <br />
                        {winner.Team_Members_4} <br />
                        {winner.Team_Members_5} <br />
                      </Text>
                      <br />
                      {/*<Heading fontSize={"1xl"} className="title-text">Prize Category : </Heading>*/}
                      {/*<Text color={"gray.400"} fontSize={"m"}>{winner.prize_category}<br/></Text>*/}
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/*<div className="hack-flex-container">*/}
        {/*  /!* <div className="child">*/}
        {/*    <h1>RULES</h1>*/}
        {/*    <li>Max 5 members in a team.</li>*/}
        {/*    <li>All coding should be done only during the event.</li>*/}
        {/*    <li>Students from all departments can participate.</li>*/}
        {/*    <li>*/}
        {/*      Top 15 teams in the idea submission round are selected to*/}
        {/*      participate in the finals.*/}
        {/*    </li>*/}
        {/*  </div> *!/*/}
        {/*  <div className="child">*/}
        {/*    <h1>BENEFITS</h1>*/}
        {/*    <li>Swags and merit certificates for all finalists.</li>*/}
        {/*    <li>Exciting prizes for winners.</li>*/}
        {/*    <li>3 beginner friendly workshops.</li>*/}
        {/*    <li>*/}
        {/*      Mentorship and support throughout the event from industry*/}
        {/*      professionals.*/}
        {/*    </li>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <Sponsors />
        <Box marginTop={14} p={4}>
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
