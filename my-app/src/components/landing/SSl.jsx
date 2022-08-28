import React from 'react'
import {
  Text,
  Box,
  Input,
  Flex,
  Heading
} from '@chakra-ui/react';

const SSL = () => {
  return (
    <Box  w={{base:'95%',sm:'95%',md:'95%',lg:'80%'}} margin='auto' bgColor='#f7b801' borderRadius='30px' py='10'>

   <Flex direction='column' w={{base:'90%',sm:'90%',md:'90%',lg:'70%'}} margin='auto'  textAlign='center' alignItems='center' justifyContent='center'  >
    <Heading mb='5'>Use TimeCamp to your advantage</Heading>
    <Text mb='5'>If you’re struggling to keep track of your work across different projects, you need a radical change. You need TimeCamp.</Text>

    <Flex mb={{base:'20',sm:'20',md:'24',lg:'5'}}  bgColor={{base:'orange',md:'white'}}  justifyContent="space-between"  pl='5' h='45px' borderRadius='20px' direction={{base:'column',sm:'column',lg:'row'}}>

      <Input type="email" placeholder='Add your email' w={{base:'100%',sm:'100%',md:'80%',lg:'50%'}}
      mb={{base:'4',sm:'4',md:'4',lg:'0'}} p={{base:'4',sm:'4',md:'4',lg:'0'}} 
      borderRadius={{base:'20px',sm:'20px',md:'20px',lg:0}} border='none' bgColor='white'/>

      <Flex w={{base:'100%',sm:'100%',md:'100%',lg:'50%'}} p={{base:'3',sm:'3',md:'3',lg:'0'}} 
       alignItems='center'  justifyContent='center' color='white' borderRadius='20px' bgColor='#25cf60' textAlign='center'>Start tracking time</Flex>

    </Flex>
      <Text>By signing up you agree to our <b>Terms and Conditions</b> and <b>Privacy Policy.</b></Text>
   </Flex>
    </Box>
  )
}

export default SSL