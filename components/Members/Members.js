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
  AvatarGroup, useMediaQuery,
} from "@chakra-ui/react";

const TeamCard = (props) => {
  return (
    <Center w={{ md: "200px"}}>
      <Box
        w={{ base: "60", md: "s", lg: "s" }}
        height={{ base: "150", md: "290", lg: "290" }}
        bg={useColorModeValue("gray.800", "white")}
        shadow="lg"
        rounded="lg"
        whiteSpace="nowrap"
        overflow="hidden"
        mx="center"
      >
        <Avatar
          borderRadius={0}
          w="full"
          h={{ base: "110px", md: "240px", lg: "240px" }}
          fit="fill"
          src={props.avatar.toLowerCase()}
          alt="avatar"
        />

        <Box padding={0.5} textAlign="center">
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

const MemberCard = (props) => {
  return (
    <Center  w={{ md: "130px"}}>
      <Box
        w={{ base: "60", md: "s", lg: "s" }}
        height={{ base: "150", md: "290", lg: "290" }}
        bg={useColorModeValue("gray.800", "white")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={{ base: "110px", md: "210px", lg: "210px" }}
          fit="cover"
           // TODO UNCOMMENT WHEN PICS NEEDED
          // src={props.avatar.toLowerCase()}
            src={'https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png'}
          name={props.name}
          alt="avatar"
        />


        <Box padding={1} paddingX={1} textAlign="center">
          <Link
              display="block"
              fontSize={{ base: "9px", md: "12px", lg: "16px" }}
              color={useColorModeValue("white", "gray.800")}
              fontWeight="bold"
              whiteSpace="nowrap"
              overflow="hidden"
          >
            {props.name}
          </Link>
          <chakra.span
            fontSize={{ base: "9px", md: "12px", lg: "16px" }}
            color={useColorModeValue("white", "gray.800")}
          >
            {props.department.toUpperCase()}{props.isNotMobile ? <br/> : ' '}{props.year}
          </chakra.span>
        </Box>
      </Box>
    </Center>
  );
};

const MembersSection = (props) => {
  const [isNotMobile] = useMediaQuery("(min-width: 768px)")

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
          columns={[3, 4, 5]}
          spacing={{ base: "10", md: "40", lg: "70" }}
          textAlign="center"
        >
          {props.teamMembers.map((member, index) => (
              <TeamCard name={member.name} key={index} year={member.year} department={member.department}
                        avatar={member.avatar_url} />
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
          columns={[3, 5, 8]}
          spacing={{ base: "10", md: "40", lg: "70" }}
          textAlign="center"
        >
          {props.members.map((member, index) => (
                <MemberCard name={member.name} year={member.year} key={index} department={member.department}
                            avatar={member.avatar_url.toLowerCase()} isNotMobile={isNotMobile}/>)
          )}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default MembersSection;
