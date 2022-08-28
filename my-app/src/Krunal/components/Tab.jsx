import React from 'react'
import {
  Box,
    Tabs,
    TabPanel,TabList,Tab,TabPanels,Heading,
  Text,
  Flex
} from '@chakra-ui/react';
import { BiLock } from 'react-icons/bi';



const Tabb = () => {
  return (
    <Box>
        <Text mt='20' color='#25cf60' textAlign='center' fontWeight='600'>PRICING</Text>
        <Heading my='5' textAlign='center'>Your time cost more</Heading>
        <Text  textAlign='center' mb='8'>Use free forever plan or subscribe to a paid plan to get more features!</Text>
   <Tabs variant='soft-rounded' colorScheme='green' w={{base:'95%',sm:'95%',md:'95%',lg:'85%'}} m='auto'>
  <TabList >
    <Flex  m='auto'>
         <Tab w={{base:'50%',sm:'50%',md:'50%',lg:'200px'}}>Anually 10% discount</Tab>
        <Tab w={{base:'50%',sm:'50%',md:'50%',lg:'200px'}}>Monthly</Tab>
    </Flex>
   
  </TabList>
  <TabPanels>
    <TabPanel mt='10'>
     <Flex gap='5' justifyContent='center' direction={{base:'column',sm:'column',md:'column',lg:'row'}}>

        <Box boxShadow='md' rounded='xxl' bg='white' borderRadius='15px' p='5' w={{base:'100%',sm:'100%',md:'100%',lg:'25%'}}>

            <Box borderBottom='2px solid #25cf60' pb='3'>
                <Heading textAlign='center' color='#25cf60'>Free</Heading>
            <Text textAlign='center'>Free forever plan</Text>
            </Box>
            
            <Text my='5'>Measure on which activities you spend time while working</Text>

            <Text textAlign='center' py='3' backgroundColor='#25cf60' color='white' borderRadius='25px' >Join for free</Text>
    
            <Box my='5'>
                <Text >• Unlimited users</Text>
                <Text>•<b> Unlimited Projects & tasks</b></Text>
                <Text>• Desktop & Mobile app</Text>
            </Box>
                 
        </Box>

        <Box boxShadow='md' rounded='xxl' bg='white' borderRadius='15px' p='5' w={{base:'100%',sm:'100%',md:'100%',lg:'25%'}}>
            <Text textAlign='center' color='#25cf60' fontSize='8px' fontWeight='bold'>BASIC</Text>

            <Box borderBottom='2px solid #25cf60' py='3'>
                 <Heading textAlign='center' >$ 6.3</Heading>
                <Text textAlign='center'>user/mo</Text>
            </Box>
           
            <Text  my='5'>Be more transparent and gain customers' trust</Text>

            <Text textAlign='center' py='3' backgroundColor='#25cf60' color='white' borderRadius='25px' >Start your free trial</Text>
            
            <Box my='5'>
                <Text>• Time rounding</Text>
                <Text>• Custom report</Text>
                <Text>• Hide time from users</Text>
                <Text>• Managment roles</Text>
                <Text>• Team productivity tracking</Text>
                <Text>• XLS reports export</Text>
                <Text>• Unlimited integrations</Text>
                <Text>• Billable time & budgeting</Text>
            </Box>
               
            
        </Box>

        <Box bgColor='#25cf60' w={{base:'100%',sm:'100%',md:'100%',lg:'25%'}} borderRadius='15px'>
            <Flex justifyContent='flex-end' fontSize='8px' fontWeight='bold'>
                 <Text py='1' px='2' color='white'>PRO</Text>
            <Text  py='1' px='2' borderRadius='20px' bgColor='white' color='#25cf60'>POPULAR</Text>
            </Flex>
            <Box py='3' px='4'>

        
           <Box borderBottom='2px solid white' pb='3' >
                 <Heading textAlign='center' color='white'>$ 9</Heading>
            <Text textAlign='center'>user/mo</Text>
           </Box>
           
            <Text my='5' color='white'>Get full control over your business</Text>

             <Text textAlign='center' py='3' backgroundColor='white' color='#25cf60' borderRadius='25px' >Start your free trial</Text>

            <Text my='2' color='white'>Everything in Basic plus</Text>
           
            <Box my='3' color='white'>
                 <Text>• Customer user roles</Text>
                <Text>• Billing rates</Text>
                <Text>• Invoicing</Text>
                <Text>• Timesheet approvals</Text>
                <Text>• Screenshots</Text>
                <Text>• SSO login</Text>
                <Text>• 2-factor authentication</Text>
            </Box>
               
        </Box>
           
        </Box>
        
        <Box boxShadow='md' rounded='xxl' bg='white' borderRadius='15px' p='5' w={{base:'100%',sm:'100%',md:'100%',lg:'25%'}} >
            <Text textAlign='center' color='#25cf60' fontSize='8px' fontWeight='bold'>ENTERPRISE</Text>

            <Box  borderBottom='2px solid #25cf60' pt='3' pb='8'>
            <Heading textAlign='center'>Let's discuss</Heading>

            </Box>

            <Text my='5'>Customize TimeCamp to your custom needs</Text>

             <Text textAlign='center' py='3' backgroundColor='#25cf60' color='white' borderRadius='25px' >Contact us</Text>

            <Text my='2'><b>Everything in Pro plus</b></Text>

           <Box my='3'>

                <Text>• Personalized training</Text>
                <Text>• Private cloud implementation</Text>
                <Text>• Self hosted server</Text>
           </Box>
        
        </Box>

     </Flex>
    </TabPanel>
   <TabPanel mt='10'>
     <Flex gap='5' justifyContent='center' direction={{base:'column',sm:'column',md:'column',lg:'row'}}>

        <Box boxShadow='md' rounded='xxl' bg='white' borderRadius='15px' p='5' w={{base:'100%',sm:'100%',md:'100%',lg:'25%'}}>

            <Box borderBottom='2px solid #25cf60' pb='3'>
                <Heading textAlign='center' color='#25cf60'>Free</Heading>
            <Text textAlign='center'>Free forever plan</Text>
            </Box>
            
            <Text my='5'>Measure on which activities you spend time while working</Text>

            <Text textAlign='center' py='3' backgroundColor='#25cf60' color='white' borderRadius='25px' >Join for free</Text>
    
            <Box my='5'>
                <Text >• Unlimited users</Text>
                <Text>•<b> Unlimited Projects & tasks</b></Text>
                <Text>• Desktop & Mobile app</Text>
            </Box>
                 
        </Box>

        <Box boxShadow='md' rounded='xxl' bg='white' borderRadius='15px' p='5' w={{base:'100%',sm:'100%',md:'100%',lg:'25%'}}>
            <Text textAlign='center' color='#25cf60' fontSize='8px' fontWeight='bold'>BASIC</Text>

            <Box borderBottom='2px solid #25cf60' py='3'>
                 <Heading textAlign='center' >$ 7</Heading>
                <Text textAlign='center'>user/mo</Text>
            </Box>
           
            <Text  my='5'>Be more transparent and gain customers' trust</Text>

            <Text textAlign='center' py='3' backgroundColor='#25cf60' color='white' borderRadius='25px' >Start your free trial</Text>
            
            <Box my='5'>
                 <Text>• Time rounding</Text>
                <Text>• Custom report</Text>
                <Text>• Hide time from users</Text>
                <Text>• Managment roles</Text>
                <Text>• Team productivity tracking</Text>
                <Text>• XLS reports export</Text>
                <Text>• Unlimited integrations</Text>
                <Text>• Billable time & budgeting</Text>
            </Box>
               
            
        </Box>

        <Box bgColor='#25cf60' w={{base:'100%',sm:'100%',md:'100%',lg:'25%'}} borderRadius='15px'>
            <Flex justifyContent='flex-end' fontSize='8px' fontWeight='bold'>
                 <Text py='1' px='2' color='white'>PRO</Text>
            <Text  py='1' px='2' borderRadius='20px' bgColor='white' color='#25cf60'>POPULAR</Text>
            </Flex>
            <Box py='3' px='4'>

        
           <Box borderBottom='2px solid white' pb='3' >
                 <Heading textAlign='center' color='white'>$ 10</Heading>
            <Text textAlign='center'>user/mo</Text>
           </Box>
           
            <Text my='5' color='white'>Get full control over your business</Text>

             <Text textAlign='center' py='3' backgroundColor='white' color='#25cf60' borderRadius='25px' >Start your free trial</Text>

            <Text my='2' color='white'>Everything in Basic plus</Text>
           
            <Box my='3' color='white'>
                 <Text>• Customer user roles</Text>
                <Text>• Billing rates</Text>
                <Text>• Invoicing</Text>
                <Text>• Timesheet approvals</Text>
                <Text>• Screenshots</Text>
                <Text>• SSO login</Text>
                <Text>• 2-factor authentication</Text>
            </Box>
               
        </Box>
           
        </Box>
        
        <Box boxShadow='md' rounded='xxl' bg='white' borderRadius='15px' p='5' w={{base:'100%',sm:'100%',md:'100%',lg:'25%'}} >
            <Text textAlign='center' color='#25cf60' fontSize='8px' fontWeight='bold'>ENTERPRISE</Text>

            <Box  borderBottom='2px solid #25cf60' pt='3' pb='8'>
            <Heading textAlign='center'>Let's discuss</Heading>

            </Box>

            <Text my='5'>Customize TimeCamp to your custom needs</Text>

             <Text textAlign='center' py='3' backgroundColor='#25cf60' color='white' borderRadius='25px' >Contact us</Text>

            <Text my='2'><b>Everything in Pro plus</b></Text>

           <Box my='3'>

                <Text>• Personalized training</Text>
                <Text>• Private cloud implementation</Text>
                <Text>• Self hosted server</Text>
           </Box>
        
        </Box>

     </Flex>
    </TabPanel>
  </TabPanels>
</Tabs>
<Flex gap='3' color='grey' my='16' justifyContent='center' alignItems='center'><BiLock/>SSL Secure Payment</Flex>
</Box>
  )
}

export default Tabb
