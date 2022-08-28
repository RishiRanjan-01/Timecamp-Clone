import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginBox = () => {
  const emailref = useRef();
  const passwordref = useRef();
  const navigate = useNavigate();

  const [flag, setFlag] = useState("Login Successfull");

  const [routeflag, setRouteflag] = useState(false);

  const handlesubmit = () => {
    let usercreds = {
      email: emailref.current.value,
      password: passwordref.current.value,
    };

    axios({
      method: "post",
      url: "https://pure-fjord-44762.herokuapp.com/user/login",
      data: usercreds,
      
    }).then((res) => (localStorage.setItem("token", res.data.token),setFlag(res.data.message),setRouteflag(res.data.message)));
  };

  const handlegoogleauth = () => {
    localStorage.setItem("google", true);
     window.open("https://pure-fjord-44762.herokuapp.com/auth/google");
  };

  const handlesignup = () => {
    navigate("/signuppage", { replace: true });
  };

  useEffect(() => {
    if (routeflag === "Login Successfull") {
      navigate("/homepage/timesheet", { replace: true });
    }
  }, [routeflag]);

  return (
    <Box className={styles.logindiv}>
      <Text className={styles.loginheading}>Log in to TimeCamp</Text>

      <Box
        className={styles.googlebtn}
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

      <Box
        hidden={flag === "Login Successfull" ? true : false}
        backgroundColor="#f2dede"
        border="1px solid #f2dede"
        color="brown"
        margin="auto"
        marginTop="15px"
        borderRadius="10px"
        width="75%"
        height="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="14px"
      >
        <Text>Wrong e-mail or password.</Text>
      </Box>

      <Link to="/forgotten_password">
        <Text color="#25cf60" marginTop="15px" fontSize="14px" cursor="pointer">
          Forgotten Password?
        </Text>
      </Link>

      <Box
        className={styles.loginbtn}
        backgroundColor="#25cf60"
        cursor="pointer"
        _hover={{ backgroundColor: "#25cf60" }}
        onClick={() => handlesubmit()}
      >
        Log in
      </Box>

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
        <span style={{ color: "#25cf60", cursor: "pointer" }}>
          {" "}
          Log in with SSO
        </span>
      </Text>
    </Box>
  );
};

export default LoginBox;
