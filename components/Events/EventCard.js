import { Box, Image, Badge } from "@chakra-ui/react";

function EventCard({ data }) {
  return (
    <Box
      className="event-card"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <div className="flex-center">
        <Image src={`/images/${data.id}.png`} alt={"events"} />
      </div>

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {data.title}
        </Box>

        <Box>{data.description}</Box>
      </Box>
    </Box>
  );
}

export default EventCard;
