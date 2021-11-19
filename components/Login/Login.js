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
    InputRightAddon, FormErrorMessage,
} from "@chakra-ui/react";

import Router from "next/router";
import { useLayoutEffect, useRef, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Login(props) {
    const [loading, setLoading] = useState(false);
    const rollNoRef = useRef("");
    const passwordRef = useRef("");

    const [loggedIn, setLoggedIn] = useState(props.loggedIn);

    const [logInFailure, setLogInFailure] = useState(false);

    let [rollNoError, setRollNoErrorState] = useState(false)
    let [passwordError, setPasswordErrorState] = useState(false)

    const [dataFetched, setDataFetched] = useState(false)
    const [emails, setEmails] = useState([])

    let function_map = {
        'rollNo': setRollNoErrorState,
        'password': setPasswordErrorState,
    }


    useLayoutEffect(() => {
        setLoggedIn(supabase.auth.user() !== null);

        if (loggedIn === true && loading === false) {
            Router.push("/dashboard");
        }

        async function fetchData() {
            const {data, error} = await supabase
                .from('profiles')
                .select('email')

            if (error) {
                throw error
            } else {
                setEmails(data)
            }
        }

        if (!dataFetched) {
            setDataFetched(true)
            fetchData()
        }
    }, [dataFetched, loading, loggedIn]);

    let hasError = false;

    function setError(key, value) {
        hasError = true;
        function_map[key](value);
    }

    function resetErrors() {
        hasError = false;
        setRollNoErrorState(false);
        setPasswordErrorState(false);
    }

    function hasAnyError() {
        return hasError;
    }

    function logInFailed() {
        setLogInFailure(true);
        setLoading(false);
    }

    function validate(check_password=true) {
        //Resetting previous errors
        resetErrors();

        //Roll Number validation
        var rollNo = rollNoRef.current;

        if (rollNo.value === '') {
            setError('rollNo', "Please enter your roll number to sign up")

          //TODO ADD    NEW YEARS         NEW DEPARTMENT CODES                               ADDITIONAL ROLL NO PATTERNS           HERE WHEN NEEDED
        } else if (!/^(18|19|20|21)(euai|eucb|eucs|eucv|euec|euee|euit|eumc|eumt|epci)([0][0-9][0-9]|[1][0-8][0-9]|[5][0-5][0-9])$/i.test(rollNo.value)&&
            (!/^21\w{1,8}[0][0-9][0-9]|[1][0-8][0-9]|[5][0-5][0-9]$/i.test(rollNo.value.toLowerCase()))) {
            setError('rollNo', "Please enter a valid roll number")
        } else {
            var isRegistered = false;

            emails.forEach((user) => {
                if (user.email !== null && (user.email.toLowerCase() === rollNo.value.toLowerCase() + "@skcet.ac.in")){
                    isRegistered = true;
                    return false;
                }
            } )


            if (!isRegistered) {
                setError('rollNo', "You did not register yet. Please register to login");
            }
        }

        if (check_password) {
            //Password validation
            var password = passwordRef.current

            if (password.value === '') {
                setError('password', "Please enter a password to sign up")
            } else if (password.value.length < 8) {
                setError('password', "Password must be at least 8 characters long")
            }
        }
        return
    }

    async function handleLogin(check_password=true) {
        if (!loggedIn) {
            try {
                setLogInFailure(false);
                setLoading(true);

                validate(check_password);

                var hasError = hasAnyError();

                if (hasError) {
                    setLoading(false);
                    return;
                } else {
                    const {error} = await supabase.auth.signIn({
                        email: rollNoRef.current.value + "@skcet.ac.in",
                    });

                    if (error) {
                        logInFailed();
                        throw error;
                    } else {
                        alert("An Email has been sent to your email address. Please check your email for logging in (Check spam folder too!)");
                        setLoading(false)
                    }
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
            <FormControl id="rollNo" isInvalid={rollNoError} isRequired>
                <FormLabel>Register number</FormLabel>
                <InputGroup>
                    <Input
                        placeholder="Example: 19EUCS001"
                        type="text"
                        ref={rollNoRef}
                        required={true}
                    />
                    <InputRightAddon children="@skcet.ac.in" />
                </InputGroup>
                <FormErrorMessage>{rollNoError}</FormErrorMessage>
            </FormControl>
          <FormControl id="password" isInvalid={passwordError} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
                placeholder="Shhh! Keep it secret"
                type="password"
                ref={passwordRef}
                required={true}
            />
            <FormErrorMessage>{passwordError}</FormErrorMessage>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link paddingBottom={10} color={"#ec3750"} onClick={()=> handleLogin(false)}>
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
