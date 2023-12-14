import { Box, Heading, Image, Text } from "@chakra-ui/react";
import note from "../assets/note.jpg";

export default function Dashboard() {
  return (
    <Box padding={8} marginTop={8}>
      <Image position={"absolute"} right={0} w={650} h={600} src={note} />
      <Heading mt={20} textAlign={"start"} size={"4xl"}>
        Team Tracker App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        The Team Tracker app optimizes project management
        by offering a user-friendly platform for task assignment, tracking, and
        collaboration. Its intuitive interface ensures seamless communication
        and progress monitoring, fostering effective team coordination and
        project efficiency.
      </Text>
    </Box>
  );
}
