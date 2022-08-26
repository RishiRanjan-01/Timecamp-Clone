
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Login/Loginpage';
import Billing from './Sandeep/billing/Billing';
import InvoiceInformation from './Sandeep/invoice/InvoiceInformation';
import Tabbs from './Sandeep/tabs/Tabs';
import Signuppage from './Signup/Signuppage';

function App() {
  return (
    <div className="App">
      {/*<Tabbs/>*/}
      {/* <Tabbs/>
     <Billing/> */}
     <HomePage/>
      <Routes>
        <Route path="/signuppage" element={<Signuppage />}></Route>
      </Routes>
      <Routes>
        <Route path="/loginpage" element={<Loginpage />}></Route>
      </Routes>
      <Tabbs/>
     <Billing/>
     <InvoiceInformation/>
    </div>
  );
}

export default App;
