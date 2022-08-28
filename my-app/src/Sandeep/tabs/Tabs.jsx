import { Box } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
const Tabbs = () => {
   
  return (
   <Box w={'100%'} padding={"10px"}>
     <Tabs colorScheme={'green'} >
  <TabList>
  <Link to='/homepage/billing'> <Tab >Your subscription</Tab></Link>
  <Link to='/homepage/invoice'>   <Tab>Invoice</Tab></Link>
  <Link to='/homepage/billingaddress'><Tab>Billing address</Tab></Link>
  </TabList>

</Tabs>
   </Box>
  )
}

export default Tabbs