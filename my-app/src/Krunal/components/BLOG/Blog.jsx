import React from 'react'
import {
  Box,
  Text,
  Flex,
  Link,
  Heading,
  Wrap,WrapItem,
  Image
} from '@chakra-ui/react';

const WrapHeading=({children})=>{
    return(
        <Text fontWeight='bold' fontSize='25' ml='5'>{children}</Text>
    )
}
const Read=({children})=>{
    return(
         <Text fontWeight='bold' fontSize='15' ml='5' color='green'>{children}</Text>
       
    )
}

const Blog = () => {
  return (
    <Box w='89%' margin='auto'>
    <Flex direction='column' >
        <Text textAlign={{base:'center',sm:'center',md:'center',lg:"start"}} fontWeight='bold' color='green' my='2'>BLOG</Text>
        <Heading textAlign={{base:'center',sm:'center',md:'center',lg:"start"}} my='2'>Check the latest blog updates</Heading>
       
        <Wrap spacing='30px' justify={{base:'center',md:'center',lg:'space-between'}} my='2' >
  <WrapItem >
    <Flex direction='column' maxW='350px' >
        <Box><Image src='https://www.timecamp.com/blog/wp-content/uploads/2022/08/best-apps-for-lawyers-400x219.jpg' /></Box>
      
      <WrapHeading>Best Apps for Lawyers</WrapHeading>
      <Read>Read more</Read>
    </Flex>
  </WrapItem>
  <WrapItem>
    <Flex direction='column' maxW='350px'>
        <Box><Image src='https://www.timecamp.com/blog/wp-content/uploads/2022/08/designer-time-tracking-400x219.jpg'/></Box>
      
      <WrapHeading>Best Designer Time Tracking Apps</WrapHeading>
      <Read>Read more</Read>
    </Flex>
  </WrapItem>
  <WrapItem>
    <Flex direction='column' maxW='350px'>
        <Box><Image src='https://www.timecamp.com/blog/wp-content/uploads/2022/08/business-metrics-header-400x219.png'/></Box>
      
      <WrapHeading>x business performance metrics to follow in 2022</WrapHeading>
      <Read>Read more</Read>
    </Flex>
  </WrapItem>
  
</Wrap>
<Box w='200px' py='4' borderRadius='30' alignSelf='center' textAlign='center' my='5' bgColor='green' color='white'>Check all articles</Box>


    </Flex>
    </Box>
  )
}

export default Blog