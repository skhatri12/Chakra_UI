import { Text,UnorderedList,ListItem, OrderedList,Heading,Box, Divider, AbsoluteCenter } from "@chakra-ui/react"
const DividerListExample = () => {
  return (
    <>
      <Text>List is used to display list items. It renders a ul element by default.
</Text>

    <UnorderedList>
        <ListItem>Dell</ListItem>
        <ListItem>HP</ListItem>
        <ListItem>Acer</ListItem>
        <ListItem>Asus</ListItem>
    </UnorderedList>

    <OrderedList>
        <ListItem>Dell</ListItem>
        <ListItem>HP</ListItem>
        <ListItem>Acer</ListItem>
        <ListItem>Asus</ListItem>
    </OrderedList>

    <Heading>Divider Example</Heading>
    <Box pos='relative' >
      <Divider/>
      <AbsoluteCenter bg='white' px='4' >
        Content
      </AbsoluteCenter>
    </Box>
      <a href="/">Back to Home</a>
    </>
  )
}

export default DividerListExample
