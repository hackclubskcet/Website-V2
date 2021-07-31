import Head from "next/head";
import Image from "next/image";
import Banner from "@hackclub/banner";
import { ChakraProvider, VStack, Divider } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Login from "../../components/Login/Login.js";
import About from "../../components/About/About";
import Sponsors from "../../components/Sponsors/Sponsors";
import Events from "../../components/Events/Events";

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
import Footer from "../../components/Footer/Footer";
import MembersMarquee from "../../components/MembersMarquee/MembersMarquee";
import Signup from "../../components/Signup/Signup";
import DashboardMenu from "../../components/DashboardMenu/DashboardMenu";
import NavbarTwo from "../../components/NavbarTwp/Navbar2";

import Router from "next/router";
import { useLayoutEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(props.loggedIn)
  const [user, setUser] = useState(null)

  useLayoutEffect (() => {
    if (loggedIn === false) {
      Router.push('/login')
    }

    async function fetchData() {
      const {data, error} = await supabase
          .from('profiles')
          .select('name, department, year, avatar_url')
          .eq('id', supabase.auth.user().id)
          .limit(1)

      if (error) {
        throw error
      } else {
        setUser(data[0])
      }
    }

    if (loggedIn === true && user === null) {
      fetchData()
    }

  }, [loggedIn, user])

  function getUserData(key) {
    if (user !== undefined && user !== null) {
      return user[key]
    }

    return ''
  }

  return (
    <>
      <Head>
        <title>Dashboard - Hack Club SKCET</title>
        <meta
          property="og:title"
          title="Hack Club SKCET"
          content="Hack Club SKCET is the student coding community of Sri Krishna College of Engieering and Technology, Coimbatore."
          key="title"
        />
      </Head>
      <ChakraProvider>
        <NavbarTwo name={getUserData('name')} avatar_url={getUserData('avatar_url')} loggedIn={loggedIn}/>
        <DashboardMenu name={getUserData('name')} />
      </ChakraProvider>
    </>
  );
}
