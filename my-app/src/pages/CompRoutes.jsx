import { Tag } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import Dashboard from './Dashboard';
import Project from './Project';
import Tags from './Tags';
import TimeSheet from './TimeSheet';
import User from './User';


const CompRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<TimeSheet/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/tags" element={<Tags/>} />
        <Route path="/user" element={<User/>} />
    </Routes>
  )
}

export default CompRoutes