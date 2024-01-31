import {
Text, FormControl, FormLabel, FormHelperText, Input,RadioGroup,Radio, HStack,Select
} from '@chakra-ui/react'
const FormExample = () => {
  return (
    <>
      <Text>
      Chakra UI exports 4 components for Form Control: <br />

          FormControl: The wrapper that provides context and functionality for all children. <br />
          FormLabel: The label of a form section. The usage is similar to html label. htmlFor is set by default for children input. <br />
          FormHelperText: The message that tells users more details about the form section. <br />
          FormErrorMessage: The message that shows up when an error occurs.
      </Text>

      <FormControl>
        <FormLabel>Email Address:</FormLabel>
        <Input type='email' />
        <FormHelperText>Email wont be saved by third parties</FormHelperText>
      </FormControl>


      <FormControl>
        <FormLabel>Favourite Series</FormLabel>
        <RadioGroup defaultValue='All of Us Are Dead' >
        <HStack spacing='20px' >
          <Radio value='Money Heist' >Money Heist</Radio>
          <Radio value='Manifest' >Manifest</Radio>
          <Radio value='All of Us Are Dead' >All of Us Are Dead</Radio>
          <Radio value='Berlin' >Berlin</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>


      <FormControl isRequired mt='25px' >
        <FormLabel>First Name</FormLabel>
        <Input placeholder='Enter your first name' />
      </FormControl>

      <FormControl mt='25px' >
        <FormLabel>Country</FormLabel>
        <Select placeholder='Select country'>
          <option value="">United States of America</option>
          <option value="">Australia</option>
          <option value="">UK</option>
          <option value="">Canada</option>
          <option value="">Japan</option>
        </Select>
      </FormControl>
      <a href="/">Back to home</a>
    </>
  )
}

export default FormExample
