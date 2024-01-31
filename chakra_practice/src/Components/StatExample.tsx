import { Stat,Text,StatLabel,StatNumber,StatHelpText,StatGroup,StatArrow } from "@chakra-ui/react"
const StatExample = () => {
  return (
    <>
    <Text>
    `Stat` component is used to display some statistics.
    </Text>
    <StatGroup>
      <Stat>
        <StatLabel>MKCL</StatLabel>
        <StatNumber>$5.25</StatNumber>
        <StatHelpText> <StatArrow type="increase" /> FEB 10 - FEB 20</StatHelpText>
      </Stat>

      <Stat>
        <StatLabel>UPPER</StatLabel>
        <StatNumber>$2.25</StatNumber>
        <StatHelpText> <StatArrow type="decrease" /> JAN 10 - FEB 20</StatHelpText>
      </Stat>
      </StatGroup>
      <a href="/">Back TO HOME</a>
    </>
  )
}

export default StatExample
