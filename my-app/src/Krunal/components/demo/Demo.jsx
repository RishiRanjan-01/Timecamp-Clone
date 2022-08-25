import React from 'react'
import Demoaccord from './Demoaccord'
import Demoaccord2 from './Demoaccord2';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'

const employee=[
    {title:'Check logged time on the handy Timesheet',text:"Enjoy the transparency - check your employees time records with more detailed information on the handy timesheet or a graphical, calendar-like view.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.png'},
    {title:'Try our easy-to-use desktop app',text:"TimeCamp desktop app is reliable and easy to use time tracking tool that works in the background and seamlessly fills the timesheets. All you have to do is to focus on your work!",img:'https://cdn-m.timecamp.com/img/greenbranding/features/desktop-app-features.svg'},
    {title:'Track your activities automatically',text:"Fill your timesheets with the daily activities and time entries with just one click. Easy time tracking app is here!",img:'https://cdn-m.timecamp.com/img/greenbranding/features/img-simple-tracking.png'}
]
const manager=[
    {title:'Ensure Project profitability by analyzing reports ',text:"TimeCamp provides you with all the data you need to analyze the projects’ performance to ensure your team always stays on track. Look at the clear graphics and get a better view of the time tracked!",img:'https://cdn-m.timecamp.com/img/greenbranding/features/reporting-features.png'},
    {title:'Integrate with other tools for better performance',text:"Use seamless and quick setup to track time directly from a tool you already use, or import your project structure into TimeCamp.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/tools-integrations.png'},
    {title:'Take advantage of a simple, accurate budgeting',text:"No more guessing! With TimeCamp you will get reasonable estimates for your projects and keep an eye on the resources usage.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/budgeting-image.png'}
]
const enterprise=[
    {title:'Transfer multilevel project structures',text:"No matter how many projects your team is currently working on, with TimeCamp you'll be able to organize work time without any problem.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/project-structure.png'},
    {title:'Achieve full compliance with data regulations',text:"Our time tracking tool is fully GDPR compliant so that you can leave personal data and its privacy on us.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/compilance-enterprise.png'},
    {title:'get help from our Customer Success Manager',text:"Does your organization have more advanced or extraordinary needs? Our team would be happy to ensure you a private cloud implementation and help with dedicated onboarding.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/customer-success.png'}
]
const hr=[
    {title:'Track attendance automatically',text:"TimeCamp allows both you and your employees to keep an eye on their absence, sick days, or vacation leaves. Track attendance and working hours easily as never before.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.png'},
    {title:'Check and approve employees Timesheets',text:"Enjoy the benefits of fully automated timesheet submissions - quickly approve or reject them and leave notes to make sure the employees understand what needs to be done to get approved.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/timesheet-approval.png'},
    {title:'Integrate with payroll tools to work faster',text:"Make sure your employees are paid fairly! Use TimeCamp to connect the attendance data with payroll tools to create payroll lists with just a few clicks.",img:'https://cdn-m.timecamp.com/img/greenbranding/features/payroll-features.png'}
]
const Demo = () => {
  return (
    <>
    <Box   my='20'>

        <Flex my='10' direction={{base:'column',lg:'row'}} fontWeight='bold' justifyContent='center' textAlign='center' gap='5'>
            <Text>Want to track time in your team ?</Text>
            <Text color='green'>Book a Demo <ArrowForwardIcon/></Text>
        </Flex>
        <Heading textAlign={{base:'start',lg:'center'}} m='auto' w='80%' >Try an automatic, easy-to-use time tracker for the entire organization!</Heading>
    </Box>

    <Box w='90%' m='auto'>
    <Text color='green' fontWeight='700'>FOR EMPLOYEES</Text>
    <Heading my='5'>Track your employees working time</Heading>
    <Text my='5' fontWeight='500'>Log working hours of your employees automatically or manually and make sure they are billed fairly.</Text>
<Accordion allowToggle>

{employee.map((e)=>{
    return <Demoaccord key={e.title} e={e}/>
})}
</Accordion>

<Box my='10' display='inline-block' py='3' px='7' color='white' bgColor='green' borderRadius='25px' >Track employees time</Box>

    <Text color='green' fontWeight='700'>FOR MANAGRESS</Text>
    <Heading my='5'>Track project time and budget easier than ever before</Heading>
    <Text my='5' fontWeight='500'>Stay on top of your team’s performance and create accurate resource estimates for all the projects.</Text>
<Accordion allowToggle>

{manager.map((e)=>{
    return <Demoaccord2 key={e.title} e={e}/>
})}
</Accordion>

<Box my='10' display='inline-block' py='3' px='7' color='white' bgColor='green' borderRadius='25px' >Increase team productivity</Box>

    <Text color='green' fontWeight='700'>ENTERPRISE</Text>
    <Heading my='5'>Try enterprise time tracking at the highest level</Heading>
    <Text my='5' fontWeight='500'>Custom needs? No problem! Contact us, and we will definitely find a perfect solution for your enterprise.</Text>
<Accordion allowToggle>

{enterprise.map((e)=>{
    return <Demoaccord key={e.title} e={e}/>
})}
</Accordion>

<Box my='10' display='inline-block' py='3' px='7' color='white' bgColor='green' borderRadius='25px' >Contact for customized solution</Box>

    <Text color='green' fontWeight='700' >FOR HR</Text>
    <Heading my='5'>Check Timesheets and control attendance in one place</Heading>
    <Text my='5' fontWeight='500'>With TimeCamp you can forget about endless stacks of papers! Take advantage of convenient and easy to use tools to support your daily HR and payroll work..</Text>
<Accordion allowToggle>

{hr.map((e)=>{
    return <Demoaccord2 key={e.title} e={e}/>
})}
</Accordion>

<Box my='20' display='inline-block' py='3' px='7' color='white' bgColor='green' borderRadius='25px' >Make HR's work easier</Box>
    </Box>
    </>
  )
}

export default Demo