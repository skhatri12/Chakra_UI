import { Box } from "@chakra-ui/react";

const BoxExample = () => {
  return (
    <>
      <Box bg="tomato" w="100%" p={4} color="white">
        Box can be useful for creating responsive layouts.
      </Box>
      <Box
        as="button"
        borderRadius="md"
        bg="red"
        color="white"
        px="10px"
        mt="10px"
        ml="10px"
      >
        Button
      </Box>
      <a href="/">Back to home</a>
    </>
  );
};

export default BoxExample;
