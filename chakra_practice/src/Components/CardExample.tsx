import {Text,Card,CardHeader,CardBody,CardFooter,Heading, Button} from '@chakra-ui/react'
const CardExample = () => {
  return (
    <>
      <Text>
        Card is a flexible component used to group and display content in a clear and concise format.
      </Text>
      <Text>
         Card: The parent wrapper that provides context for its children. <br />
        CardHeader: The wrapper that contains a card's header. <br />
        CardBody: The wrapper that houses the card's main content. <br />
        CardFooter: The footer that houses the card actions. <br />
      </Text>

      <Card w='500px' mt='10px' ml='10px' align='center'>
        <CardHeader>
       <Heading>Heading of a card</Heading>  
        </CardHeader>
        <CardBody>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque dolores modi repellendus possimus excepturi facilis accusantium ut, tempore aperiam! Error commodi nam sit eos aliquam sapiente magnam quam impedit!</CardBody>
        <CardFooter> 
          <Button>View More</Button>
         </CardFooter>
      </Card>

      <a href="/">Back to Home</a>
    </>
  )
}

export default CardExample
