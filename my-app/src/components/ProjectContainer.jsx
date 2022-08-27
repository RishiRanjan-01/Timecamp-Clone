import { Box,Button,Flex,Popover,PopoverBody,PopoverContent,PopoverTrigger,Text, useDisclosure } from '@chakra-ui/react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
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
import { ProjectTodo } from "./ProjectTodo"
import { AlertDialogExample } from './AlertDialogExample';

const ProjectContainer = ({setInputBox,projectData,setProjectId}) => {
  // console.log(projectData);
    const [projectDes, setProjectDes] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleProject = (e) => {
      e.stopPropagation()
       
        setInputBox("Project");
        setProjectId(projectData._id) 
    }

    const handleProjectInput = (e) => {
      e.stopPropagation()
      setProjectDes(!projectDes);
      setInputBox("Task");
    }

    const mouseEnter = () => {
      onOpen();
    }

    const mouseLeave = () => {
      onClose();
    }

    const navigate = useNavigate();

  return (
    <Box width={"100%"} height="max-content" isOpen={() => isOpen()} onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
     <Box onClick={ (e) => handleProject(e)}  _hover={{backgroundColor:"#fafafa", borderLeft:"2px solid #25cf60",cursor:"pointer"}} width="100%" height="16" p="2"  display={"flex"} justifyContent="space-between" >
        <Box display={"flex"} gap="5px">
            <Box mt="1">{ projectDes ? <MdKeyboardArrowDown/> :  <MdKeyboardArrowRight/>}</Box>
            <Box mt={"2"} backgroundColor="yellow.800" height={"10px"} width="10px" borderRadius={"50%"}></Box>
            <Box>
              <Text fontWeight={"medium"}>{projectData.name}</Text>
               <Text fontSize={"12px"} color="gray.400">{projectData.email}</Text>
            </Box>
        </Box>
        { isOpen ? <Flex  gap="15px" >
            <Button onClick={(e) => handleProjectInput(e)} color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Add Task</Button>
            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"}><TbChartPie size={"20px"} color="gray"/></Button>
            
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
                    <AlertDialogExample projectId={projectData._id}/>
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

     
     {/* {
        projectDes ? <ProjectTodo setInputBox={setInputBox}/> : null
     }  */}
    </Box>
  )
}



// ________________________________________________________________________________________________________________





// __________________________________________________________________________________________________________________



// Add deployed backend URL
// Task deletion Alert box
// function AlertDialogExample({projectId}) {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const cancelRef = React.useRef();
//     const [singleProject, setSingleProject] = useState({});

//     const dispatch = useDispatch();

//     const getSingleProject = () => {
//       axios.get(`http://localhost:8080/project/${projectId}`,{
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}` //the token is a variable which holds the token
//        }
//       })
//       .then((r) => {
//         setSingleProject(r.data)
//       })
//     }

//     const handleDelete = () => {
//       onClose();
//       dispatch(deleteProject(projectId))
//       .then((r) => {
//         if(r.type == "DELETE_PROJECT_SUCCESS"){
//           dispatch(getProject());
//         }
//       })
//     }

//     useEffect(() => {
//       getSingleProject();
//     },[projectId])
  
//     return (
//       <>
//         <Box onClick={onOpen} >
//          <Text fontSize={"15px"} fontWeight="semibold" color={"gray.900"}>Delete</Text>
//         </Box>
  
//         <AlertDialog
//           isOpen={isOpen}
//         //   leastDestructiveRef={cancelRef}
//           onClose={onClose}
//         >
//           <AlertDialogOverlay>
//             <AlertDialogContent>
//               <AlertDialogHeader fontSize='lg' fontWeight='bold' color={"cyan.500"}>
//               Are you sure you want delete Project ?
//               </AlertDialogHeader>
  
//               <AlertDialogBody>
//                 <Text>This action is permament and cannot be undone. <b>All time tracked to this project will be gone.</b></Text>
//                 <Text color={"red.400"} fontWeight="medium">Title : {singleProject.name}</Text>
//                 <Text color={"red.400"} fontWeight="medium">Id : {singleProject._id}</Text>
//                 <Text>If you simply want to hide the project, we recommend archiving it instead.</Text>
//               </AlertDialogBody>
  
//               <AlertDialogFooter>
//                 <Button ref={cancelRef} onClick={onClose}>
//                   Cancel
//                 </Button>
//                 <Button  colorScheme='red' onClick={handleDelete} ml={3}>
//                   Delete
//                 </Button>
//               </AlertDialogFooter>
//             </AlertDialogContent>
//           </AlertDialogOverlay>
//         </AlertDialog>
//       </>
//     )
//   }

export default ProjectContainer;