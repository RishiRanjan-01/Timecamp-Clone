import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();
  const handlesubmit = () => {
    let usercreds = {
      email: emailref.current.value,
      password: passwordref.current.value,
    };

    axios({
      method: "post",
      url: "http://localhost:8000/user/login",
      data: usercreds,
      
    }).then((res) => localStorage.setItem("token", res.data.token));
  };

  const handlegoogleauth = () => {

  axios({
    method: "get",
    url: "http://localhost:8000/auth/google",
  }).then((res) => console.log(res.data.token));
  
  };

  const handlesignup = () => {
    navigate("/signuppage", { replace: true });
  };

  return (
    <Box className={styles.logindiv}>
      <Text fontSize="2xl" fontWeight="700" paddingTop="40px">
        Log into TimeCamp
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
        marginTop="50px"
        cursor="pointer"
        _hover={{ backgroundColor: "gray.100" }}
        onClick={() => handlegoogleauth()}
      >
        <FcGoogle fontSize="30px" />
        <Text fontSize="14px" fontWeight="700" color="#8f7e77">
          Log in with Google
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
      </Box>

      <Text color="#25cf60" marginTop="15px" fontSize="14px">
        Forgotten Password?
      </Text>

      <Button
        marginTop="20px"
        borderRadius="25px"
        padding="25px 35px 25px 35px"
        fontSize="15px"
        color="white"
        fontWeight="lighter"
        backgroundColor="#25cf60"
        _hover={{ backgroundColor: "#25cf60" }}
        onClick={() => handlesubmit()}
      >
        Log in
      </Button>

      <Text
        color="gray"
        fontSize="14px"
        width="65%"
        margin="auto"
        marginTop="20px"
        textAlign="center"
      >
        <span
          onClick={() => handlesignup()}
          style={{ color: "#25cf60", cursor: "pointer" }}
        >
          No account? Sign up
        </span>{" "}
        or
        <span style={{ color: "#25cf60" }}> Log in with SSO</span>
      </Text>
    </Box>
  );
};

export default LoginBox;
