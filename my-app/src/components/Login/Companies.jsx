import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import styles from "./Login.module.css"

const Companies = () => {
  return (
    <Box className={styles.companies}>
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
  );
}

export default Companies