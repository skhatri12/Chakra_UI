import { Grid, GridItem, Heading, SimpleGrid, Box } from "@chakra-ui/react";

const GridExample = () => {
  return (
    <>
      <Heading>Grid:layout for managing grid layouts</Heading>
      <Grid
        templateAreas={`"header header" "nav main" "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        gap="5px"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem bg="orange" area={"header"}>
          Header
        </GridItem>
        <GridItem bg="pink" area={"nav"}>
          Nav
        </GridItem>
        <GridItem bg="green" color="white" area={"main"}>
          Main
        </GridItem>
        <GridItem bg="blue" color="white" area={"footer"}>
          Footer
        </GridItem>
      </Grid>

      <Heading>
        SimpleGrid provides a friendly interface to create responsive grid
        layouts with ease.
      </Heading>

      <SimpleGrid columns={[1, null, 2]} minChildWidth="120px" spacing="20px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>

      <a href="/">Back to home</a>
    </>
  );
};

export default GridExample;
