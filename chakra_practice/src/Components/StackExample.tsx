import {
  HStack,
  Heading,
  Text,
  Box,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
const StackExample = () => {
  return (
    <>
      <Heading>
        Stack is a layout component used to group elements together and apply a
        space between them.
      </Heading>
      <Text>
        VStack: used to stack elements in the vertical direction <br /> HStack:
        used to stack elements in the horizontal direction <br /> Stack: used to
        stack elements in the vertical or horizontal direction
      </Text>

      <HStack>
        <Box bg="green" color="white">
          1
        </Box>
        <Box bg="red" color="white">
          2
        </Box>
        <Box bg="purple" color="white">
          3
        </Box>
        <Box bg="black" color="white">
          4
        </Box>
        <Box bg="orange" color="white">
          5
        </Box>
      </HStack>

      <VStack divider={<StackDivider />} align="stretch" borderColor="black">
        <Box bg="green" color="white">
          6
        </Box>
        <Box bg="red" color="white">
          7
        </Box>
        <Box bg="purple" color="white">
          8
        </Box>
        <Box bg="black" color="white">
          9
        </Box>
        <Box bg="orange" color="white">
          10
        </Box>
      </VStack>

      <a href="/">Back to home</a>
    </>
  );
};

export default StackExample;
