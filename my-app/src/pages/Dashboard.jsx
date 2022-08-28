import {
  Box,
  Button,
  Center,
  Flex,
  Highlight,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Dashboard = () => {
  return (
    <Box justifyContent={"space-between"} display={"flex"} p="6">
      <Box>
        <Box>
          <Text fontWeight={"700"} fontSize={"25px"}>
            TimeCamp - Desktop Application
          </Text>

          <Text fontWeight={"700"} fontSize={"25px"} marginTop={"20px"}>
            Computer Usage Statistics
          </Text>
          <Text marginTop={"10px"}>
            TimeCamp can track applications and sites you are actively using.
          </Text>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              comprehensive reports about your time usage
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              track time spend on application
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              track time spend on websites
            </ListItem>
          </List>
        </Box>
        <Box marginTop={"20px"}>
          <Text fontWeight={"700"} fontSize={"25px"}>
            Simple Time Tracking
          </Text>
          <Text marginTop={"10px"}>
            Most simple time tracking application right from your desktop
          </Text>

          <List spacing={1}>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              projects and tasks
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              effortless time tracking
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              automatic stopwatch
            </ListItem>
          </List>
        </Box>
        <Box marginTop={"25px"}>
          <Text fontWeight={"700"} fontSize={"25px"}>
            Effortless & Automatic
          </Text>
          <Text marginTop={"10px"}>
            TimeCamp captures your time automatically, so you don't neeed to.
          </Text>
          <Text>
            <span style={{ color: "blue" }}>window</span>
            <span> (v.1.7.2.0),</span>
            <span style={{ color: "blue" }}>Ubuntu 64-bit</span>
            <span>(v.1.7.2.0)</span>
          </Text>

          <List marginTop={"5px"} spacing={1}>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              idle time detection
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              works offline
            </ListItem>
            <ListItem>
              <ListIcon as={AiOutlineDoubleRight} />
              lightweight app - 7MB
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box w="60%">
        <Box
          marginTop="30px"
          background="lightblue"
          borderRadius={"10px"}
          padding={"20px"}
          w={"70%"}
        >
          <Image
            w={"100%"}
            src="https://cdn.timecamp.com/res/css/dashboard/timesheet-activities.1661527360.png"
          />
          <span>
            <HiOutlineExclamationCircle color="blue" fontSize={"30px"} />
          </span>
          <span>
            By default all above features are activated. if you have any privacy
            concerns you can easily change destop app behaviour by going to{" "}
            <span style={{ textDecoration: "underline", fontWeight: "700" }}>
              Settings  Add-ons  Destop App Setting page.
            </span>
          </span>
        </Box>
        <Button
          w={"70%"}
          background="green"
          color="white"
          leftIcon={<BsDownload fontSize={"20px"} />}
        >
          Download TimeCamp
        </Button>
        <Flex
          marginTop={"30px"}
          w="70%"
          justifyContent={"space-around"}
          textAlign={"center"}
        >
          <Box>
            <Image
              w={"50px"}
              src="https://cdn.timecamp.com/res/css/dashboard//sys-logo/win.1661527360.svg"
            ></Image>
            <Text color={"grey"}>windows</Text>
          </Box>
          <Box>
            <Image
              w={"50px"}
              src="https://cdn.timecamp.com/res/css/dashboard//sys-logo/osx.1661527360.svg"
            ></Image>
            <Text color={"grey"}>macOS</Text>
          </Box>
          <Box>
            <Image
              w={"50px"}
              src="https://cdn.timecamp.com/res/css/dashboard//sys-logo/ubuntu.1661527360.svg"
            ></Image>
            <Text color={"grey"}>Ubuntu</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Dashboard;
