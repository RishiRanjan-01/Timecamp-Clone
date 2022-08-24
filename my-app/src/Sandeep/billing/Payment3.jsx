import { Box, Button, Flex, List, ListIcon, ListItem, Radio, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import styles from "./Billing.module.css";
const Payment3 = () => {
    const [toggle,setToggle]=useState(false)
    const [count, setCount]=useState(localStorage.getItem('count') || 1)
    
   const handleCount=(e)=>{
           setCount(e.target.value)
           localStorage.setItem('count',count)
   }
  return (
    <Box className={styles.leftboxdetail}>
    <Box className={styles.leftlist}>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
         Everything in Basic 
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
            Billing rates & Labour costs
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
         Invoicing
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
           Timesheet approvals
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
          Screenshots
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
          Custom user roles 
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
          SSO
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
          2-factor authentication
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineCheck} color="green" />
           Advanced tags
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
        <Text>Number of license:</Text>
        <Flex gap={'4px'}>
            <input  
            maxlength="3" 
             min="0"
              max="999"
              required
            type={'number'}
             onChange={handleCount}
            style={{width:'100px', borderRadius:'5px',height:'40px',border:'1px solid lightgrey'}} defaultValue={count}/>
            <Text>1 in use</Text></Flex>
      </Box>
      <Box
        marginTop={"30px"}
        display={"flex"}
        justifyContent="space-between"
      >
        <Text>Price per license:</Text>
        <Text>$7/month</Text>
      </Box>
      <Box
        marginTop={"30px"}
        display={"flex"}
        justifyContent="space-between"
      >
        <Text>Plan:</Text>
        <Text>Basic</Text>
      </Box>
      <Box
        marginTop={"30px"}
        display={"flex"}
        justifyContent="space-between"
      >
        <Text>Billing cycle:</Text>
        <Box>
        <Radio  onClick={()=>setToggle("A")} colorScheme='green' value='1'>
      Annual
    </Radio>
    <Radio  onClick={()=>setToggle("B")} colorScheme='green' value='0'>
      Monthly
    </Radio>
        </Box>
      </Box>
      <hr style={{ marginTop: "30px" }} />
      <Box
        marginTop={"30px"}
        display={"flex"}
        justifyContent="space-between"
      >
        <Text>charge:</Text>
        <Text color={"#4f4f4f"} fontSize={"20px"} fontWeight="600">
          ${count<=999? count*10:0} per month
        </Text>
      </Box>
      <Button
        color="white"
        backgroundColor={"#4bb063"}
        _hover={{ backgroundColor: "lightgreen" }}
        w={"100%"}
        marginTop={"20px"}
      >
        Change plan to free
      </Button>
    </Box>
  </Box>
  )
}

export default Payment3