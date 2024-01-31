import { Box,Text,Button,ButtonGroup } from "@chakra-ui/react"
const ButtonExample = () => {
  return (
    <Box>
      <Text>Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.</Text>
      <Button   variant='solid' colorScheme="red" >Button One</Button>
      <Button variant='outline' colorScheme="orange" >Button Two</Button>
      <Button variant='ghost' colorScheme="yellow" >Button Three</Button>
      <Button variant='link' colorScheme="gray" >Button Four</Button>
      <Button colorScheme="linkedin" >linkedIn</Button>
      <Button colorScheme='telegram'>Telegram</Button>
      <Button colorScheme='twitter'>Twitter</Button>
      <Button colorScheme='whatsapp'>Whatsapp</Button>
      <Button colorScheme='messenger'>Messenger</Button>
      <Button colorScheme='facebook'>Facebook</Button>
      <Button  colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button
    isLoading
    loadingText='Submitting'
    colorScheme='teal'
    variant='outline'
    spinnerPlacement='end'
  >
    Submit
  </Button>

<ButtonGroup>
  <Button colorScheme='blue'>Save</Button>
  <Button>Cancel</Button>

</ButtonGroup>
<a href="/">Back to home</a>
    </Box>
  )
}

export default ButtonExample
