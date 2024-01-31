import { Box,Checkbox,CheckboxGroup,Stack,Heading } from "@chakra-ui/react"

const CheckBoxEg = () => {
  return (
    <>   
     <Box>
       <Checkbox colorScheme="red" >Checkbox</Checkbox> <br />
       <Checkbox defaultChecked colorScheme="green" >Same as Permanent
        </Checkbox> <br />
        <Checkbox isInvalid>Invalid Checkbox</Checkbox> <br />
    </Box>
    <Heading>CheckBoxes</Heading>
    <CheckboxGroup>
      <Stack direction='row' spacing={[1,5]}>

      <Checkbox>BCA</Checkbox>
      <Checkbox>Bsc.CSIT</Checkbox>
      <Checkbox>BIT</Checkbox>
      <Checkbox>BIM</Checkbox>
      </Stack>

    </CheckboxGroup>
    <a href="/">Back to home</a>
    </>

  )
}

export default CheckBoxEg
