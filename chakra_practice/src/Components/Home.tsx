import { Box, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Button>
        <a href="/box">Box</a>
      </Button>
      <Button>
        <a href="/badge">Badge</a>
      </Button>
      <Button>
        <a href="/center">Center</a>
      </Button>
      <Button>
        <a href="/container">Container</a>
      </Button>
      <Button>
        <a href="/flex">Flex</a>
      </Button>
      <Button>
        <a href="/grid">Grid</a>
      </Button>
      <Button>
        <a href="/stack">Stack</a>
      </Button>
      <Button>
        <a href="/wrap">Wrap</a>
      </Button>
    </Box>
  );
};

export default Home;
