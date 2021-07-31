import { ChakraProvider, Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Sponsors from "../components/Sponsors/Sponsors";
import Events from "../components/Events/Events";
import Head from "next/head";
import { Spacer } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import MembersMarquee from "../components/MembersMarquee/MembersMarquee";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Hack Club SKCET</title>
        <meta
          property="og:title"
          title="Hack Club SKCET"
          content="Hack Club SKCET is the student coding community of Sri Krishna College of Engieering and Technology, Coimbatore."
          key="title"
        />
      </Head>
    <ChakraProvider>
      <Navbar loggedIn={props.loggedIn} />
      <Hero loggedIn={props.loggedIn}/>
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
    </div>
  );
}
