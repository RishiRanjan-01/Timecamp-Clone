import React from 'react'
import {
  Wrap,WrapItem,
  Image
} from '@chakra-ui/react';

const Star = () => {
  return (
    <Wrap w='89%' margin='auto' justify={{base:'center',md:'space-between'}} my='20' spacing='30px'>
  <WrapItem  w='170px' >
        <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png' my={{base:'4',md:'0'}}/>
  </WrapItem>
  <WrapItem  w='170px'>
      <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png' my={{base:'4',md:'0'}}/>
  </WrapItem>
  <WrapItem  w='170px'>
        <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png' my={{base:'4',md:'0'}}/> 
  </WrapItem>
  <WrapItem  w='170px'>
        <Image src='https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png' my={{base:'4',md:'0'}}/> 
  </WrapItem>
  
</Wrap>
  )
}

export default Star