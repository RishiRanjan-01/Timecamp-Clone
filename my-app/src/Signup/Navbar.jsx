import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handlelogin = () => {
        navigate("/loginpage", {replace:true})
    }

  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      w="100%"
      h="80px"
      p={4}
      color="white"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="95%"
        margin="auto"
      >
        <Image
          w="140px"
          h="40px"
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
      </Box>
    </Box>
  );
}

export default Navbar