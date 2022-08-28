import React from 'react'
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import {AiOutlineTwitter } from 'react-icons/ai';
import {
  Box,
  Text,
  Flex,
  Link
} from '@chakra-ui/react';

const Bottom = () => {
  return (
    <Box  textAlign='center' color='grey' mb='20'>

        <Flex   gap='5' w={{base:'30%',md:'20%',lg:'10%'}} m='auto' justifyContent='space-between' >
        
        <Link href='https://www.facebook.com/timecamp/' isExternal >
        <FaFacebookF />
        </Link>

        <Link href='https://www.linkedin.com/company/timecamp/' isExternal>
        <FaLinkedinIn/>
        </Link>

        <Link href='https://twitter.com/timecamp/' isExternal>
        <AiOutlineTwitter/>
        </Link>

        </Flex>

        <Text mt='5'>Copyright © 2022 TimeCamp. Inc.</Text>
        <Flex justifyContent='center' ><Text fontSize='10' fontWeight='100'>We use cookies.</Text> <Text fontSize='10'> Click here to learn more</Text></Flex>
    </Box>
  )
}

export default Bottom