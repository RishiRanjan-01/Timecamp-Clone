import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Billing from '../billing/Billing'
import InvoiceInformation from '../invoice/InvoiceInformation'
import ShowInvoice from '../invoice/ShowInvoice'
import Tabbs from '../tabs/Tabs'

const InvoiceRouter = () => {
  return (
      <Box>
        <Tabbs/>
         <Routes>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/invoice' element={<ShowInvoice/>}/>
        <Route path='/' element={<InvoiceInformation/>}/>
       </Routes>
      </Box>
  )
}

export default InvoiceRouter