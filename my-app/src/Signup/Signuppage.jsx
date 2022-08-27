import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FcGoogle } from "react-icons/fc";
import styles from "./signup.module.css";
import { useRef } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signuppage = () => {

    const emailref = useRef();
    const passwordref = useRef();
    const phoneref = useRef();
    const [flag, setFlag] = useState("");
    const [signupflag, setSignupflag] = useState(true);
    

    const navigate = useNavigate();

    const handlesubmit = () => {
        let usercreds = {
          "email": emailref.current.value,
          "password": passwordref.current.value,
          "phone": phoneref.current.value,
        };

        let result;

        axios({
          method: "post",
          url: "http://localhost:8000/user/register",
          data: usercreds,
        }).then((res) => (setFlag(res.data),result=res.data));

        if (result !== "Signup Successfull") {
          setSignupflag(false);
        }
    }

    useEffect(() => {
      if (flag === "Signup Successfull") {
        navigate("/", { replace: true });
      }
    }, [flag]);

     const handlegoogleauth = () => {
      localStorage.setItem("google",true);
       window.open("http://localhost:8000/auth/google");
     };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <Navbar />

      <Box className={styles.signupdiv}>
        <Text className={styles.heading}>Start tracking time</Text>

        <Text className={styles.subheading}>
          Create an account and start with a free 14-day trial
        </Text>
        <Text className={styles.subsubheading}>
          All features. No credit card required
        </Text>

        <Box
          className={styles.googlebtn}
          _hover={{ backgroundColor: "gray.100" }}
          onClick={() => handlegoogleauth()}
        >
          <FcGoogle className={styles.googlelogo} />
          <Text className={styles.googletext} color="#8f7e77">
            Sign up with Google
          </Text>
        </Box>

        <Text marginTop="20px" fontSize="14px">
          Or
        </Text>

        <Box
          hidden={signupflag === true ? true : false}
          backgroundColor="#f2dede"
          border="1px solid #f2dede"
          color="brown"
          margin="auto"
          marginTop="15px"
          borderRadius="10px"
          width="75%"
          height="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="14px"
        >
          <Text width="90%" textAlign="justify" >
            {flag === "User Already Exists"
              ? "This e-mail is already in use."
              : "Invalid Credentials. Password must have greater than 8 characters, contain special character and a number."}
          </Text>
        </Box>

        <Box className={styles.inputdiv}>
          <Input
            ref={emailref}
            focusBorderColor="#25cf60"
            placeholder="Email"
            type="email"
            fontWeight="lighter"
            fontSize="14px"
          />
          <Input
            ref={passwordref}
            focusBorderColor="#25cf60"
            placeholder="Password"
            type="password"
            marginTop="15px"
            fontWeight="lighter"
            fontSize="14px"
          />
          <Input
            ref={phoneref}
            focusBorderColor="#25cf60"
            placeholder="Phone (optional)"
            type="phone"
            maxLength="10"
            marginTop="15px"
            fontWeight="lighter"
            fontSize="14px"
          />
        </Box>

        <Button
          backgroundColor="#25cf60"
          marginTop="40px"
          padding="25px 35px 25px 35px"
          borderRadius="25px"
          fontSize="15px"
          color="white"
          fontWeight="700"
          _hover={{ backgroundColor: "#25cf60" }}
          onClick={() => handlesubmit()}
        >
          Sign up for free
        </Button>

        <Text className={styles.note}>
          By signing up you agree to our{" "}
          <a href="https://www.timecamp.com/terms-conditions/">
            <span style={{ color: "#25cf60" }}>Terms of Service</span>{" "}
          </a>{" "}
          and{" "}
          <a href="https://www.timecamp.com/privacy-policy/">
            <span style={{ color: "#25cf60" }}>Privacy Policy</span>
          </a>
        </Text>
      </Box>
    </div>
  );
};

export default Signuppage;
