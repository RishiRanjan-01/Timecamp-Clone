import React from "react";
import {
  Box,
 
  Center,
  
  Text,
} from "@chakra-ui/react";
import styles from "./Billing.module.css";

import { useState } from "react";
import Payment from "./Payment";
import Payment4 from "./Payment4";
import Payment3 from "./Payment3";
import Payment2 from "./Payment2";

const Billing = () => {
   const [toggle,setToggle]=useState('')
    

  return (
    <Box>
      <Box>
        <Center
          border={"1px solid  lightgrey"}
          borderRadius="5px"
          height={"40px"}
          marginTop="20px"
          w={'800px'}
        >
          <Text>You have 13 days left on your pro trial</Text>
        </Center>
        <section>
          <Box  width="820px" display={"flex"} marginTop="20px">
            <Box name="sandeep" onClick={()=>setToggle("A")} className={styles.billcardleft}>
              <Center>
                <Text fontWeight={"500"} color="green">
                  FREE
                </Text>
              </Center>
              <Center>
                <Text fontSize="30px" fontWeight="500">
                  $0
                </Text>
              </Center>
              <Center>
                <Text textAlign={"center"} color="grey">
                  free for <br /> unlimited <br /> number of <br /> users
                </Text>
              </Center>
            </Box>
            <Box onClick={()=>setToggle("B")} className={styles.billcardmiddle}>
              <Center>
                <Text fontWeight={"500"} color="green">
                  BASIC
                </Text>
              </Center>
              <Center>
                <Text fontSize="30px" fontWeight="500">
                  $6.3
                </Text>
              </Center>
              <Center>
                <Text textAlign={"center"} color="grey">
                  per <br />
                  license/billed <br />
                  annually,$7
                  <br /> monthly
                </Text>
              </Center>
            </Box>
            <Box onClick={()=>setToggle("C")} className={styles.billcardmiddle}>
              <Center>
                <Text fontWeight={"500"} color="green">
                  PRO
                </Text>
              </Center>
              <Center>
                <Text fontSize="30px" fontWeight="500">
                  $9
                </Text>
              </Center>
              <Center>
                <Text textAlign={"center"} color="grey">
                  per
                  <br /> license/billed <br />
                  annually,10$
                  <br /> monthly
                </Text>
              </Center>
            </Box>
            <Box onClick={()=>setToggle("D") } className={styles.billcardright}>
              <Center>
                <Text fontWeight={"500"} color="green">
                  ENTERPRISE
                </Text>
              </Center>
              <Center>
                <Text fontSize="30px" fontWeight="500">
                  CUSTOM
                </Text>
              </Center>
              <Center>
                <Text textAlign={"center"} color="grey">
                  contact our
                  <br /> sales team <br />
                  for the best
                  <br /> offer
                </Text>
              </Center>
            </Box>
          </Box>
          { toggle==='A'?<Payment/>:''}
          { toggle==='B'?<Payment2/>:''}
          { toggle==='C'?<Payment3/>:''}
          { toggle==='D'?<Payment4/>:''}
          
        </section>
      </Box>
    </Box>
  );
};

export default Billing;
