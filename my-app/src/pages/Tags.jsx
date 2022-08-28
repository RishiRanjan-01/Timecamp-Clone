import { Box, Button, Flex, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Tags = () => {
  const [addTag, setAddTag] = useState(false);

  return (
    <Stack height="100%" width="50%" p="2">
      <Box p="2">
      <Button onClick={() => setAddTag(true)} float={"right"} color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>+ Add tag list</Button>
      </Box>
      <Box p="3">
        <Text color={"black"} fontWeight="semibold">Manage your tags, like list of customers or activities. All workspace members can assign tags to time entries, when they track time. Project managers can set lists of tags for projects. Reports can be filtered and grouped by tags.</Text>
      </Box>
      { addTag ? <Box height={"max-content"} width="100%" backgroundColor={"#f8f8f8"} display="flex" justifyContent={"space-between"} p="4">
        <Input focusBorderColor='#25cf60' fontWeight={"semibold"} width={"65%"}/>
        <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Save</Button>
        <Button onClick={() => setAddTag(false)} variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.900">Cancel</Button>
      </Box> : null }
      <hr />
      <Flex gap={"15PX"} p="2">
        <Button color={"aliceblue"} bgColor="#25cf60" _hover={{opacity:"0.7"}}>Save Setting</Button>
        <Button  variant={"outline"} fontWeight="normal" bgColor={"#fff"} color="gray.900">Back to addons list</Button>
      </Flex>
    </Stack>
  )
}

export default Tags