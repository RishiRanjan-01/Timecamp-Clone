import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiOutlineCheck} from "react-icons/ai";
import styles from "./Billing.module.css";
const Payment2 = () => {
    //toggling year and month
  const [toggle, setToggle] = useState(false);

  //  giving count to input to change price
  let [count, setCount] = useState(localStorage.getItem("count") || 1);
 

  //    input count function
  const handleCount = (e) => {
    setCount(e.target.value);
    localStorage.setItem("count", count);
  };

  // here initializing count to 1 before switching from month to year or vice versa
  const handleRadio = () => {
    count = 1;
    setToggle(true)
  };
  const handleRadio2 = () => {
    count = 1;
    setToggle(false)
  };
  return (
    <Box className={styles.leftboxdetail}>
      <Box className={styles.leftlist}>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={AiOutlineCheck} color="green" />
            Everything in Free
          </ListItem>
          <ListItem>
            <ListIcon as={AiOutlineCheck} color="green" />
            Export to Excel, Google Spreadsheet, CSV
          </ListItem>
          <ListItem>
            <ListIcon as={AiOutlineCheck} color="green" />
            Unlimited integrations
          </ListItem>
          <ListItem>
            <ListIcon as={AiOutlineCheck} color="green" />
            Management roles
          </ListItem>
          <ListItem>
            <ListIcon as={AiOutlineCheck} color="green" />
            Budgeting & alert
          </ListItem>
        </List>
      </Box>
      <Box className={styles.purchaseopt}>
        <Box>
          <Text color={"#4f4f4f"} fontSize={"20px"} fontWeight="600">
            Purchase options
          </Text>
        </Box>

        <Box marginTop={"30px"} display={"flex"} justifyContent="space-between">
          <Text>Number of license:</Text>

          <Flex gap={"4px"}>
            {/* input box is here */}
            <Input
             focusBorderColor="lightgreen"
              maxLength="3"
              min="0"
              max="999"
              required
              type={"number"}
              onChange={handleCount}
              defaultValue={count}
              style={{
                width: "100px",
                borderRadius: "5px",
                height: "40px",
                border: "1px solid lightgrey",
              }}
            />
            <Text>1 in use</Text>
          </Flex>
        </Box>
        <Box marginTop={"30px"} display={"flex"} justifyContent="space-between">
          <Text>Price per license:</Text>
          {toggle === false ? <Text>$7/month</Text> : <Text>$75.6/year</Text>}
        </Box>
        <Box marginTop={"30px"} display={"flex"} justifyContent="space-between">
          <Text>Plan:</Text>
          <Text>Basic</Text>
        </Box>
        <Box marginTop={"30px"} display={"flex"} justifyContent="space-between">
          <Text>Billing cycle:</Text>
          <Box>
            <RadioGroup defaultValue={1}>
              <Radio
                onChange={handleRadio}
                m={"0px 10px 0px 0px"}
                onClick={() => setToggle(true)}
                colorScheme="green"
                value="1"
              >
                Annual
              </Radio>
              <Radio
                onChange={handleRadio2}
                
                colorScheme="green"
                value="2"
              >
                Monthly
              </Radio>
            </RadioGroup>
          </Box>
        </Box>
        <hr style={{ marginTop: "30px" }} />
        <Box marginTop={"30px"} display={"flex"} justifyContent="space-between">
          <Text>charge:</Text>
          {toggle === false ? (
            <Text color={"#4f4f4f"} fontSize={"20px"} fontWeight="600">
              ${count * 7} per month
            </Text>
          ) : (
            <Text color={"#4f4f4f"} fontSize={"20px"} fontWeight="600">
              ${(count * 75.6).toFixed(1)} per Year
            </Text>
          )}
        </Box>
        <Button
          color="white"
          backgroundColor={"#4bb063"}
          _hover={{ backgroundColor: "lightgreen" }}
          w={"100%"}
          marginTop={"20px"}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Payment2;
