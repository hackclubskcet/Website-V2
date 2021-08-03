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
import {useLayoutEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";
import Router from "next/router";

export default function Home(props) {
  const [dataFetched, setDataFetched] = useState(false)
  const [members, setMembers] = useState(null)

  useLayoutEffect (() => {
    async function fetchData() {
      const {data, error} = await supabase
          .from('profiles')
          .select('name, avatar_url, priority')
          .order('priority', { ascending: false })

      if (error) {
        throw error
      } else {
          setMembers(data)
        }
    }

    if (!dataFetched) {
      setDataFetched(true)
      fetchData()
    }

  }, [dataFetched])

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      Router.push('/dashboard')
    }
  })


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
      {dataFetched === true && members !== null ? <MembersMarquee members={members} /> : ''}
      <Divider />
      <Sponsors />
      <Footer p={20} />
    </ChakraProvider>
    </div>
  );
}
