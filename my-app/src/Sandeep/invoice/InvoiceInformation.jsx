import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import CountryDropDown from "./CountryDropDown";
import styles from "./InvoiceInformation.module.css";

const InvoiceInformation = () => {
  const [toggle, setToggle] = useState(false);

  //  giving count to input to change price
  let [count, setCount] = useState(localStorage.getItem("count") || 1);
   console.log(count)
  //    form input data
  const [voice, setVoice] =useState({
          name:'',
          invoice:'',
          address:'',
          city:'',
          postal:'',
          country:'',
  })

  const handlePost=()=>{
       axios('http://localhost:8080/invoice/post',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        data:voice,
       })
       .then((res)=>res.data)
       .catch((error)=>console.log(error))
  }
  
  const handleForm=(e)=>{
    let value=e.target.value
    let name=e.target.name
        setVoice({
            ...voice,
            [name]:value
        })
       
  }
  console.log(voice)


  // here initializing count to 1 before switching from month to year or vice versa
  const handleRadio = () => {
    count = 1;
    setToggle(true);
  };
  const handleRadio2 = () => {
    count = 1;
    setToggle(false);
  };
  return (
    
    <Box  className={styles.invoiceform} >
       
      <Box  margin={'-5px 0px 0px 0px'}
       padding={"60px"} >
        <Box >
          <form w={"100%"}>
            <Box>
              <a href="">Back to Your subscription</a>
            </Box>
            <Box m="20px 0px 0px 0px">
              <Text fontSize={"20px"} fontWeight="500">
                Invoice information
              </Text>
              <label>Company name / your name</label>
              <Input
              name="name"
              value={voice.name}
              onChange={handleForm}
              required
              isInvalid
              errorBorderColor="red"
              focusBorderColor='lightgreen'
               border={"none"} backgroundColor={"#f8f8f8"} type="text" />
            </Box>
            <Box m="10px 0px">
              <label>Send invoice to (optional)</label>
              <Input
              name="invoice"
               value={voice.invoice}
               onChange={handleForm}
              isInvalid
              errorBorderColor="red"
              focusBorderColor='lightgreen'
               border={"none"} backgroundColor={"#f8f8f8"} type="text" />
            </Box>
            <Box m="20px 0px 0px 0px">
              <Text fontSize={"20px"} fontWeight="500">
                Billing address
              </Text>
              <label htmlFor="">Address</label>
              <Input 
              name="address"
               value={voice.address}
               onChange={handleForm}
              isInvalid
              required
              errorBorderColor="red"
              focusBorderColor='lightgreen'
              border={"none"} backgroundColor={"#f8f8f8"} type="text" />
            </Box>
            <Box m="10px 0px">
              <label>City</label>
              <Input
              name="city"
               value={voice.city}
               onChange={handleForm}
              isInvalid
              required
              errorBorderColor="red"
              focusBorderColor='lightgreen'
               border={"none"} backgroundColor={"#f8f8f8"} type="text" />
            </Box>
            <Box m="10px 0px">
              <label>Zip / Postal</label>
              <Input 
              name="postal"
               value={voice.postal}
               onChange={handleForm}
              required
              border={"none"}
              isInvalid
              errorBorderColor="red"
              focusBorderColor='lightgreen'
               backgroundColor={"#f8f8f8"} type="number" />
            </Box>
            <Box m="10px 0px">
              <label>Country</label>
              <CountryDropDown />
            </Box>
            <Box>
              <Text m="40px 0px 0px 0px" fontSize={"20px"} fontWeight="500">
                Payment method
              </Text>
              <RadioGroup defaultValue="1">
                <Stack>
                  <Flex>
                    <Radio value="2">Credit Card</Radio>
                    <Image
                      w={"170px"}
                      src="https://cdn.timecamp.com/res/css/dashboard/visa-mc.png"
                      alt=""
                    />
                  </Flex>
                  <Radio value="3">
                    <Image
                      w={"70px"}
                      src="https://cdn.timecamp.com/res/css/dashboard/paypal_logo.png"
                      alt=""
                    />
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <Box m="30px 0px 0px 0px">
              <Text color={"grey"}>
                Your payment data is encrypted and secure. All amounts shown are
                in US dollars. By upgrading your account, you agree to the Terms
                & Conditions. You will be charged this amount monthly or yearly
                (plus VAT if you are from EU) until you cancel your
                subscription. We will temporarily charge your card $1.00 to
                verify the new card details and then return the reserved amount.
              </Text>
            </Box>
            <Box m="20px 0px 0px 0px">
              <Text color={"grey"}>
                If you are interested in non-profit or educational discount,
                please contact us at
              </Text>
              <a color="grey" href="">
               <u color="grey"> support@timecamp.com.</u>
              </a>
            </Box>
          </form>
        </Box>
      </Box>
      
      <Box>
        <Box className={styles.finalpayment}>
          <Box>
            <Text color={"#4f4f4f"} fontSize={"20px"} fontWeight="600">
              Summary
            </Text>
          </Box>

          <Box
            marginTop={"30px"}
            display={"flex"}
            justifyContent="space-between"
          >
            <Text>Plan:</Text>
            <Text>{localStorage.getItem('pro')}</Text>
          </Box>
          <Box
            marginTop={"30px"}
            display={"flex"}
            justifyContent="space-between"
          >
            <Text>Price per license:</Text>
            {toggle === false ? <Text>$7/month</Text> : <Text>$75.6/year</Text>}
          </Box>
          <Box
            marginTop={"30px"}
            display={"flex"}
            justifyContent="space-between"
          >
            <Text>Number of license:</Text>

            <Flex gap={"4px"}>
              <Text>1 in use</Text>
            </Flex>
          </Box>
          <Box
            marginTop={"30px"}
            display={"flex"}
            justifyContent="space-between"
          >
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
                <Radio onChange={handleRadio2} colorScheme="green" value="2">
                  Monthly
                </Radio>
              </RadioGroup>
            </Box>
          </Box>
          <hr style={{ marginTop: "30px",height:'10px' }} />
          <Box
            marginTop={"30px"}
            display={"flex"}
            justifyContent="space-between"
          >
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
          onClick={handlePost}
            color="white"
            backgroundColor={"#4bb063"}
            _hover={{ backgroundColor: "lightgreen" }}
            w={"100%"}
            marginTop={"20px"}
          >
            Subscribe now
          </Button>
          <Box margin={"10px 0px"}>
            <Text noOfLines={[1, 2, 3]} color={"grey"}>
              We will temporarily charge your card $1.00 to verify the new card
              details and then return the reserved amount.
            </Text>
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
};

export default InvoiceInformation;
