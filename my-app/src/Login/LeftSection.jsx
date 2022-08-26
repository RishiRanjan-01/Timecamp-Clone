import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiChrome } from "react-icons/fi";

const LeftSection = () => {
  return (
    <Box
      boxSizing="borderbox"
      paddingLeft="60px"
      width="51%"
    >
      <Text fontSize="5xl" w="75%" fontWeight="700" marginTop="50px">
        TimeCamp Plugin for Google Chrome
      </Text>

      <Text
        fontSize="2xl"
        marginTop="10px"
        w="60%"
        fontWeight="700"
        color="#767676"
      >
        Track time without leaving Chrome in 70+ online apps.
      </Text>

      <Button
        _hover={{ backgroundColor: "#25cf60" }}
        marginTop="15px"
        borderRadius="25px"
        padding="25px 50px 25px 50px"
        backgroundColor="#25cf60"
        color="white"
      >
        <FiChrome fontWeight="lighter" fontSize="30px" />
        <Text marginLeft="10px" fontWeight="lighter" fontSize="14px">
          Add TimeCamp for Chrome
        </Text>
      </Button>

      <Box marginTop="30px"  display="flex" alignItems="center" gap="25px">
        <Image
          w="94px"
          h="50px"
          src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661509647.png"
          alt="logo"
        />

        <Image
          w="94px"
          h="50px"
          src="https://cdn.timecamp.com/res/css/images/capterra-icon.1661509647.png"
          alt="logo"
        />

        <Image
          w="94px"
          h="50px"
          src="https://cdn.timecamp.com/res/css/images/crowd-icon.1661509647.png"
          alt="logo"
        />

        <Image
          w="94px"
          h="50px"
          src="https://cdn.timecamp.com/res/css/images/get-app-icon.1661509647.png"
          alt="logo"
        />
      </Box>
    </Box>
  );
};

export default LeftSection;
