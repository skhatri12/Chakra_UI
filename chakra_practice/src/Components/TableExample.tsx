import { Text,TableContainer,Table,Thead,Th,Tr,Td,Tbody } from "@chakra-ui/react"
const TableExample = () => {
  return (
    <>
    <Text>Table component is used to organize and display data efficiently. It renders a `table` element by default</Text>
    <TableContainer>
      <Table variant='striped' >
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th>Phone no.</Th>
          </Tr>
        </Thead>
        <Tbody>
        <Tr>
          <Td>Subash</Td>
          <Td>Kathmandu</Td>
          <Td>9860339830</Td>
        </Tr>
        <Tr>
          <Td>Ram</Td>
          <Td>Pokhara</Td>
          <Td>9861122110</Td>
        </Tr>
        <Tr>
          <Td>Shyam</Td>
          <Td>Hetauda</Td>
          <Td>9860122338</Td>
        </Tr>
        <Tr>
          <Td>Hari</Td>
          <Td>Chitwan</Td>
          <Td>9865122459</Td>
        </Tr>
        </Tbody>
      </Table>
    </TableContainer>
      
     <a href="/">Back to Home</a> 
    </>
  )
}

export default TableExample
