import { Box, Flex, Popover, PopoverContent, PopoverTrigger, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'
import { CgIcecream } from 'react-icons/cg'
import { GoCalendar} from 'react-icons/go'
import { GrCursor, GrPersonalComputer } from 'react-icons/gr'
import { HiOutlineCursorClick} from 'react-icons/hi'
import { IoIosRocket } from 'react-icons/io'
import { TbChartPie } from 'react-icons/tb'

const Computertime = () => {
  return (
    <>
    <Box>
                   <Popover trigger={"hover"} placement={"right"} >
                     <PopoverTrigger>
                      {/* <Link color={"gray.500"} _hover={{color:"#25cf60" }}>
                        <Text>Reports</Text>
                      </Link> */}
                      <Box m={"auto"} width={"245px"}  _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} height="100%"  display={"flex"} gap="10px" p={"2"} justifyContent="center"  alignItems="center">
                        <GrPersonalComputer size={"23px"} color="gray"/>
                        <Text color={"gray"} fontWeight="semibold">Computer time</Text>
                        <AiOutlineRight/>
                      </Box>
                     </PopoverTrigger>
                     <PopoverContent fontSize="14px" width="300px"  p="4"  border="1px solid green">
                      <Stack p={"4"} height="725px" gap={"5px"}>
                        <Text fontSize={"13px"} fontWeight="semibold" color={"gray.400"}>COMPUTER TIME REPORTS</Text>
                         <Flex width={"100%"} gap="20px" alignItems={"center"} _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} >
                            <CgIcecream size={"25px"} color="gray"/>
                            <Text fontSize={"15px"} fontWeight="semibold" color={"blackAlpha.800"}>Away time</Text>
                         </Flex>
                         <Flex width={"100%"} gap="20px" alignItems={"center"} _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} >
                            <GrCursor size={"25px"} color="gray"/>
                            <Text fontSize={"15px"} fontWeight="semibold" color={"blackAlpha.800"}>Activites</Text>
                         </Flex>
                         <Flex width={"100%"} gap="20px" alignItems={"center"} _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} >
                            <BiCategoryAlt size={"25px"} color="gray"/>
                            <Text fontSize={"15px"} fontWeight="semibold" color={"blackAlpha.800"}>Categories</Text>
                         </Flex>
                         <Flex width={"100%"} gap="20px" alignItems={"center"} _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} >
                            <GoCalendar size={"25px"} color="gray"/>
                            <Text fontSize={"15px"} fontWeight="semibold" color={"blackAlpha.800"}>Timeline</Text>
                         </Flex>
                         <Flex width={"100%"} gap="20px" alignItems={"center"} _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} >
                            <IoIosRocket size={"25px"} color="gray"/>
                            <Text fontSize={"15px"} fontWeight="semibold" color={"blackAlpha.800"}>Goals</Text>
                         </Flex>
                         <Flex width={"100%"} gap="20px" alignItems={"center"} _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} >
                            <HiOutlineCursorClick size={"25px"} color="gray"/>
                            <Text fontSize={"15px"} fontWeight="semibold" color={"blackAlpha.800"}>Efficiency</Text>
                         </Flex>
                         <Flex width={"100%"} gap="20px" alignItems={"center"} _hover={{cursor:"pointer",backgroundColor:"#f8f8f8",  borderRadius:"7px"}} >
                            <TbChartPie size={"25px"} color="gray"/>
                            <Text fontSize={"15px"} fontWeight="semibold" color={"blackAlpha.800"}>User statistics</Text>
                         </Flex>
                      </Stack>
                    </PopoverContent>
                    </Popover>
                </Box>
    </>
  )
}

export default Computertime