import { Box, Button, Flex, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { IoIosArrowDown } from 'react-icons/io'
import { FaRegEdit, FaUserCircle } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useEffect } from 'react'
import { getProject } from '../store/project/action'

const User = () => {

  const project = useSelector(state => state.project.project);
    console.log("project",project);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProject())
    },[])
  return (
    <VStack gap={"15px"} height={"max-content"} width="100%" p="4">
      <Box width={"100%"} height="12" backgroundColor={"#d9e9fe"} p="2" borderRadius="6px" display={"flex"} gap="10px" alignItems={"center"}>
        <FiUserPlus size={"30px"} color="#4294f8" />
        <Text fontWeight={"semibold"} color="#4294f8">You can now invite guests like clients, vendors, or contractors. You can add them free of charge. <b><Link to="#">Invite guest</Link></b></Text>
      </Box>
      <Box width={"100%"} height="20" backgroundColor={"#f8f8f8"} borderRadius="6px" p="4" justifyContent={"space-between"} display={"flex"}>
        <Flex alignItems={"center"} gap="18px">
          <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>+Invite people</Button>
          <Button  variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.900">Create group</Button>
          <Button  variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.900"><HiOutlineMail/></Button>
          <Text fontWeight={"semibold"}>1/100 users</Text>
          <Text color="#4294f8" fontWeight={"semibold"}>Chnage number of seats</Text>
        </Flex>
        <Input width={"20%"} type="text" placeholder='search' />
      </Box>

      {/* TABLE */}
      <Box height={"max-content"} width="100%" p="3">

      <TableContainer>
  <Table variant='simple' >
    <Thead>
      <Tr>
        <Th display={"flex"} alignItems="center">Groups/users <IoIosArrowDown/></Th>
        <Th >EXPAND ALL</Th>
        <Th>EXTERNAL ID</Th>
        <Th>INVOLVED IN </Th>
        <Th>ROLE</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr  _hover={{backgroundColor:"#f8f8f8"}}>
        <Box  display={"flex"} gap="15px" p="4" alignItems={"center"}>
          <input type="checkbox"/>
          <Text fontWeight={"semibold"}>People (1 user)</Text>
          <Button  variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.900"><FaRegEdit/></Button>
          <Button  variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.900"><AiOutlinePlus/></Button>
        </Box>
      </Tr>
      <Tr _hover={{backgroundColor:"#f8f8f8"}}>
        <Box  ml="6" display={"flex"} gap="15px" p="4" alignItems={"center"}>
          <input type="checkbox"/>
          <FaUserCircle size="25px" />
          <Text color="#4294f8" fontWeight={"semibold"}>{project[0]?.email}</Text>
          <Text fontWeight={"semibold"}>Account owner</Text>
        </Box>
        <Td></Td>
        <Td></Td>
        <Td fontWeight={"semibold"}>{project.length}</Td>
        <Td color="#4294f8" display={"flex"} alignItems="center" >Administrator<IoIosArrowDown/></Td>
      </Tr>
    </Tbody>
    <Tfoot>
    </Tfoot>
  </Table>
 </TableContainer>
      </Box>
      
      <Box w={"100%"} p="4" display={"flex"} gap="5px" justifyContent={"space-between"} alignItems={"center"}>
        <Flex>
           <Button  variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.900">Bulk edit  <IoIosArrowDown/></Button>
           <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Save</Button>
        </Flex>
        <Flex gap="8px"> 
          <input type="checkbox"/>
          <Text fontWeight={"semibold"}>Hide disabled users from lists in reports</Text>
        </Flex>
      </Box>
    </VStack>
  )
}

export default User