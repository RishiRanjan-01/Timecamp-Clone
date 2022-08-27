
import HomePage from './pages/HomePage';
// import { Route, Routes } from 'react-router-dom';
// import Loginpage from './Login/Loginpage';
// import Billing from './Sandeep/billing/Billing';
// import InvoiceInformation from './Sandeep/invoice/InvoiceInformation';
// import Tabbs from './Sandeep/tabs/Tabs';
// import Signuppage from './Signup/Signuppage';
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


function App() {
  return (
    <div className="App">

      {/* <InvoiceInformation/> */}
   
      {/*<Tabbs/>*/}
      {/* <Tabbs/>
     <Billing/> */}
     {/* <HomePage/> */}

      <InvoiceInformation/>
     
     <HomePage/>
      <Routes>

        <Route path="/signuppage" element={<Signuppage />}></Route>
      </Routes>
      <Routes>
        <Route path="/loginpage" element={<Loginpage />}></Route>

      </Routes> */}
      
      <InvoiceRouter/>
        
        {/* <MySidebar/> */ }
        {/* <PaymentCard/> */}
        
        {/* <BillingAddress/> */}
     
    </div>

      </Routes>
      <Tabbs/>
     <Billing/>
    </>

  );
}

export default App;
