import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiArrowToLeft } from 'react-icons/bi'
import { BsArrowBarLeft, BsArrowLeftShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import CountryDropDown from '../invoice/CountryDropDown'

const BillingAddress = () => {

    const [voice, setVoice] =useState({
        name:'',
        invoice:'',
        address:'',
        city:'',
        postal:'',
        country:'',
})
    const handleForm=(e)=>{
        let value=e.target.value
        let name=e.target.name
            setVoice({
                ...voice,
                [name]:value
            })
           
      }
  return (
    <Box w={"50%"} padding={'40px'}>
          <form w={"100%"}>
           
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
            
            <Box  gap={"70px"} display={"flex"} m="10px 0px">
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
            </Box>
            <Box m="10px 0px">
              <label>Country</label>
              <CountryDropDown />
            </Box>
            <Flex gap={'7px'}>
              <Button _hover={{background:"lightgreen"}} color={'white'} background="#4bb063">Update billing address</Button>
              <Button _hover={{background:"lightgrey"}} border={'1px solid grey'} background="white">Cancel</Button>
            </Flex>

            
           </form>
           </Box>     
  )
}

export default BillingAddress