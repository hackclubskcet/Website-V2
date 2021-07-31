import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "@hackclub/banner";
import { ChakraProvider, VStack, Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Login from "../components/Login/Login.js";
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
import MembersSection from "../components/Members/Members";
import {useLayoutEffect, useState} from "react";
import {supabase} from "../utils/supabaseClient";
import {data} from "autoprefixer";

export default function MembersScreen(props) {
  const [loggedIn, setLoggedIn] = useState(props.loggedIn)
  const [dataFetched, setDataFetched] = useState(false)
  const [members, setMembers] = useState(null)
  const [coreTeam, setCoreTeam] = useState(null)

  useLayoutEffect (() => {
    async function fetchData(priority) {
      const {data, error} = await supabase
          .from('profiles')
          .select('name, department, year, avatar_url')
          .eq('priority', priority)
          .order('updated_at')

      if (error) {
        throw error
      } else {
        if (priority === 0){
          setMembers(data)
        } else if (priority === 1) {
          setCoreTeam(data)
        }
      }
    }

    if (!dataFetched) {
      setDataFetched(true)
      fetchData(0)
      fetchData(1)
    }

  }, [dataFetched, loggedIn])

  function renderCards() {
    if(dataFetched === true && coreTeam !== null && members !== null){
      return <MembersSection teamMembers={coreTeam} members={members}/>
    }

    return ''
  }

  return (
    <div>
      <Head>
        <title>Members - Hack Club SKCET</title>
        <meta
          property="og:title"
          title="Hack Club SKCET"
          content="Hack Club SKCET is the student coding community of Sri Krishna College of Engieering and Technology, Coimbatore."
          key="title"
        />
      </Head>
    <ChakraProvider>
      <Navbar loggedIn={loggedIn}/>
      {renderCards()}
      <Footer p={20} />
    </ChakraProvider>
    </div>
  );
}
