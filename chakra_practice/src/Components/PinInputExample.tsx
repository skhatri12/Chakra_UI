import { HStack, PinInput, PinInputField,Text } from "@chakra-ui/react"

const PinInputExample = () => {
  return (
    <>
  <Text>
  The PinInput component is similar to the Input component, but is optimized for entering sequences of digits quickly.
  </Text>
    <Text>
    PinInput: The component that provides context to all the pin-input fields. <br />
PinInputField: The text field that user types in - must be a direct child of PinInput.
    </Text>

    <HStack>
      <PinInput mask >
        <PinInputField/>
        <PinInputField/>
        <PinInputField/>
        <PinInputField/>
      </PinInput>
    </HStack>
        <a href="/">Back to home</a>
        </>
  )
}

export default PinInputExample
