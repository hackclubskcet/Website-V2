import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Container,
  Heading,
  SimpleGrid,
  Center,
  Divider,
  Link,
  Text,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";

const TeamCard = (props) => {
  return (
    <Center>
      <Box
        w={{ base: "60", md: "s", lg: "s" }}
        height={{ base: "150", md: "s", lg: "290" }}
        bg={useColorModeValue("gray.800", "white")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Avatar
          borderRadius={0}
          w="full"
          h={{ base: "110px", md: "s", lg: "240px" }}
          fit="fill"
          src={props.avatar}
          alt="avatar"
        />

        <Box padding={0} textAlign="center">
          <Link
            display="block"
            fontSize={{ base: "9px", md: "12px", lg: "16px" }}
            color={useColorModeValue("white", "gray.800")}
            fontWeight="bold"
          >
            {props.name}
          </Link>
          <chakra.span
            fontSize={{ base: "9px", md: "12px", lg: "16px" }}
            color={useColorModeValue("white", "gray.800")}
          >
            {props.department.toUpperCase()} {props.year}
          </chakra.span>
        </Box>
      </Box>
    </Center>
  );
};

const MemberCard = () => {
  return (
    <Center>
      <Box
        w={{ base: "60", md: "s", lg: "s" }}
        height={{ base: "120", md: "s", lg: "210" }}
        bg={useColorModeValue("gray.800", "white")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={{ base: "ss", md: "s", lg: "36" }}
          fit="cover"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <Box padding={3} py={2} textAlign="center">
          <Link
            display="block"
            fontSize={{ base: "9px", md: "12px", lg: "16px" }}
            color={useColorModeValue("white", "gray.800")}
            fontWeight="bold"
          >
            Guru Wycliffe
          </Link>
          <chakra.span
            fontSize={{ base: "9px", md: "12px", lg: "16px" }}
            color={useColorModeValue("white", "gray.800")}
          >
            CSE 2023
          </chakra.span>
        </Box>
      </Box>
    </Center>
  );
};

const MembersSection = (props) => {
  return (
    <div>
      <Container paddingBottom={20} maxW={"95%"} mt={10} textAlign="center">
        <Heading paddingBottom={20} fontSize={"3xl"}>
          The Club Members
        </Heading>
        <Heading color={"#ec3750"} paddingBottom={5} fontSize={"xl"}>
          Core Team
        </Heading>
        <Text color={"grey"} paddingBottom={10} fontSize={"s"}>
          The most active contributors of Hack Club SKCET
        </Text>

        <SimpleGrid
          paddingBottom="10"
          minChildWidth="70px"
          columns={[3, null, 6]}
          spacing={{ base: "10", md: "40", lg: "70" }}
          textAlign="center"
        >
          {props.teamMembers.map((member, index) => (
              <TeamCard name={member.name} key={index} year={member.year} department={member.department} avatar={member.avatar_url} />
          ))}
        </SimpleGrid>

        <Divider />
        <Heading
          color={"#ec3750"}
          paddingBottom={5}
          paddingTop={10}
          fontSize={"xl"}
        >
          Club Members
        </Heading>
        <Text color={"grey"} paddingBottom={10} fontSize={"s"}>
          Participants of various workshops, hackathons and other activities
        </Text>

        <SimpleGrid
          paddingBottom="10"
          minChildWidth="70px"
          columns={[3, null, 6]}
          spacing={{ base: "10", md: "40", lg: "70" }}
          textAlign="center"
        >
          {props.members.map((member, index) => (
            <TeamCard name={member.name} year={member.year} key={index} department={member.department} avatar={member.avatar_url.toLowerCase()} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default MembersSection;
