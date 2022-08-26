import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Image,
  Td,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Table, Th, Tr } from "@chakra-ui/react";

const ShowInvoice = () => {
  const [loading, setLoading] = useState(true);
  const [InvoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/invoice/")
      .then((res) => {
        setInvoiceData(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(InvoiceData);
  if (InvoiceData.length === 0) {
    return (
      <Box marginTop={"300px"}>
       {loading === true ? (
        <Center>
          <Image src="https://app.timecamp.com/res/css/images/loader.gif" />
        </Center>
      ) : (
        ""
      )}
        {/* <Center>
          <Image
            src="https://cdn.timecamp.com/res/css/images/invoices.svg"
            alt=""
          />
        </Center>
        <Center>
          <Text fontSize={"28px"} fontWeight="600">
            You have no invoices history
          </Text>
        </Center>
        <Center marginTop={"10px"}>
          <Text fontWeight={"500"}>
            After you subscribe, all your invoices will appear here
          </Text>
        </Center>
        <Center marginTop={"30px"}>
          <Button background={"lightgreen"}>Subscribe now</Button>
        </Center>*/}
      </Box> 
    );
  }

  return (
    <Box>
      
      <Flex justifyContent={"space-between"} background={"lightgreen"}>
        <Box padding={"20px 0px 0px 30px"}>
          <AiOutlineShoppingCart fontSize={"90px"} color="white" />
          <Text color={"white"} fontWeight={500} fontSize={"40px"}>
            Invoice
          </Text>
        </Box>
        <Box textAlign={"center"} padding={"20px 30px 0px 0px"}>
          <Flex>
            {" "}
            <Image
              w="50px"
              src="https://cdn-1.webcatalog.io/catalog/timecamp/timecamp-icon.png"
            />
            <Text fontSize={"25px"} fontWeight="500" color={"white"}>
              Time Camp
            </Text>
          </Flex>
          <Text color={"white"}>address: 98, Hinjewadi,</Text>
          <Text color={"white"}>City: Darjeeling</Text>
          <Text color={"white"}> Country: India</Text>
          <Text color={"white"}>Postal: 252303</Text>
        </Box>
      </Flex>
      <Table>
        <Tr>
          <Th>Name</Th>
          <Th>city</Th>
          <Th>Postal</Th>
          <Th>Duration</Th>
          <Th>Price</Th>
        </Tr>
        {InvoiceData &&
          InvoiceData.map((invoice) => (
            <Tr key={invoice._id}>
              <Td>{invoice.name}</Td>
              <Td>{invoice.city}</Td>
              <Td>{invoice.postal}</Td>
              <Td>one Year</Td>
              <Td>$100</Td>
            </Tr>
          ))}
      </Table>
    </Box>
  );
};

export default ShowInvoice;
