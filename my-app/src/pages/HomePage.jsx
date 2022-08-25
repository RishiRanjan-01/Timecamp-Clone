import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import MySidebar from '../components/MySidebar'

const HomePage = () => {

    const [toggle, setToggle] = useState(false);

    const handleToogle = () => {
        setToggle(!toggle)
    }

  return (
    <Box height={"100vh"} width="100" display="flex">
        <MySidebar setboxWidth={handleToogle} />
        <Box height={"100%"} width={ toggle ? "95%" : "85%"}>

            {/* Top Premium purchase */}
            <Box width={"100%"} height="16" border={"1px solid red"} p="6" display="flex" alignItems={"center"} justifyContent={"space-between"} >
                <Box>
                    <Text fontSize={"xl"} fontWeight="semibold">Timesheet</Text>
                </Box>
                <Box height={"100%"} width="32" border={"1px solid red"} >
    
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default HomePage