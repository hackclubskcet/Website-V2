import React,{useState} from 'react';
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

import { Carousel } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hackathon/Hero";
import Icon from "@hackclub/icons";
import { faqs } from "../components/Hackathon/faqs";
import { galleries } from "../components/Hackathon/gallery";
import { winners } from "../components/Hackathon/winners";
import Sponsors from "../components/Hackathon/Sponsors";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Hackathon(props) {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
              A 2 day in-person hackathon exclusively organized by SKCETians.
            </Text>
          </Stack>
        </Box>

        <Box marginTop={10} marginBottom={10} p={4}>
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"} className="title-text">
              Gallery
            </Heading>
          </Stack>
        </Box>

        <Carousel fade className="carousel">
          {galleries.map((gallery) => (
              <Carousel.Item className="citem">
                <img
                  className="carousel-pics d-block w-100"
                  src={gallery.img}
                  alt="slide"
                />
              </Carousel.Item>
          ))}
        </Carousel>

        <Box marginTop={10} marginBottom={10} p={4}>
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"} className="title-text">
              Winners
            </Heading>
          </Stack>
        </Box>

        <Carousel  className="carousel">
          {winners.map((winner)=>(
                <Carousel.Item className="citem">
                  <div className="container">
                      <div className="row">
                        <div className="col-12 col-sm-5 images winners_img">
                          <img src={winner.img} alt=""></img>
                        </div>
                        <div className="data col-12 col-sm-5">
                        <Heading fontSize={"3xl"} className="title-text">
                            {winner.team_name}
                        </Heading>
                        <Text color={"gray.600"} fontSize={"xl"}>
                          Team Members : <br/>
                          {winner.Team_Members_1} <br/>
                          {winner.Team_Members_2} <br/>
                          {winner.Team_Members_3} <br/>
                          {winner.Team_Members_4} <br/>
                          {winner.Team_Members_5} <br/>
                          Prize Category : {winner.prize_category}<br/>
                          Department : {winner.dept}<br/>
                          {/* Year : {winner.year} */}
                        </Text>
                        </div>
                      </div>
                  </div>
                </Carousel.Item>
          ))}
        </Carousel>

        <div className="hack-flex-container">
          {/* <div className="child">
            <h1>RULES</h1>
            <li>Max 5 members in a team.</li>
            <li>All coding should be done only during the event.</li>
            <li>Students from all departments can participate.</li>
            <li>
              Top 15 teams in the idea submission round are selected to
              participate in the finals.
            </li>
          </div> */}
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

        <Sponsors />
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
