import React from 'react'
import {Accordion,Box,Heading} from '@chakra-ui/react'
import AccordinationItem from './AccordinationItem'

const Faq = () => {
  return (
    <Box w='89%' margin='auto' mb='20'>
      <Heading textAlign='center' mt='24' mb='10'>FAQ</Heading>

<Accordion allowToggle>
    <AccordinationItem/>
</Accordion>
    </Box>
   
  )
}

export default Faq