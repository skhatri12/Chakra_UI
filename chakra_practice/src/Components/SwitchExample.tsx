import { FormControl, FormLabel, Switch,Text } from "@chakra-ui/react"

const SwitchExample = () => {
  return (

    <>
        <Text>The Switch component is used as an alternative for the Checkbox component. You can switch between enabled or disabled states.</Text>


        <FormControl display='flex'>
          <FormLabel>Enable email alerts?</FormLabel>
          <Switch colorScheme="green" id="email-alerts" />
        </FormControl>
        </>

  )
}

export default SwitchExample
