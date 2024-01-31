import { Text,Progress, CircularProgress, CircularProgressLabel,Spinner,Heading} from "@chakra-ui/react"
const ProgessSpinner = () => {
  return (
    <>
      <Text>Progress is used to display the progress status for a task that takes a long time or consists of several steps.</Text>
      <Progress hasStripe value={50} />
      <Progress hasStripe isIndeterminate mt='10px' />
      <CircularProgress value={90} color="orange" thickness={3}/>
      <CircularProgress value={50}>
        <CircularProgressLabel>50%</CircularProgressLabel>
      </CircularProgress>
      <CircularProgress isIndeterminate>
        <CircularProgressLabel></CircularProgressLabel>
      </CircularProgress>
      <Heading>Spinners provide a visual cue that an action is processing awaiting a course of change or a result</Heading>
      <Spinner emptyColor="red" speed="0.5s" size='xl'/>
      <a href="/">Return to Home</a> 
    </>
  )
}

export default ProgessSpinner
