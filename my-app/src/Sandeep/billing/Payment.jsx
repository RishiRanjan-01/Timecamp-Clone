import { Box, Button, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from "./Billing.module.css";
const Payment = () => {
  return (
    <Box className={styles.leftboxdetail}>
    <Box className={styles.leftlist}>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          Export to Exel, Google Spreadsheet, CSV
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          Billabe & Non-billable hours
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          Billing rates & labour costs
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          Budgeting & alerts
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          Invoicing
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          System privileges, roles and user groups
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          Unlimited integrations
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          Timesheet Approvals
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineClose} color="red" />
          Team productivity tracking
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
        <Text>unlimited users</Text>
      </Box>
      <Box
        marginTop={"30px"}
        display={"flex"}
        justifyContent="space-between"
      >
        <Text>Price per license:</Text>
        <Text>$0/month</Text>
      </Box>
      <Box
        marginTop={"30px"}
        display={"flex"}
        justifyContent="space-between"
      >
        <Text>Plan:</Text>
        <Text>Free</Text>
      </Box>
      <hr style={{ marginTop: "30px" }} />
      <Box
        marginTop={"30px"}
        display={"flex"}
        justifyContent="space-between"
      >
        <Text>charge:</Text>
        <Text color={"#4f4f4f"} fontSize={"20px"} fontWeight="600">
          $0 per month
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

export default Payment