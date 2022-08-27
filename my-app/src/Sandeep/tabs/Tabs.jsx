import { Box } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
const Tabbs = () => {
   
  return (
   <Box w={'100%'} padding={"10px"}>
     <Tabs colorScheme={'green'} >
  <TabList>
  <NavLink to='/billing'> <Tab >Your subscription</Tab></NavLink>
  <NavLink to='/invoice'>   <Tab>Invoice</Tab></NavLink>
  <NavLink to='/billingaddress'>   <Tab>Billing address</Tab></NavLink>
  </TabList>

</Tabs>
   </Box>
  )
}

export default Tabbs