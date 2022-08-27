import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handlelogin = () => {
        navigate("/loginpage", {replace:true})
    }

  return (
    <Box
      className={styles.navbardiv}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      h="80px"
      p={4}
      color="white"
    >
      <div className={styles.navbarcontent}>
        <Image
          className={styles.navbarlogo}
          src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661423136.svg"
          alt="logo"
        />
        <Text
          _hover={{ color: "#25cf60" }}
          color="black"
          fontSize="16px"
          fontWeight="700"
          cursor="pointer"
          onClick={() => handlelogin()}
        >
          Log in
        </Text>
      </div>
    </Box>
  );
}

export default Navbar