import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="80px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Image
        w="140px"
        h="40px"
        marginLeft="5%"
        src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661423136.svg"
        alt="logo"
      />
    </Box>
  );
}

export default Navbar