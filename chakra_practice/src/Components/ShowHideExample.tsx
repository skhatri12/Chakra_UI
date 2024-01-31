import {Show,Text} from '@chakra-ui/react'
const ShowHideExample = () => {
  return (
    <>
    <Text>Other Texts  can only be seen below 400px screens</Text>
    <Show breakpoint='(max-width:400px)'>
      <Text>This text appears only on screens 400px and smaller</Text>
    </Show>
     <a href="/">Back to HOME</a> 
    </>
  )
}

export default ShowHideExample
