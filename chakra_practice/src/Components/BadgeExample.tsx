import { Badge, Heading, Stack } from "@chakra-ui/react";

const BadgeExample = () => {
  return (
    <>
      <Stack direction="column">
        <Heading>
          Badges are used to highlight an item's status for quick recognition.
        </Heading>
        <Badge colorScheme="green" variant="outline">
          Successful
        </Badge>
        <Badge colorScheme="red" variant="solid">
          Failed
        </Badge>
        <Badge colorScheme="red" variant="subtle">
          Removed
        </Badge>
        <Badge>Default</Badge>
      </Stack>
      <a href="/">Back to home</a>
    </>
  );
};

export default BadgeExample;
