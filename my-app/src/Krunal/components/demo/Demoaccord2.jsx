import React from 'react'
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Flex,Image
} from '@chakra-ui/react'

const Demoaccord2 = ({e}) => {
  return (
   <AccordionItem>
        {({ isExpanded }) => (

      <>
        <h2>
          <AccordionButton>
            <Box display="flex" alignItems='center' gap='5'>
            {isExpanded ? <Box borderBottom='2px solid green' p='2'><Text fontWeight='bold'>{e.title}</Text></Box>:<Text>{e.title}</Text>}
                
              
            </Box>
            
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left'>
            <Flex justifyContent='space-between' direction={{base:"column",sm:'column',md:'row',lg:'row'}}>
                <Box w={{base:"100%",sm:'100%',md:'45%',lg:'45%'}} >
                    <Image src={e.img}  mt={{base:"10",sm:'10',md:'0',lg:'0'}}/>
                </Box>
                <Box w={{base:"100%",sm:'100%',md:'45%',lg:'45%'}}>
                 <Text>{e.text}</Text>
                </Box>
        
            </Flex>
         
        </AccordionPanel>
      </>
      )}

    </AccordionItem>
  )
}

export default Demoaccord2
