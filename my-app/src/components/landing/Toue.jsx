import React from 'react'
import toue from "../landing/images/toue.png"
import {
  Box,
 Flex,
 Heading,
  Text,
  Link,
  Image
} from '@chakra-ui/react';

const Toue = () => {
  return (
    <Flex color='white' bgColor='black' direction={{base:'column',sm:'column',md:'row',lg:'row'}}>

      <Box w={{base:'100%',sm:'100%',md:'50%',lg:'50%'}} p={{base:'5',sm:'5',md:'14',lg:'14'}}>
        <Heading fontSize='40px'>Want a product tour? Here you can book a call demo with our expert.</Heading>
        <Text my='8'>Learn all of the time tracking basics of TimeCamp and track time like a true pro.</Text>
      <Box display='inline-block' py='3' px='7' textAlign='center' borderRadius='20px' backgroundColor="orange" fontWeight='500'>Book a demo</Box>
      </Box>

      <Flex w={{base:'100%',sm:'100%',md:'50%',lg:'50%'}}  justifyContent="flex-end">
        <Image src={toue} w={{base:'90%',sm:'90%',md:'90%',lg:'75%'}} margin={{base:'auto',sm:'auto',md:'0',lg:'0'}} />
      </Flex>
    </Flex>
  )
}

export default Toue
