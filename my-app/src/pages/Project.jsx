import { Box, Button, Input, Popover, PopoverBody,Text, PopoverContent, PopoverTrigger, Select, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import ProjectContainer from '../components/ProjectContainer';

const Project = () => {

  const [addProject, setAddProject] = useState(false);

  const handleAddProject = () => {
    setAddProject(true)
  }
  return (
    <>
    <Box height={"24"} p="6" width="100%" border={"1px solid red"}  >
      <Box display={"flex"} gap="15px" alignItems={"center"} >
        <Input focusBorderColor='#25cf60' border={"0.2px solid gray"} placeholder='Search' width={ addProject ? "280px" : "200px"} />
        { !addProject ? <Button onClick={handleAddProject} color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}} >Add Project</Button> : null}
        <Select fontWeight={"semibold"} focusBorderColor="#25cf60" _hover={{bgColor:"#f8f8f8",cursor:"pointer"}} colorScheme={"#25cf60"} size="md" width={"130px"} placeholder='Filter'>
          <option value='option1'>All Task</option>
          <option value='option2'>My Task</option>
        </Select>
        <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600">
          <AiOutlineArrowsAlt size={"20px"}/>
        </Button>
        <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600">Archived</Button>

        <Popover placement="bottom-start" isLazy>
         <PopoverTrigger>
            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600"><BsThreeDots/></Button>
         </PopoverTrigger>
        <PopoverContent width="200px">
        <PopoverBody p="2"  >
            <Text fontWeight={"semibold"} color={"blackAlpha.900"} _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2">Import From CSV</Text>
            <Box _hover={{bgColor:"#25cf60",cursor:"pointer",borderRadius:"5px",color:"aliceblue"}} p="2">
              <Text _hover={{color:"aliceblue"}} fontWeight={"semibold"} color={"blackAlpha.900"}>Import From add-ons</Text>
              <Text fontSize={"10px"} color="gray.600">Trello,Basecamp,Asana,Insightly,jira,podio and more...</Text>
            </Box>
        </PopoverBody>
        </PopoverContent>
        </Popover>
      </Box>
    </Box>

    {/* Project */}
    <Box height={"86%"} border="1px solid blue" width="100%" display={"flex"}>
      
      {/* Project Information box */}
      <Box height={"100%"} width="60%" border="1px solid blue" >
        { addProject ? <Box width={"100%"} height="20" p="6" border={"1px solid green"} display="flex" justifyContent="space-between" >
          <Input type="text" fontSize={"15px"} focusBorderColor='#25cf60' border={"0.2px solid gray"} fontWeight="semibold" placeholder='Enter the name for new project or task...' width={"380px"} />
          <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Create new project</Button>
          <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} onClick={() => setAddProject(false)} color="gray.600">Cancel</Button>
        </Box>
        : null
        }

        <Box height={"max-content"} width="95%" m="auto" borderRadius={"5px"} border={"0.5px solid gray"}>
          <ProjectContainer/>
        </Box>
      </Box>

      {/* task Addition Box */}

      <Box height={"100%"} width="40%" border="1px solid blue">

      </Box>
    </Box>

    </>
  )
}

export default Project