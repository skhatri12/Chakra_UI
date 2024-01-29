import { Wrap, WrapItem, Center, Heading, Text } from "@chakra-ui/react";

const WrapExample = () => {
  return (
    <>
      <Heading>
        layout component used to add space between elements and wraps
        automatically if there isn't enough space.
      </Heading>

      <Text>
        Wrap: Wrap composes the Box component and renders a ul tag <br />
        WrapItem: WrapItem composes the Box component and renders the HTML li
        tag
      </Text>
      <Wrap>
        <WrapItem>
          <Center w="180px" h="80px" bg="red" color="white">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green" color="white">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="purple" color="white">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="orange" color="white">
            Box 4
          </Center>
        </WrapItem>
      </Wrap>
      <a href="/">Back to home</a>
    </>
  );
};

export default WrapExample;
