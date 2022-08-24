import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'700'} fontSize={'19'} mb={2}>
      {children}
    </Text>
  );
};
const List = ({ children }) => {
  return (
    <Text color={'grey'}>
      {children}
    </Text>
  );
};


export default function LargeWithAppLinksAndSocial() {
  return (
    <Box>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3,lg:6 }} spacing={5}>
          
          <Stack align={'center'} py={5}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}><List>Features</List></Link>
            <Link href={'#'}><List>Integrations</List></Link>
            <Link href={'#'}><List>Applications</List></Link>
            <Link href={'#'}><List>Product updates</List></Link>
            <Link href={'#'}><List>Customer Stories</List></Link>
            <Link href={'#'}><List>Self-hosting</List></Link>
          </Stack>

          <Stack align={'center'} py={5}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}><List>Support</List></Link>
            <Link href={'#'}><List>Knowledge base</List></Link>
            <Link href={'#'}><List>Developers API</List></Link>
            <Link href={'#'}><List>Server Status</List></Link>
          </Stack>

          <Stack align={'center'} py={5}>
            <ListHeader>Integrations</ListHeader>
            <Link href={'#'}><List>Trello</List></Link>
            <Link href={'#'}><List>Monday.com</List></Link>
            <Link href={'#'}><List>Google Calender</List></Link>
            <Link href={'#'}><List>Asana</List></Link>
            <Link href={'#'}><List>Jira</List></Link>
            <Link href={'#'}><List>All integrations</List></Link>
          </Stack>

          <Stack align={'center'} py={5}>
            <ListHeader>Resources</ListHeader>
            <Link href={'#'}><List>Contact</List></Link>
            <Link href={'#'}><List>HeySpace</List></Link>
            <Link href={'#'}><List>About us</List></Link>
            <Link href={'#'}><List>Press</List></Link>
            <Link href={'#'}><List>Become a Partner</List></Link>
          </Stack>

          <Stack align={'center'} py={5}>
            <ListHeader>Calculators</ListHeader>
            <Link href={'#'}><List>Profit Margin Calculator</List></Link>
            <Link href={'#'}><List>Online Timer</List></Link>
            <Link href={'#'}><List>Overtime Calculator</List></Link>
            <Link href={'#'}><List>ROI Calculator</List></Link>
            <Link href={'#'}><List>Time Card Calculator</List></Link>
          </Stack>

          <Stack align={'center'} py={5}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}><List>Terms</List></Link>
            <Link href={'#'}><List>Privacy</List></Link>
            <Link href={'#'}><List>Security</List></Link>
          </Stack>

        </SimpleGrid>
      </Container>

     
    </Box>
  );
}