import { ChakraProvider, Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Sponsors from "../components/Sponsors/Sponsors";
import Events from "../components/Events/Events";

import { Spacer,} from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import MembersMarquee from "../components/MembersMarquee/MembersMarquee";

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <Spacer />
      <a name="about" id="about">
        <About p={20} />
      </a>
      <Divider />
      <a name="events" id="events">
        <Events />
      </a>
      <Divider />
      <MembersMarquee />
      <Divider />
      <Sponsors />
      <Footer p={20} />
    </ChakraProvider>
  );
}
