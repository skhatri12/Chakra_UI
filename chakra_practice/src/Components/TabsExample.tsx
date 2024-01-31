import { Text,Tabs,TabList,Tab,TabPanels,TabPanel } from "@chakra-ui/react"
const TabsExample = () => {
  return (
    <>
      <Text>Tabs</Text>
      <Tabs variant='enclosed' isFitted >
        <TabList>
          <Tab>Home</Tab>
          <Tab>About Us</Tab>
          <Tab>Works</Tab>
        </TabList>
        <TabPanels>
          <TabPanel><p>This is home</p></TabPanel>
          <TabPanel> <p>This is about us</p> </TabPanel>
          <TabPanel> <p>This is Works</p> </TabPanel>
        </TabPanels>
      </Tabs>
      <a href="/">Back To Home</a>
    </>
  )
}

export default TabsExample
