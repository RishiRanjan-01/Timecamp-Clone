import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";
import { TbChartPie } from "react-icons/tb";
import { GrPersonalComputer } from "react-icons/gr";
import {BsFolder2Open} from "react-icons/bs";
import { BsTags } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineCheckSquare } from "react-icons/ai";
import Reports from './Reports';
import Computertime from './Computertime';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MySidebar = ({setboxWidth, currComp}) => {
    const [toggle, setToggle ] = useState(false);

    const navigate = useNavigate();

    const handleToggle = () => {
        setToggle(!toggle)
        setboxWidth();
    }

  return (
    <Box  height="100%" width={ toggle ? "5%" : "17%"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  >
        <Box height={"16"} borderBottom="1px solid grey" display={"flex"} alignItems="center" gap={ toggle ? "13px" :"22px"} >
        {toggle ? <Image ml="4" height={"30px"} width="45%" src="https://i.pinimg.com/474x/6a/a4/b1/6aa4b1bd5dcccf6e84495731b9f483db.jpg"/> : <Image height={"60px"} width="85%" src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg " data-theme-default="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg" data-theme-darkmode="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorIconWhiteLogo.svg"/>}
         <Box onClick={ handleToggle } _hover={{cursor:"pointer"}}  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" height="30px"  width={"30px"} borderRadius="50%" display={"flex"} alignItems="center" justifyContent={"center"} position="relative" marginRight={"-40px"}>
          {toggle ? <AiOutlineRight/> : <AiOutlineLeft/> }
         </Box>
        </Box>

        {/* Time sheet */}

        <Box height={"24"} width="100%" borderBottom={"1px solid grey"} alignContent="center" p="4">
            <Text fontSize={"13px"} w={toggle ? null : "50%"} textAlign="center" fontWeight="semibold" color={"gray.400"}>TRACK</Text>
            <Flex onClick={ () => navigate("/") }  width={"80%"} mt={toggle ? "2" : "4"} justifyContent="center" _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} height={"40px"} alignItems={"center"} gap={"20px"}>
                <BiTimeFive size={"25px"} color={currComp == "TimeSheet" ? "#25cf60" : "gray"}/>
                { toggle ? null : <Text fontSize={"15px"} color={currComp == "TimeSheet" ? "#25cf60" : "gray"} fontWeight="semibold" >Timesheet</Text>}
            </Flex>
        </Box>

        {/* Analyze */}

        <Box height={"48"} width="100%" borderBottom={"1px solid grey"} alignContent="center" p="4">
            <Text fontSize={toggle ? "10px" :"13px"} w={toggle ? null : "50%"} textAlign="center" fontWeight="semibold" color={"gray.400"}>ANALYZE</Text>
            <Flex width={"80%"} onClick={ () => navigate("/dashboard") }  mt="2" justifyContent="center" _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} height={"40px"} alignItems={"center"} gap={"20px"}>
                <AiFillDashboard size={"25px"} color={currComp == "Dashboard" ? "#25cf60" : "gray"}/>
                { toggle ? null : <Text fontSize={"15px"} color={currComp == "Dashboard" ? "#25cf60" : "gray"} fontWeight="semibold" >Dashboard</Text>}
            </Flex>
            <Flex width={"88%"} mt= "2"  justifyContent="center" height={"40px"} alignItems={"center"} gap={"20px"}>
                {/* <TbChartPie size={"25px"} color="gray"/> */}
                { toggle ? <TbChartPie size={"25px"} color="gray"/> : <Reports toggle={toggle}/>}
                {/* {toggle ? null : <AiOutlineRight/>} */}
            </Flex>
            <Flex width={"100%"} mt="2" justifyContent="center" _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} height={"40px"} alignItems={"center"} gap={"10px"}>
                {/* <GrPersonalComputer size={"23px"} color="gray"/> */}
                { toggle ? <GrPersonalComputer size={"23px"} color="gray"/> : <Computertime/>}
                {/* {toggle ? null : <AiOutlineRight/>} */}
            </Flex>
        </Box>

        {/* Manage */}

        <Box height={"36"} width="100%" borderBottom={"1px solid grey"} alignContent="center" p="4">
            <Text fontSize={ toggle ? "10px" :"13px"} w={toggle ? null : "50%"} textAlign="center" fontWeight="semibold" color={"gray.400"}>MANAGE</Text>
            <Flex width={"70%"} mt="2" onClick={ () => navigate("/projects") } justifyContent="center" _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} height={"40px"} alignItems={"center"} gap={"20px"}>
                <BsFolder2Open size={"25px"} color={currComp == "Projects" ? "#25cf60" : "gray"}/>
                { toggle ? null : <Text fontSize={"15px"} color={currComp == "Projects" ? "#25cf60" : "gray"} fontWeight="semibold" >Projects</Text>}
            </Flex>
            <Flex width={"60%"} justifyContent="center" onClick={ () => navigate("/tags") } mt="2" _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} height={"40px"} alignItems={"center"} gap={"20px"}>
                <BsTags size={"25px"} color={currComp == "Tags" ? "#25cf60" : "gray"}/>
                { toggle ? null : <Text fontSize={"15px"} color={currComp == "Tags" ? "#25cf60" : "gray"} fontWeight="semibold" >Tags</Text>}
            </Flex>
        </Box>

        {/* TEAM */}

        <Box height={"36"} width="100%" alignContent="center" p="4">
            <Text fontSize={"13px"} w={toggle ? null : "50%"} textAlign="center" fontWeight="semibold" color={"gray.400"}>TEAM</Text>
            <Flex width={"70%"} mt="2" onClick={ () => navigate("/user") } justifyContent="center" _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} height={"40px"} alignItems={"center"} gap={"20px"}>
                <FiUsers size={"25px"} color={currComp == "Users" ? "#25cf60" : "gray"}/>
                { toggle ? null : <Text fontSize={"15px"} color={currComp == "Users" ? "#25cf60" : "gray"} fontWeight="semibold" >Users</Text>}
            </Flex>
            <Flex width={"85%"} mt="2" justifyContent="center" _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} height={"40px"} alignItems={"center"} gap={"20px"}>
                <AiOutlineCheckSquare size={"25px"} color="gray"/>
                { toggle ? null : <Text fontSize={"15px"} color="gray" fontWeight="semibold" >Attendence</Text>}
            </Flex>
        </Box>

    </Box>
  )
}

export default MySidebar