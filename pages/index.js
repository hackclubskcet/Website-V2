import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "@hackclub/banner";
import { ChakraProvider, VStack, Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Sponsors from "../components/Sponsors/Sponsors";
import Events from "../components/Events/Events";

import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
  Alert,
  Spacer,
} from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import MembersMarquee from "../components/MembersMarquee/MembersMarquee";

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Spacer />
      <About p={20} />
      <Divider />
      <Events />
      <Divider />
      <MembersMarquee />
      <Divider />
      <Sponsors />
      <Footer p={20} />
    </ChakraProvider>
  );
}
