import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login.js";

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
import Head from "next/head";

export default function LoginScreen() {
  return (
    <div>
      <Head>
        <title>Login - Hack Club SKCET</title>
        <meta
          property="og:title"
          title="Hack Club SKCET"
          content="Hack Club SKCET is the student coding community of Sri Krishna College of Engieering and Technology, Coimbatore."
          key="title"
        />
      </Head>
      <ChakraProvider>
        <Navbar />
        <Login />
        <Footer p={20} />
      </ChakraProvider>
    </div>
  );
}
