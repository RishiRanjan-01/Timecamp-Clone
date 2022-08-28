import { Box, Button, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import Navbar from './Navbar';
import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import LoginBox from './LoginBox';
import LeftSection from './LeftSection';
import Companies from './Companies';
import { useEffect } from 'react';

const Loginpage = () => {
const [width, setWidth] = useState(window.innerWidth);
const breakpoint = 990;

useEffect(() => {
  window.addEventListener("resize", () => setWidth(window.innerWidth));
 
}, []);
  return (
    <div className={styles.maindiv} >
      
      <Navbar />

      <div className={styles.parentdiv}>
        <LeftSection />
        <LoginBox />
      </div>

      <div hidden={width < breakpoint ? false : true} >
        <Companies/>
        </div>  

    </div>
  );
}

export default Loginpage