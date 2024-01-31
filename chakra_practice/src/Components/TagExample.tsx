import { Text,Tag,TagLeftIcon,TagLabel, TagRightIcon, TagCloseButton } from "@chakra-ui/react"
const TagExample = () => {
  return (
    <>
      <Text>Tag component is used for items that need to be labeled, categorized, or organized using keywords that describe them.</Text>
      <Tag>Simple Tag</Tag>

      <Tag>
        <TagLeftIcon/>
        <TagLabel>Add</TagLabel>
      </Tag>

      <Tag>
        <TagLabel>Subtract</TagLabel>
        <TagRightIcon/>
      </Tag>

      <Tag colorScheme="green" >
        <TagLabel>Close</TagLabel>
        <TagCloseButton/>
      </Tag>
      <a href="/">Back to Home</a>
    </>
  )
}

export default TagExample
