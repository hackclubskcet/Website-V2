import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
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
  Select,
} from "@chakra-ui/react";

import Router from "next/router";
import { useLayoutEffect, useRef, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Signup() {
  const rollNoRef = useRef();
  const nameRef = useRef();
  const departmentRef = useRef();
  const yearRef = useRef();
  const interestsRef = useRef();
  const passwordRef = useRef();

  let [rollNoError, setrollNoErrorState] = useState(false)
  let [nameError, setnameErrorState] = useState(false)
  let [departmentError, setdepartmentErrorState] = useState(false)
  let [yearError, setyearErrorState] = useState(false)
  let [interestsError, setinterestsErrorState] = useState(false)
  let [passwordError, setpasswordErrorState] = useState(false)

  let function_map = {
    'rollNo': setrollNoErrorState,
    'name': setnameErrorState,
    'department': setdepartmentErrorState,
    'year': setyearErrorState,
    'interests': setinterestsErrorState,
    'password': setpasswordErrorState,
  }

  let hasError = false;

  const [loading, setLoading] = useState(false);

  const [loggedIn, setLoggedIn] = useState(null);

  const [signUpFailure, setSignUpFailure] = useState(false);

  function setError(key, value) {
    hasError = true;
    function_map[key](value);
  }

  function resetErrors() {
    hasError = false;
    setrollNoErrorState(false);
    setnameErrorState(false);
    setdepartmentErrorState(false);
    setyearErrorState(false);
    setinterestsErrorState(false);
    setpasswordErrorState(false);
  }

  function hasAnyError() {
    return hasError;
  }

  function signUpFailed() {
    setSignUpFailure(true);
    setLoading(false);
  }

  useLayoutEffect(() => {
    setLoggedIn(supabase.auth.user() !== null);

    if (loggedIn === true && loading === false) {
      Router.push("/dashboard");
    }
  }, [loading, loggedIn]);

   function validate() {
    //Resetting previous errors
    resetErrors();

    //Roll Number validation
    var rollNo = rollNoRef.current;

    if (rollNo.value === '') {
      setError('rollNo', "Please enter your roll number to sign up")
    } else if (!/\d{2}[a-zA-z]*\d{3,}$/i.test(rollNo.value)) { //TODO do Stronger testing
      setError('rollNo', "Please enter a valid roll number")
    }

    //Name validation
    var name = nameRef.current

    if (name.value === '') {
      setError('name', "Please enter your name to sign up")
    }

    // Department validation
    var department = departmentRef.current
    var departments = ["cse", "it", "aids", "mtech", "csbs", "ece", "eee", "civil", "mech", "mct"]

    if (department.value === '') {
      setError('department', "Please choose your department to sign up")
    } else if (departments.indexOf(department.value) === -1) {
      setError('department', "Please choose a valid department")
      console.log("Trying to heck xDDD")
    }

    //Year validation
    var year = yearRef.current
    var years = ["2018", "2019", "2020", "2021"]

    if (year.value === '') {
      setError('year', "Please choose your joining year to sign up")
    } else if (years.indexOf(year.value) === -1) {
      setError('year', "Please choose a valid joining year")
      console.log("Trying to heck xDDD")
    }

    //Password validation
    var password = passwordRef.current

    if (password.value === '') {
      setError('password', "Please enter a password to sign up")
    } else if (password.value.length < 8) {
      setError('password', "Password must be atleast 8 characters long")
    }

    return
  }

  async function handleSignup(e) {
    e.preventDefault();

    if (!loggedIn) {
      try {
        setSignUpFailure(false);
        setLoading(true);

        validate();

        var hasError = hasAnyError();

        console.log(hasError)

        if (hasError) {
          setLoading(false);
          return;
        } else {
          const {user, session, error} = await supabase.auth.signUp({
            email: rollNoRef.current.value + "@skcet.ac.in",
            password: passwordRef.current.value,
          });

          if (error) {
            signUpFailed();
            throw error;
          } else {
            await registerUser(user);

            await updateProfile(user);

            setLoggedIn(true);

            await Router.push("/dashboard");
          }
        }
      } catch (error) {
        signUpFailed();
        alert(error.message);
      }
    }
  }

  async function registerUser(user) {
    if (!signUpFailure) {
      try {
        const updates = {
          id: user.id,
          email: rollNoRef.current.value + "@skcet.ac.in",
          passcode: passwordRef.current.value,
        };

        let { error } = await supabase.from("users").upsert(updates, {
          returning: "minimal",
        });

        if (error) {
          signUpFailed();
          throw error;
        }
      } catch (error) {
        signUpFailed();
        alert(error.message);
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
          avatar_url:
            "http://results.skcet.ac.in:615/assets/StudentImage/" +
            rollNoRef.current.value +
            ".jpg",
          updated_at: new Date(),
        };

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal",
        });

        if (error) {
          signUpFailed();
          throw error;
        }
      } catch (error) {
        signUpFailed();
        alert(error.message);
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

          <FormControl id="name" isInvalid={nameError} isRequired >
            <FormLabel>Full name</FormLabel>
            <InputGroup>
              <Input
                placeholder="Your first and last name"
                type="text"
                ref={nameRef}
                required={true}
              />
            </InputGroup>
            <FormErrorMessage>{nameError}</FormErrorMessage>
          </FormControl>
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
          <FormControl id="department" isInvalid={departmentError} isRequired>
            <FormLabel>Department</FormLabel>
            <InputGroup>
              <Select
                type="text"
                ref={departmentRef}
                required={true}
                placeholder="Select option"
              >
                <option value="cse">Computer Science and Engineering</option>
                <option value="it">Information Technology</option>
                <option value="aids">Artificial Intelligence and Data Science</option>
                <option value="mtech">M.Tech. Computer Science and Engineering</option>
                <option value="csbs">Computer Science and Business Systems</option>
                <option value="ece">Electronics and Communication Engineering</option>
                <option value="eee">Electrical and Electronics Engineering</option>
                <option value="civil">Civil Engineering</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="mct">Mechatronics Engineering</option>
              </Select>
            </InputGroup>
            <FormErrorMessage>{departmentError}</FormErrorMessage>
          </FormControl>
          <FormControl id="year" isInvalid={yearError} isRequired>
            <FormLabel>Year of joining</FormLabel>
            <InputGroup>
              <Select
                type="text"
                ref={departmentRef}
                required={true}
                placeholder="Year"
                ref={yearRef}
              >
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </Select>
            </InputGroup>
            <FormErrorMessage>{yearError}</FormErrorMessage>
          </FormControl>
          <FormControl id="interests" isInvalid={interestsError}>
            <FormLabel>Interests</FormLabel>
            <InputGroup>
              <Input
                placeholder="Example: data science, web development, cyber security"
                type="text"
                ref={interestsRef}
              />
            </InputGroup>
            <FormErrorMessage>{interestsError}</FormErrorMessage>
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
              {loading ? "Registering" : "REGISTER"}
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
