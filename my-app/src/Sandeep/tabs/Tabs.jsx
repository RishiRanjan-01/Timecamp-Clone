import { Box } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
const Tabbs = () => {
   
  return (
   <Box>
     <Tabs colorScheme={'green'} >
  <TabList>
  <NavLink to='/billing'> <Tab >Your subscription</Tab></NavLink>
  <NavLink to='/invoice'>   <Tab>Invoice</Tab></NavLink>
    <Tab>Billing address</Tab>
  </TabList>

</Tabs>
   </Box>
  )
}

export default Tabbs