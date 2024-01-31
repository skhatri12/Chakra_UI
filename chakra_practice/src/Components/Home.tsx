import { Box, Button,Heading,ButtonGroup } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
    <Box>
      <Heading textAlign='center'>Some Components of Chakra UI & Theme Customization</Heading>
      <ButtonGroup noOfLines={[1,2]} mt='10px' >
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
      <Button>
        <a href="/button">Button</a>
      </Button>
      <Button>
        <a href="/checkbox">CheckBox</a>
      </Button>
      <Button>
        <a href="/editable">Editable</a>
      </Button>
      <Button>
        <a href="/form">Form</a>
      </Button>
      <Button>
        <a href="/input">Input</a>
      </Button>
      <Button>
        <a href="/pininput">Pin Input</a>
      </Button>
      <Button>
        <a href="/rangeslider">Range Slider</a>
      </Button>
      <ButtonGroup mt='10px'>
      <Button>
        <a href="/switch">Switch</a>
      </Button>
      <Button>
        <a href="/text">Text</a>
      </Button>
      <Button>
        <a href="/card">Card</a>
      </Button>
      <Button>
        <a href="/list">Divider and List</a>
      </Button>
      <Button>
        <a href="/stat">Stat</a>
      </Button>
      <Button>
        <a href="/table">Table</a>
      </Button>
      <Button>
        <a href="/tag">Tag</a>
      </Button>
      <Button>
        <a href="/tabs">Tabs</a>
      </Button>
 
      <Button>
        <a href="/avatar">Avatar</a>
      </Button>

      <Button>
        <a href="/showhide">Show Hide</a>
      </Button>
      

      <Button>
        <a href="/alert">Alert</a>
      </Button>

      <Button>
        <a href="/progessspinner">Progress & Spinner</a>
      </Button>


      <Button>
        <a href="/customtheme">Use Custom Theme</a>
      </Button>
      </ButtonGroup>
      </ButtonGroup>
    </Box>
    </>
  );
};

export default Home;
