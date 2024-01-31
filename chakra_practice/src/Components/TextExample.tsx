import { Text,Heading,Highlight } from "@chakra-ui/react"
const TextExample = () => {
  return (
    <>
    <Text fontSize='xl' noOfLines={[1,2]} >
      Text is the used to render text and paragraphs within an interface.
      "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
        Text is the used to render text and paragraphs within an interface.
    </Text>
    <Text as='b' >Bold</Text>
    <Text as='i' >Italic</Text><br />
    <Text as='del' >Deleted</Text>
    <Text as='mark' >Highlighted</Text>
    <Text as='s' >StrikeThrough</Text>
    <Text as='abbr' >ITSPN</Text>

    <Heading>Starting of heading section</Heading>
      <Heading as='h3' >This is h3</Heading>
      <Heading as='h6' >This is h6</Heading>

      <Highlight query={['text','highlight']} styles={{bg:'red'}} >
        We can highlight the substrings of a text using the highlight.
      </Highlight>

    <a href="/">Back to home</a>
    </>
  )
}

export default TextExample
