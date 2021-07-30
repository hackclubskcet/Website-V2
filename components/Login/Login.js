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
  InputAddon,
  InputRightAddon,
} from "@chakra-ui/react";

import Router from "next/router";
import { useLayoutEffect, useRef, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const rollNoRef = useRef("");
  const passwordRef = useRef("");

  const [loggedIn, setLoggedIn] = useState(null);

  const [logInFailure, setLogInFailure] = useState(false);

  function logInFailed() {
    setLogInFailure(true);
    setLoading(false);
  }

  useLayoutEffect(() => {
    setLoggedIn(supabase.auth.user() !== null);

    if (loggedIn === true && loading === false) {
      Router.push("/dashboard");
    }
  }, [loading, loggedIn]);

  async function handleLogin() {
    if (!loggedIn) {
      try {
        setLogInFailure(false);
        setLoading(true);

        const { error } = await supabase.auth.signIn({
          email: rollNoRef.current.value + "@skcet.ac.in",
          password: passwordRef.current.value,
        });

        if (error) {
          logInFailed();
          throw error;
        } else {
          setLoggedIn(true);

          await Router.push("/dashboard");
        }
      } catch (error) {
        logInFailed();
        alert(error.error_description || error.message);
      }
    }
  }

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading paddingBottom="5" color="#ec3750" fontSize={"2xl"}>
            Sign in to your account
          </Heading>
          <FormControl id="rollNo">
            <FormLabel>Register number</FormLabel>
            <InputGroup>
              <Input type="text" ref={rollNoRef} required={true} />
              <InputRightAddon children="@skcet.ac.in" />
            </InputGroup>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef} required={true} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link paddingBottom={10} color={"#ec3750"}>
                Forgot password?
              </Link>
            </Stack>
            <Button
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
              disabled={loading}
              onClick={handleLogin}
            >
              {loading ? "Signing in...." : "SIGN IN"}
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://raw.githubusercontent.com/hackyguru/HostedImages/master/dinoskcet.png"
          }
        />
      </Flex>
    </Stack>
  );
}
