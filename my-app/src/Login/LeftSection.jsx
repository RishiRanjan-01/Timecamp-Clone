import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiChrome } from "react-icons/fi";
import Companies from "./Companies";
import styles from "./Login.module.css";

const LeftSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 990;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Box className={styles.leftbox}>
      <Text className={styles.leftheading}>
        TimeCamp Plugin for Google Chrome
      </Text>

      <Text className={styles.subheading}>
        Track time without leaving Chrome in 70+ online apps.
      </Text>

      <Box
        className={styles.addchromebtn}
        _hover={{ backgroundColor: "#25cf60" }}
        backgroundColor="#25cf60"
        color="white"
      >
        <FiChrome className={styles.chromelogo} />
        <Text className={styles.btntext}>Add TimeCamp for Chrome</Text>
      </Box>

      <div hidden={width > breakpoint ? false : true}>
        <Companies />
      </div>
    </Box>
  );
};

export default LeftSection;
