import { Box } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Tabbs = () => {
  return (
   <Box>
     <Tabs colorScheme={'green'} >
  <TabList>
    <Tab >Your subscription</Tab>
    <Tab>Invoice</Tab>
    <Tab>Billing address</Tab>
  </TabList>

</Tabs>
   </Box>
  )
}

export default Tabbs