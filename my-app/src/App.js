
import { Route, Routes } from 'react-router-dom';
import Loginpage from './Login/Loginpage';
import Billing from './Sandeep/billing/Billing';
import Tabbs from './Sandeep/tabs/Tabs';
import Signuppage from './Signup/Signuppage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signuppage" element={<Signuppage />}></Route>
      </Routes>
      <Routes>
        <Route path="/loginpage" element={<Loginpage />}></Route>
      </Routes>
      <Tabbs/>
     <Billing/>
    </div>
  );
}

export default App;
