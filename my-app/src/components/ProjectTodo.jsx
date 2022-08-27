import { Box,Button,Flex,Popover,PopoverBody,PopoverContent,PopoverTrigger,Text, useDisclosure } from '@chakra-ui/react';

import React from 'react';
import { useState } from 'react';
import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs';
import { TbChartPie } from 'react-icons/tb';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux/es/exports";
import { deleteProject, getProject } from '../store/project/action';
import { AlertDialogExample } from "./AlertDialogExample"


const ProjectTodo = ({setInputBox}) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box isOpen={isOpen} onMouseEnter={onOpen} onMouseLeave={onClose} _hover={{backgroundColor:"#fafafa", borderLeft:"2px solid #25cf60",cursor:"pointer"}} width="100%" m="auto" height="16" p="2"  display={"flex"} justifyContent="space-between" >
       
        <Box display={"flex"} gap="5px" ml={"6"}>
            <Box mt={"2"} backgroundColor="darkseagreen" height={"10px"} width="10px" borderRadius={"50%"}></Box>
            <Box>
              <Text fontWeight={"medium"}>task1</Text>
            </Box>
        </Box>
        { isOpen ? <Flex  gap="15px" >
            <Button onClick={() => setInputBox("Task")} color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Add Task</Button>
            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"}><TbChartPie size={"20px"} color="gray"/></Button>
            
            {/* POPOVER COLOR, DELETE */}
            
            <Popover placement="bottom-start">
              <PopoverTrigger>
                <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600"><BsThreeDots/></Button>
              </PopoverTrigger>
              <PopoverContent width="220px">
                <PopoverBody p="2"  >
                  <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2" display={"flex"} alignItems="center" gap="15px" >
                    <Text _hover={{color:"aliceblue"}} fontWeight={"semibold"} color={"blackAlpha.900"}>Change Color</Text>
                    <Box height={"20px"} width="20px" borderRadius={"50%"} backgroundColor="yellow" border="1px solid gray" ></Box>
                  </Box>
                  <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2" display={"flex"} alignItems="center" gap="15px" >
                    {/* <Text _hover={{color:"aliceblue"}} fontWeight={"semibold"} color={"blackAlpha.900"}>Delete</Text> */}
                    <AlertDialogExample/>
                  </Box>
                  <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2" display={"flex"} alignItems="center" gap="15px" >
                    <Text _hover={{color:"aliceblue"}} fontWeight={"semibold"} color={"blackAlpha.900"}>Move</Text>
                  </Box>
                  <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2" display={"flex"} alignItems="center" gap="15px" >
                    <Text _hover={{color:"aliceblue"}} fontWeight={"semibold"} color={"blackAlpha.900"}>Archive</Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}><BsFillPlayFill size={"20px"} color='#fff'/></Button>
        </Flex>
        : null
        }
    </Box>
  )
}


export {ProjectTodo}
