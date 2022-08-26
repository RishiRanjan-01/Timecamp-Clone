import { Box, Button, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useRef } from 'react'
import Navbar from './Navbar';
import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import LoginBox from './LoginBox';
import LeftSection from './LeftSection';

const Loginpage = () => {
    
  return (
    <div>
      <Navbar />

      <div className={styles.parentdiv} >
        <LeftSection/>
        <LoginBox/>
      </div>

      
    </div>
  );
}

export default Loginpage