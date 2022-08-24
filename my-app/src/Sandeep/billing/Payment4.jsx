import { Box, Button, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import styles from "./Billing.module.css";
const Payment4 = () => {
  return (
    <Box className={styles.leftboxdetail}>
    <Box className={styles.leftlist}>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
         Everything in Pro
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
             Private cloud implementation
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
         self hosted server
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
           Dedicated account manager
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
          Customizable solution
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
          Custom contract
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
          SLA
        </ListItem>
       
      </List>
    </Box>
    <Box className={styles.purchaseopt}>
      <Box>
        <Text color={"#4f4f4f"} fontSize={"20px"} fontWeight="600">
          Purchase options
        </Text>
      </Box>
      <Box
        marginTop={"30px"}
        display={"flex"}
        justifyContent="space-between"
      >
        
        <Text color={"#4f4f4f"}  fontWeight="400">
        Talk to our Sales to tailor the plan to your business needs.
         The perfect solution can skyrocket your performance so don't be afraid to ask, we're here to help!
        </Text>
      </Box>
      <Button
        color="white"
        backgroundColor={"#4bb063"}
        _hover={{ backgroundColor: "lightgreen" }}
        w={"100%"}
        marginTop={"20px"}
      >
      Book a call
      </Button>
    </Box>
  </Box>
  )
}

export default Payment4