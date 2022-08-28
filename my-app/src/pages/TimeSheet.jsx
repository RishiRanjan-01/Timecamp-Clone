import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import timesheet from "../components/landing/images/Timesheet.PNG"
const TimeSheet = () => {
  return (
    <Box height="100%" width="100%">
      <Image src={timesheet} alt="Timesheet Callendly"/>
    </Box>
  )
}

export default TimeSheet
