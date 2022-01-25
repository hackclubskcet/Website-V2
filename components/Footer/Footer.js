import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <Box paddingTop={10}>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>Made with ❤️ by Hack Club SKCET © 2021</Text>
          <Stack direction={"row"} spacing={6}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://instagram.com/hackclubskcet"
            >
              <FaInstagram />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UCQSIUGbWfco4aTDNYTrNd7w"
            >
              <FaYoutube />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://discord.gg/gREKADreg9"
            >
              <FaDiscord />
            </a>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
