import { ChakraProvider} from "@chakra-ui/react";
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

export default function LoginScreen() {
  return (
    <ChakraProvider>
      <Navbar />
      <Login />
      <Footer p={20} />
    </ChakraProvider>
  );
}
