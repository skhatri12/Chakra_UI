import { Text,Alert,AlertDescription,AlertTitle,AlertIcon } from "@chakra-ui/react"
const AlertExample = () => {
  return (
    <>
    <Text>Alerts are used to communicate a state that affects a system, feature or page.</Text>
    <Alert status="info" variant='subtle' >
      <AlertIcon/>
      <AlertTitle>Browser is outdated!</AlertTitle>
      <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
    </Alert>

    <Alert status="success" variant='solid' >
    <AlertIcon/>
    <AlertTitle>Successfully Added!</AlertTitle>
    </Alert>

    <Alert status="warning" variant='left-accent' >
    <AlertIcon/>
    <AlertTitle>Expiring Soon!</AlertTitle>
    </Alert>

    <Alert status="error" variant='top-accent' >
    <AlertIcon/>
    <AlertTitle>Error processing your request</AlertTitle>
    </Alert>

      <a href="/">Back to Home</a>
    </>
  )
}

export default AlertExample
