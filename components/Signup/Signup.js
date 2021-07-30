import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputGroup,
  InputLeftAddon,
  InputAddon,
  InputRightAddon,
} from "@chakra-ui/react";

import Router from "next/router";
import {useLayoutEffect, useRef, useState} from "react";
import {supabase} from "../../../hackclub-site/utils/supabaseClient";


export default function Signup() {
  const rollNoRef = useRef()
  const nameRef = useRef()
  const departmentRef = useRef()
  const yearRef = useRef()
  const interestsRef = useRef()
  const passwordRef = useRef()

  const [loading, setLoading] = useState(false)

  const [loggedIn, setLoggedIn] = useState(null)

  const [signUpFailure, setSignUpFailure] = useState(false)

  function signUpFailed() {
    setSignUpFailure(true)
    setLoading(false)
  }

  useLayoutEffect(() => {
    setLoggedIn(supabase.auth.user() !== null)
    
    if (loggedIn === true && loading === false) {
      Router.push('/dashboard')
    }
  }, [loading, loggedIn])

  async function handleSignup(e) {
    e.preventDefault()

    if (!loggedIn) {
      try {
        setSignUpFailure(false)
        setLoading(true)

        const {user, session, error} = await supabase.auth.signUp({
          email: rollNoRef.current.value + '@skcet.ac.in',
          password: passwordRef.current.value
        })

        if (error) {
          signUpFailed()
          throw error
        } else {
          await registerUser(user)

          await updateProfile(user)

          setLoggedIn(true)

          await Router.push('/dashboard')
        }
      } catch (error) {
        signUpFailed()
        alert(error.message)
      }
    }
  }

  async function registerUser(user) {
    if (!signUpFailure) {
      try {
        const updates = {
          id: user.id,
          email: rollNoRef.current.value + '@skcet.ac.in',
          passcode: passwordRef.current.value,
        }

        let {error} = await supabase.from('users').upsert(updates, {
          returning: 'minimal',
        })

        if (error) {
          signUpFailed()
          throw error
        }
      } catch (error) {
        signUpFailed()
        alert(error.message)
      }
    }
  }

  async function updateProfile(user) {
    if (!signUpFailure) {
      try {
        const updates = {
          id: user.id,
          name: nameRef.current.value,
          department: departmentRef.current.value,
          year: yearRef.current.value,
          interests: interestsRef.current.value,
          avatar_url: 'http://results.skcet.ac.in:615/assets/StudentImage/' + rollNoRef.current.value + '.jpg',
          updated_at: new Date(),
        }

        let {error} = await supabase.from('profiles').upsert(updates, {
          returning: 'minimal',
        })

        if (error) {
          signUpFailed()
          throw error
        }
      } catch (error) {
        signUpFailed()
        alert(error.message)
      }
    }
  }


  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading paddingBottom="5" color="#ec3750" fontSize={"2xl"}>
            Register for Hack Club SKCET
          </Heading>

          <FormControl id="name">
            <FormLabel>Full name</FormLabel>
            <InputGroup>
              <Input placeholder="Your first and last name" type="text" ref={nameRef} required={true}  />
            </InputGroup>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Register number</FormLabel>
            <InputGroup>
              <Input placeholder="Example: 19EUCS001" type="text" ref={rollNoRef} required={true}  />
              <InputRightAddon children="@skcet.ac.in" />
            </InputGroup>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Shhh! Keep it secret" type="password" ref={passwordRef} required={true} />
          </FormControl>
          <FormControl id="department">
            <FormLabel>Department</FormLabel>
            <InputGroup>
              <Input placeholder="Your department" type="text" ref={departmentRef} required={true} />
            </InputGroup>
          </FormControl>
          <FormControl id="year">
            <FormLabel>Year</FormLabel>
            <InputGroup>
              <Input type="number" placeholder="Year" min={2017} max={2021} ref={yearRef} required={true} />
            </InputGroup>
          </FormControl>
          <FormControl id="interests">
            <FormLabel>Interests</FormLabel>
            <InputGroup>
              <Input
                placeholder="Example: data science, web development, cyber security"
                type="text"
                ref={interestsRef}
              />
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Button
                type={"submit"}
                marginTop={15}
                px={6}
                colorScheme="white"
                fontWeight="extrabold"
                color="white"
                bgGradient="linear(to-r, #ff8c37,#ec3750)"
                _hover={{
                  bgGradient: "linear(to-r, #ff8c37,#ec3750)",
                  bgClip: "text",
                  size: "lg",
                }}
                onClick={handleSignup}
            >
              {loading ? 'Registering' : 'REGISTER'}
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://raw.githubusercontent.com/hackyguru/HostedImages/master/login-picture.png"
          }
        />
      </Flex>
    </Stack>
  );
}
