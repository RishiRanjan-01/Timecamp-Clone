import { Box,Button,Flex,Input,Select,Stack,Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillSetting } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const Addtask = ({setInputBox}) => {
    const [project, setProject] = useState("Project1");
    const [description, setDescription] = useState(false)

  return (
    <Box width={"100%"} height="100%" borderRadius={"7px"} border={"1px solid grey"} p="4" >
        <Stack gap={"10px"} fontFamily={"sans-serif"}>
           <Flex justifyContent={"space-between"} alignItems="center">
             <Text fontWeight="semibold" >Add Task</Text>
             <Button onClick={() => setInputBox("")} size={"xs"} variant={"outline"} fontWeight="normal" bgColor={"#fff"} >X</Button>
           </Flex>
           <Text fontWeight="semibold" color={"gray.400"} fontSize="13px" >project1/</Text>
           <Input type={"text"} focusBorderColor='#25cf60'  border={"0.2px solid gray"} placeholder='Task' width={"100%"} />
            <hr/>
        </Stack>
        <Stack mt="2" gap="14px" overflowY={"scroll"} height="60%" borderBottom={"1px solid gray"} >
            <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
                <Flex alignItems={"center"} gap="5px" fontFamily={"sans-serif"}>
                  <Text>People</Text>
                  <FiEdit/>
                </Flex>
                <Box display={"flex"} gap="15px" fontFamily={"sans-serif"}>
                  <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Assign group</Button>
                  <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Assign people</Button>
                </Box>
            </Box>

            <hr/>

            <Text fontFamily={"sans-serif"} fontWeight={"semibold"}>Description</Text>

            <Button fontFamily={"sans-serif"} onClick={() => setDescription(true)}>Click edit description</Button>
            {
                description ? <Box>
                    <Textarea fontFamily={"sans-serif"} placeholder='Click to edit description' />
                    <Flex gap="15px" fontFamily={"sans-serif"}>
                      <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Save</Button>
                      <Button onClick={() => setDescription(false)} variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Cancel</Button>
                    </Flex>
                </Box> : null
            }

            <hr />
            <Flex alignItems={"center"} gap="5px"><Text>Budget</Text><AiFillSetting/></Flex>

            <Flex fontFamily={"sans-serif"}>
                <Select placeholder='Estimated Fee'>
                    <option value="">Estimated hours</option>
                    <option value="">Estimated Fee</option>
                </Select>
                <Input/>
            </Flex>

            <Flex alignItems={"center"} gap='5px' fontFamily={"sans-serif"}>
              <input type={"checkbox"}/>
              <label>Time from this task is billable by default</label>
            </Flex>

            <hr />

            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} fontFamily={"sans-serif"}>Enable Keyword</Button>

        </Stack>
        <Box mt={"3"} display={"flex"} p="2" gap="10px" fontFamily={"sans-serif"}>
            <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Save</Button>
            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} >Cancel</Button>
        </Box>
    </Box>
  )
}

export default Addtask