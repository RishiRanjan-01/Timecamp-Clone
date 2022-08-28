import { Tag } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import AddProject from './AddProject';
import Addtask from './Addtask';
import Dashboard from './Dashboard';
import Project from './Project';
import Tags from './Tags';
import TimeSheet from './TimeSheet';
import User from './User';
import { InvoiceRouter } from "../Sandeep/sRouter/InvoiceRouter"


const CompRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<TimeSheet/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/projects/*" element={<Project/>}>
        {/* <Route path="/projects/:id" element={<AddProject/>}></Route> */}
        </Route>   
        <Route path="/tags" element={<Tags/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/addtask" element={<Addtask/>} />
        <Route path="/addproject" element={<AddProject/>} />
        <Route path="/subscription" element={<InvoiceRouter/>}/>
    </Routes>
  )
}

export default CompRoutes