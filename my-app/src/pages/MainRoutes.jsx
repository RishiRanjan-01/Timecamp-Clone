import React from 'react';
import {Routes, Route} from "react-router-dom";
import Landing from "../components/landing/Landing";
import  Signuppage  from "../components/Signup/Signuppage";
import  Loginpage  from "../components/Login/Loginpage";
import Forgotpassword from "../components/Login/Forgotpassword";
import Password from "../components/Login/Password";
import HomePage from "../pages/HomePage"
import ProtectedRoute from '../components/ProtectedRoute';
import TimeSheet from './TimeSheet';
import Dashboard from './Dashboard';
import Project from './Project';
import Tags from './Tags';
import User from './User';
import Addtask from './Addtask';
import AddProject from './AddProject';
import Billing from '../Sandeep/billing/Billing';
import ShowInvoice from '../Sandeep/invoice/ShowInvoice';
import InvoiceInformation from '../Sandeep/invoice/InvoiceInformation';
import BillingAddress from '../Sandeep/billingaddress/BillingAddress';
import PaymentCard from '../Sandeep/payment/PaymentCard';
import Tabbs from '../Sandeep/tabs/Tabs';


const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Landing/>}/>
        <Route path="/signuppage" element={<Signuppage />}></Route>
        <Route path="/loginpage" element={<Loginpage />}></Route>
        <Route path="/forgotten_password" element={<Forgotpassword />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/homepage/*" element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        }>
        <Route path="timesheet" element={<TimeSheet/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="projects" element={<Project/>}></Route>   
        <Route path="tags" element={<Tags/>} />
        <Route path="user" element={<User/>} />
        <Route path="addtask" element={<Addtask/>} />
        <Route path="addproject" element={<AddProject/>} />

        {/* sandeep */}
        <Route path='billing' element={<Billing/>}/>
        <Route path='invoice' element={<ShowInvoice/>}/>
        <Route path='subscription' element={<InvoiceInformation/>}/>
        <Route path="billingaddress" element={<BillingAddress/>}/>
        <Route path='payment' element={<PaymentCard/>}/>
        <Route path='tab' element={<Tabbs/>}>
          
        </Route>

        </Route>
        
      </Routes>
    </>
  )
}

export default MainRoutes