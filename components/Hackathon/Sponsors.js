import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  HStack,
  Image,
} from "@chakra-ui/react";

export default function Sponsors() {
  return (
    <Box marginTop={10} marginBottom={10} p={4}>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Sponsors</Heading>
      </Stack>

      <Container paddingTop={10} maxW={"xl"} mt={10}>
        <SimpleGrid columns={2} spacing={70}>
        <HStack align={"center"}>
            {" "}
            <Image
              src="https://cdn.discordapp.com/attachments/832949239457906718/946266082094751824/skcet-removebg-preview.png"
              alt="Sri Krishna Institutions"
            />
          </HStack>
          <HStack align={"center"}>
            {" "}
            <Image
              src="https://fossunited.org/files/logo618eee.svg"
              alt="Foss United"
            />
          </HStack>
          <HStack align={"center"}>
            {" "}
            <Image
              src="https://www.stickermule.com/about/_next/static/public/logoColored.67e93281fc7b7837ca6c47a44ff7ea56.svg"
              alt="Stickermule"
            />
          </HStack>
          <HStack align={"center"}>
            {" "}
            <Image
              src="https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2019/09/replit-logo.png?resize=730%2C389&ssl=1"
              alt="Repl.it"
            />
          </HStack>
          <HStack align={"center"}>
            {" "}
            <Image
              src="https://img.icons8.com/fluency/150/000000/figma.png"
              alt="Figma"
            />
          </HStack>
          <HStack align={"center"}>
            {" "}
            <Image
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png"
              alt="Postman"
            />
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
