import { Container, VStack } from "@chakra-ui/react";
const ContainerExample = () => {
  return (
    <>
      <VStack>
        <Container bg="green" color="white">
          To contain any piece of content, wrap it in the Container component.
        </Container>
        <Container bg="red" color="white">
          By default, the Container component sets the maxWidth of the content
          to 60 characters
        </Container>
        <Container bg="black" color="white">
          but we can customize this by passing custom maxWidth values
        </Container>
      </VStack>
      <a href="/">Back to home</a>
    </>
  );
};

export default ContainerExample;
