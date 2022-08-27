import { Box,Button,Flex,Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs'
import { TbChartPie } from 'react-icons/tb'
import styles from "./ProjectContainer.module.css"

const ProjectContainer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Box className={styles.mainBox} _hover={{backgroundColor:"#fafafa", borderLeft:"2px solid #25cf60",cursor:"pointer"}} width="100%" height="16" p="2"  display={"flex"} justifyContent="space-between" >
        <Box display={"flex"} gap="5px">
            <Box mt={"2"} backgroundColor="yellow.800" height={"10px"} width="10px" borderRadius={"50%"}></Box>
            <Box>
              <Text fontWeight={"medium"}>Project1</Text>
               <Text fontSize={"12px"} color="gray.400">contactme.rishiranjan</Text>
            </Box>
        </Box>
        <Flex gap="15px" className={styles.hoverbox}>
            <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Add Task</Button>
            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"}><TbChartPie size={"20px"} color="gray"/></Button>
            <Button variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.600"><BsThreeDots/></Button>
            <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}><BsFillPlayFill size={"20px"} color='#fff'/></Button>
        </Flex>
    </Box>
  )
}

export default ProjectContainer