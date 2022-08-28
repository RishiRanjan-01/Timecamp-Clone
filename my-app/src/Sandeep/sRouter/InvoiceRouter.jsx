import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Billing from '../billing/Billing'
import BillingAddress from '../billingaddress/BillingAddress'
import InvoiceInformation from '../invoice/InvoiceInformation'
import ShowInvoice from '../invoice/ShowInvoice'
import PaymentCard from '../payment/PaymentCard'
import Tabbs from '../tabs/Tabs'

const InvoiceRouter = () => {
  return (
      <Box>
        {/* <Tabbs/> */}
         <Routes>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='/invoice' element={<ShowInvoice/>}/>
        <Route path='/subscription' element={<InvoiceInformation/>}/>
        <Route path="/billingaddress" element={<BillingAddress/>}/>
        <Route path='/payment' element={<PaymentCard/>}/>
       </Routes>
      </Box>
  )
}

export default InvoiceRouter