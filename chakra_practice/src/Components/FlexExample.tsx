import { Flex, Text, Box, Spacer } from "@chakra-ui/react";
const FlexExample = () => {
  return (
    <>
      <Flex>
        <Text bg="green" color="white">
          Flex is Box with display set to flex and comes with helpful style
          shorthand. It renders a `div` element. <br />
          Flex: A Box with display: flex. <br />
          Spacer: Creates an adjustable, empty space that can be used to tune
          the spacing between child elements within Flex.
        </Text>
        <Box bg="red" color="white">
          <Text>Box One</Text>
        </Box>

        <Box bg="yellow" color="black">
          <Text>Box Two</Text>
        </Box>
        <Spacer />
        <Box bg="black" color="white">
          <Text>Box Three</Text>
        </Box>
        <Box bg="blue" color="white">
          <Text>Box Four</Text>
        </Box>
      </Flex>
      <a href="/">Back to home</a>
    </>
  );
};

export default FlexExample;
