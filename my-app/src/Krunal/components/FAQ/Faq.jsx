import React from 'react'
import {Accordion,Box} from '@chakra-ui/react'
import AccordinationItem from './AccordinationItem'

const Faq = () => {
  return (
    <Box w='89%' margin='auto'>

<Accordion allowToggle>
    <AccordinationItem/>
</Accordion>
    </Box>
   
  )
}

export default Faq