import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
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
          <Stack direction={"row"} spacing={6} className="footer-top">
            
            <div className="social-links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/hackclubskcet">
                <i><FaGithub /></i>
              </a>
            </div>

            <div className="social-links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://instagram.com/hackclubskcet">
                <i><FaInstagram /></i>
              </a>
            </div>
            
            <div className="social-links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UCQSIUGbWfco4aTDNYTrNd7w">
                <i><FaYoutube /></i>
              </a>
            </div>
            
            <div className="social-links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://discord.gg/gREKADreg9">
                <i><FaDiscord /></i>
              </a>
            </div>
        
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
