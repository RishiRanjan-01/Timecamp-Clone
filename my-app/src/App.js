
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


function App() {
  return (
    <div className="App">
      {/* <InvoiceInformation/>
     <InvoiceRouter/>*/}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signuppage" element={<Signuppage />}></Route>
        <Route path="/loginpage" element={<Loginpage />}></Route>
      </Routes>
      {/*<Tabbs />
      <Billing />*/}
    </div>
  );
}

export default App;
