import { Editable, EditableInput, EditablePreview, EditableTextarea } from "@chakra-ui/react"

const EditableEg = () => {
  return (
    <>   
    <Editable defaultValue=" You can edit this to write some text">
        <EditablePreview/>
        <EditableInput/>
    </Editable>


    <Editable defaultValue="Text over here">
      <EditablePreview/>
      <EditableTextarea/>
    </Editable>

      <a href="/">Back to home</a>
      </>
 
  )
}

export default EditableEg
