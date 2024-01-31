import { Text,Avatar, AvatarBadge } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"
import { CloseButton } from "@chakra-ui/react"
const AvatarExample = () => {
  return (
    <>
      <Text>The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.</Text>
      <Avatar name="SK" ><AvatarBadge  boxSize='1.25em' bg='green'/></Avatar>
      <PhoneIcon/>
      <CloseButton/>
      <a href="/">Back to Home</a>
    </>
  )
}

export default AvatarExample
