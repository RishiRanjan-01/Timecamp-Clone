import React from 'react'
import {
  Box,
  
  Stack,
  SimpleGrid,
  Text,
  Link,
  Flex,
  Heading,
  Grid,
  Image
} from '@chakra-ui/react';

 const gimage=['https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png','https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png']

const Gimage=({children})=>{
    return (
         <Flex   justifyContent='center' alignItems='center' borderRadius='20%' w='100px' boxShadow='2xl' p='6'  bg='white' h='100px' ><Image src={children}  w='60%'></Image></Flex>
    )
}

const Integrations = () => {
  return (
    <Box px={{base:'0',md:'20'}} 
    py='20'bgColor='#f3f3f3'>

   

    <SimpleGrid columns={{ base: 1, sm: 1, md: 1,lg:2 }} spacing={20}  w={{base:'100%',md:'90%'}} m='auto'>
          
          <Stack px={{base:3,md:'0'}}>

           <Text my='5' color='#25cf60' fontWeight='500'>TIME TRACKING INTEGRATIONS</Text>

           <Heading>Easy and quick integration with more than 100 apps and work tools</Heading>
            <Text  my='5'><b>TimeCamp works great</b> alongside with all of the most popular work management tools.</Text>
            <Text  my='5'>Now, you can also <b>track time</b> directly from your go-to apps such as Trello or Asana thanks to our Chrome extension.</Text>
            <Box  w='250px' py='4' borderRadius='30' textAlign='center'  bgColor='#25cf60' color='white'> Track time in Chrome</Box>
            
            <Text >Maintain your current workflow and <b>connect TimeCamp,</b> the best time tracking software, with your currently used apps.</Text>
            
            <Link fontWeight='500' color='#25cf60'>Check integrations</Link>
           
          </Stack>

           <Grid templateColumns='repeat(3, 1fr)' gap={{base:'6',sm:'10',md:'14'}} margin='auto'>
        {gimage.map((e)=>{
            return  <Gimage key={e}>{e}</Gimage>
        })}  
            </Grid>
         
    </SimpleGrid>
  
    </Box>
  )
}

export default Integrations