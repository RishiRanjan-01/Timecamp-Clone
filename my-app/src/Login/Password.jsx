import { Box, Button, Divider, Image, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Password = () => {
  const passref = useRef();

  const [flag, setFlag] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const handlesubmit = () => {
    let creds = {
      email: location.state.email,
      password:passref.current.value
    };

    axios({
      method: "post",
      url: "http://localhost:8000/user/updateuser",
      data:creds
    }).then((res) => setFlag(res.data));
  };

  useEffect(() => {
    if (flag === "Password Updated Successfully") {
      navigate("/loginpage");
    }
  }, [flag]);

  return (
    <Box>
      <Image
        w="140px"
        h="40px"
        marginLeft="30%"
        marginTop="80px"
        src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661423136.svg"
        alt="logo"
      />

      <Box
        width="40%"
        border="1px solid gray"
        borderRadius="10px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        marginTop="10px"
        marginLeft="30%"
        paddingLeft="2%"
        paddingBottom="20px"
      >
        <Text fontWeight="700" fontSize="18px" marginTop="30px">
          Forgotten Password?
        </Text>

        <Divider width="96%" marginTop="20px" />
        <Box
          hidden={flag === "Invalid Credentials" ? false : true}
          backgroundColor="#f2dede"
          border="1px solid #f2dede"
          color="brown"
          marginTop="15px"
          borderRadius="10px"
          width="95%"
          height="70px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="14px"
        >
          <Text width="95%" textAlign="justify">
            Invalid Credentials. Password must have greater than 8 characters,
            contain special character and a number.
          </Text>
        </Box>

        <Box display="flex" alignItems="center" marginTop="25px" gap="7%">
          <Text>New Password</Text>
          <Input
            ref={passref}
            focusBorderColor="#25cf60"
            width="60%"
            color="black"
            backgroundColor="#f8f8f8"
            fontSize="14px"
            height="35px"
            placeholder="password@123"
            type="password"
          />
        </Box>

        <Button
          fontSize="14px"
          marginLeft="33%"
          marginTop="15px"
          color="white"
          bg="#4bb063"
          padding="5px 35px 5px 35px"
          onClick={() => handlesubmit()}
        >
          Submit
        </Button>

        <Divider width="96%" marginTop="40px" />

        <Link to="/loginpage">
          <Text fontWeight="500" fontSize="14px" color="blue" marginTop="20px">
            Return to Login
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Password;
