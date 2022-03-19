import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import EventCard from "./EventCard";
import { events } from "./eventsdata";
import {
  Heading,
  Box,
  Stack,
  Container,
  useDisclosure,
} from "@chakra-ui/react";

const Events = () => {
  const checker = useDisclosure();
  return (
    <div>
      <Box marginTop={10} marginBottom={10} p={4}>
        <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"} className="title-text">
            Events
          </Heading>
        </Stack>
      </Box>

      <Splide
        options={{
          type: "loop",
          perPage: checker.onOpen ? 1 : 3,
        }}
      >
        {events.map((event) => (
          <SplideSlide key={event.id}>
            <div className="flex-center">
              <EventCard data={event} />{" "}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Events;
