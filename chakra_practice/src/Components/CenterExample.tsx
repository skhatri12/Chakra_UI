import {
  Box,
  Center,
  Heading,
  HStack,
  Circle,
  Square,
  AbsoluteCenter,
} from "@chakra-ui/react";

const CenterExample = () => {
  return (
    <>
      <Heading>
        Center is a layout component that centers its child within itself.{" "}
        <br />
        Center can be used to create frames around icons or numbers.
      </Heading>
      <Center bg="red" color="white">
        Center: centers its child given width and height
        <br /> Square: centers its child given size (width and height) <br></br>{" "}
        Circle: a Square with round border-radius <br /> AbsoluteCenter: centers
        relative to its parent by given axis
      </Center>

      <HStack mt="20px" ml="20px">
        <Center bg="green" color="white" w="50px">
          <Box>1</Box>
        </Center>
        <Circle bg="red" color="white" size="30px">
          2
        </Circle>

        <Square bg="black" color="white" size="30px">
          3
        </Square>
      </HStack>

      <Box pos="relative">
        <AbsoluteCenter bg="green" color="white" axis="both">
          This is absolute center
        </AbsoluteCenter>
      </Box>
      <a href="/">Back to home</a>
    </>
  );
};

export default CenterExample;
