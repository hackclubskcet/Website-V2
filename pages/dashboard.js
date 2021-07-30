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
import Signup from "../components/Signup/Signup";
import DashboardMenu from "../components/DashboardMenu/DashboardMenu";
import NavbarTwo from "../components/NavbarTwp/Navbar2";

import Router from "next/router";
import {useLayoutEffect, useState} from "react";
import {supabase} from "../../hackclub-site/utils/supabaseClient";

export default function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(null)
  const [user, setUser] = useState(null)

  useLayoutEffect (() => {
    setLoggedIn(supabase.auth.user() !== null)

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

  async function handleSignOut() {
    if (loggedIn) {
      try {
        const {error} = await supabase.auth.signOut()
        if (error) {
          throw error
        }
    else {
          setLoggedIn(false)

          await Router.push('/login')
        }
      } catch (error) {
        alert(error.message)
      }
    }
  }

  function getUserData(key) {
    if (user !== undefined && user !== null) {
      return user[key]
    }

    return ''
  }

  return (
    <ChakraProvider>
      <NavbarTwo name={getUserData('name')} avatar_url={getUserData('avatar_url')} handleSignOut={handleSignOut}/>
      <DashboardMenu name={getUserData('name')} />
    </ChakraProvider>
  );
}
