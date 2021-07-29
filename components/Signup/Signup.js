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

export default function Signup() {
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
              <Input placeholder="Your first and last name" type="text" />
            </InputGroup>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Register number</FormLabel>
            <InputGroup>
              <Input placeholder="Example: 19EUCS001" type="email" />
              <InputRightAddon children="@skcet.ac.in" />
            </InputGroup>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Shhh! Keep it secret" type="password" />
          </FormControl>
          <FormControl id="phone">
            <FormLabel>Phone number</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+91" />
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
          </FormControl>
          <FormControl id="interests">
            <FormLabel>Interests</FormLabel>
            <InputGroup>
              <Input
                placeholder="Example: data science, web development, cyber security"
                type="text"
              />
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
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
            >
              REGISTER
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
