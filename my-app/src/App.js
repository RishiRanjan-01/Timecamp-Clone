
import HomePage from './pages/HomePage';
// import { Route, Routes } from 'react-router-dom';
// import Loginpage from './Login/Loginpage';
// import Billing from './Sandeep/billing/Billing';
// import InvoiceInformation from './Sandeep/invoice/InvoiceInformation';
// import Tabbs from './Sandeep/tabs/Tabs';
// import Signuppage from './Signup/Signuppage';


// import ShowInvoice from './Sandeep/invoice/ShowInvoice';
// import InvoiceRouter from './Sandeep/sRouter/InvoiceRouter';


import { Route, Routes } from 'react-router-dom';
import Loginpage from './Login/Loginpage';
import Billing from './Sandeep/billing/Billing';
import InvoiceInformation from './Sandeep/invoice/InvoiceInformation';
import ShowInvoice from './Sandeep/invoice/ShowInvoice';
import InvoiceRouter from './Sandeep/sRouter/InvoiceRouter';
import Tabbs from './Sandeep/tabs/Tabs';
import Signuppage from './Signup/Signuppage';
import BillingAddress from './Sandeep/billingaddress/BillingAddress';
import { Box, Flex, Grid } from '@chakra-ui/react';
import MySidebar from './components/MySidebar';
import { GrAid } from 'react-icons/gr';
import PaymentCard from './Sandeep/payment/PaymentCard';
import Forgotpassword from './Login/Forgotpassword';
import Password from './Login/Password';



function App() {
  return (
    <>

    {/* Needed */}

      {/* <InvoiceInformation/>
     <InvoiceRouter/> */}
     <HomePage/>
      {/* <Routes>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signuppage" element={<Signuppage />}></Route>
        <Route path="/loginpage" element={<Loginpage />}></Route>
        <Route path="/forgotten_password" element={<Forgotpassword />}></Route>
        <Route path="/password" element={<Password />}></Route>
      </Routes>

      {/* Needed */}

      {/* <Tabbs/>
     <Billing/>  */}
    </>
  );
}

export default App;
