import { Box, Flex, Link, Popover, PopoverContent, PopoverTrigger, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart, AiOutlineInfoCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsChat } from 'react-icons/bs'
import { GoGift } from 'react-icons/go'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { IoBookOutline } from 'react-icons/io5'

const Reports = () => {
  return (
    <div>
        <Box>
                   <Popover trigger={"hover"} placement={"right"} >
                     <PopoverTrigger>
                      <Link color={"gray.500"} _hover={{color:"#25cf60" }}>
                        <Text>Reports</Text>
                      </Link>
                     </PopoverTrigger>
                     <PopoverContent fontSize="14px" width="210px" p="4"  border="1px solid green">
                      <Stack>
                      <Flex _hover={{backgroundColor:"#f8f8f8",cursor:"pointer"}} p="2" alignItems="center" gap="25px" >
                        <AiOutlineInfoCircle size={"22px"} color="gray"/>
                        <Text fontSize="13px">Help</Text>
                      </Flex>
                      <Flex _hover={{backgroundColor:"#f8f8f8",cursor:"pointer"}} p="2" alignItems="center" gap="25px" >
                        <IoBookOutline size={"22px"} color="gray"/>
                        <Text fontSize="13px">Knowldege base</Text>
                      </Flex>
                      <Flex _hover={{backgroundColor:"#f8f8f8", cursor:"pointer"}} p="2" alignItems="center" gap="25px" >
                        <BsChat size={"22px"} color="gray"/>
                        <Text fontSize="13px">Send feedback</Text>
                      </Flex>
                      <Flex _hover={{backgroundColor:"#f8f8f8", cursor:"pointer"}} p="2" alignItems="center" gap="25px" >
                        <AiOutlineHeart size={"22px"} color="gray"/>
                        <Text fontSize="13px">Become a Partner</Text>
                      </Flex>
                      <hr />
                      <Flex _hover={{backgroundColor:"#f8f8f8", cursor:"pointer"}} p="2" alignItems="center" gap="25px" >
                        <GoGift size={"22px"} color="gray"/>
                        <Text fontSize="13px">What's new</Text>
                      </Flex>
                      <Flex _hover={{backgroundColor:"#f8f8f8", cursor:"pointer"}} p="2" alignItems="center" gap="25px" >
                        <HiOutlineSpeakerphone size={"22px"} color="gray"/>
                        <Text fontSize="13px">Suggest a feature</Text>
                      </Flex>
                    </Stack>
                    </PopoverContent>
                    </Popover>
                </Box>
    </div>
  )
}

export default Reports