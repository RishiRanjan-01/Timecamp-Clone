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
    const navigate = useNavigate();

    const handlesubmit = () => {
        let usercreds = {
          "email": emailref.current.value,
          "password": passwordref.current.value,
          "phone": phoneref.current.value,
        };

        axios({
          method: "post",
          url: "http://localhost:8000/user/register",
          data: usercreds,
        }).then((res) => setFlag(res.data));
    }

    useEffect(() => {
      if (flag === "Signup Successfull") {
        navigate("/loginpage", { replace: true });
      }
    }, [flag]);

  return (
    <div style={{ paddingBottom: "20px" }}>
      <Navbar />

      <Box className={styles.signupdiv}>
        <Text fontSize="4xl" fontWeight="700" paddingTop="40px">
          Start tracking time
        </Text>

        <Text
          fontSize="2xl"
          w="70%"
          color="#8f7e77"
          fontWeight="700"
          margin="auto"
          marginTop="20px"
        >
          Create an account and start with a free 14-day trial
        </Text>
        <Text fontSize="16px" fontWeight="500" color="#767676" marginTop="15px">
          All features. No credit card required
        </Text>

        <Box
          width="75%"
          margin="auto"
          height="40px"
          border="1px solid silver"
          borderRadius="8px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="30px"
          marginTop="20px"
          cursor="pointer"
          _hover={{ backgroundColor: "gray.100" }}
        >
          <FcGoogle fontSize="30px" />
          <Text fontSize="14px" fontWeight="700" color="#8f7e77">
            Sign up with Google
          </Text>
        </Box>

        <Text marginTop="20px" fontSize="14px">
          Or
        </Text>

        <Box margin="auto" width="75%" marginTop="20px">
          <Input
            ref={emailref}
            focusBorderColor="#25cf60"
            placeholder="email"
            type="email"
          />
          <Input
            ref={passwordref}
            focusBorderColor="#25cf60"
            placeholder="password"
            type="password"
            marginTop="15px"
          />
          <Input
            ref={phoneref}
            focusBorderColor="#25cf60"
            placeholder="phone (optional)"
            type="phone"
            maxLength="10"
            marginTop="15px"
          />
        </Box>

        <Button
          marginTop="40px"
          borderRadius="25px"
          padding="25px 35px 25px 35px"
          fontSize="15px"
          color="white"
          fontWeight="700"
          backgroundColor="#25cf60"
          _hover={{ backgroundColor: "#25cf60" }}
          onClick={() => handlesubmit()}
        >
          Sign up for free
        </Button>

        <Text
          color="gray"
          fontSize="14px"
          width="65%"
          textAlign="left"
          margin="auto"
          marginTop="20px"
        >
          By signing up you agree to our{" "}
          <span style={{ color: "#25cf60" }}>Terms of Service</span> and{" "}
          <span style={{ color: "#25cf60" }}>Privacy Policy</span>
        </Text>
      </Box>
    </div>
  );
};

export default Signuppage;
