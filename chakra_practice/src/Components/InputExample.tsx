import { InputGroup, InputLeftAddon,Input,InputRightAddon } from "@chakra-ui/react"

const InputExample = () => {
  return (
    <>
    <InputGroup>
      <InputLeftAddon>https://</InputLeftAddon>
      <Input type="text" placeholder="Enter site"  />
      <InputRightAddon>.com</InputRightAddon>
    </InputGroup>

    <Input placeholder="Select Date and Time" type="datetime-local" size='md'  />
    
    
    <a href="/">Back to home</a>
    </>
  )
}

export default InputExample
