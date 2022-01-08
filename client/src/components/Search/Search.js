import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  SimpleGrid,
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Table,
  Tbody,
  Tr,
  Td,
  Flex,
  Button
} from "@chakra-ui/react";

import ProfilePic from "../../images/profilePic.png";

const Search = () => {
  const [user, setUser] = useState([]);
  const data = [
    {
      _id: 1,
      name: "imtiaz ali",
      age: "30",
      education: "H.S.C",
      address: "pahartoli",
      phoneNo: "01718925494",
      gender: "male",
      job: "housemaid",
    },
    {
      _id: 2,
      name: "imtiaz ali",
      age: "30",
      education: "H.S.C",
      address: "pahartoli",
      phoneNo: "01718925494",
      gender: "male",
      job: "housemaid",
    },
    {
      _id: 3,
      name: "imtiaz ali",
      age: "30",
      education: "H.S.C",
      address: "pahartoli",
      phoneNo: "01718925494",
      gender: "male",
      job: "housemaid",
    },
    {
      _id: 4,
      name: "imtiaz ali",
      age: "30",
      education: "H.S.C",
      address: "pahartoli",
      phoneNo: "01718925494",
      gender: "male",
      job: "housemaid",
    },
    {
      _id: 5,
      name: "imtiaz ali",
      age: "30",
      education: "H.S.C",
      address: "pahartoli",
      phoneNo: "01718925494",
      gender: "male",
      job: "housemaid",
    },
  ];

  // useEffect(()=>{

  // },[user])

  return (
    <Box width="80%" mx="auto">
      <Grid
        h="200px"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        fontFamily="IBM Plex Sans"
        fontWeight="600"
      >
        <GridItem colSpan={3} marginTop="100px"  fontFamily="IBM Plex Sans"
          fontWeight="600"
          color="black"
          backgroundColor="white"
          padding="5%" >
          <FormControl width="70%" mx="auto">
            <SimpleGrid marginTop="2" columns={2} spacing={10}>
              <Box>
                <FormLabel htmlFor="education" fontWeight="600">Education</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">J.S.C</option>
                  <option value="option2">S.S.C</option>
                  <option value="option3">H.S.C</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="description" fontWeight="600">Job Description</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">HouseMaid</option>
                  <option value="option2">Driver</option>
                  <option value="option3">Gaurd</option>
                  <option value="option3">Gardener</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="gender" fontWeight="600">Gender</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="age" fontWeight="600">Age</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">20-30</option>
                  <option value="option1">30-40</option>
                  <option value="option1">40-50</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="salary" fontWeight="600">Salary Range</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">5,000-7000</option>
                  <option value="option2">7,000-10,000</option>
                  <option value="option3">10,000-13,000</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="address" fontWeight="600">Address</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">Pahartoli</option>
                  <option value="option2">Rauzan </option>
                  <option value="option3">Noapara</option>
                  <option value="option3">Tapbiddut</option>
                </Select>
              </Box>
            </SimpleGrid>
            
          </FormControl>
        </GridItem>
        <GridItem marginTop="20px" height="85vh" colSpan={3} overflowY="scroll">
          <Text fontSize="20px" fontWeight="600" >Search Result:</Text>
          <SimpleGrid columns={1} gap={10}>
            {data.map((pd) => (
              <Flex key={pd._id} border="2px solid black" justifyContent="space-around">
                <Table width={150}>
                  <Tbody>
                    <Tr>
                      <Td padding={2}>
                        <Text>Name:</Text>
                      </Td>
                      <Td padding={2}>
                        <Text>{pd.name}</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td padding={2}>
                        <Text>Age:</Text>
                      </Td>
                      <Td padding={2}>
                        <Text>{pd.age}</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td padding={2}>
                        <Text>Education:</Text>
                      </Td>
                      <Td padding={2}>
                        <Text>{pd.education}</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td padding={2}>
                        <Text>Gender:</Text>
                      </Td>
                      <Td padding={2}>
                        <Text>{pd.gender}</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td padding={2}>
                        <Text>Job:</Text>
                      </Td>
                      <Td padding={2}>
                        <Text>{pd.job}</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td padding={2}>
                        <Text>Phone No:</Text>
                      </Td>
                      <Td padding={2}>
                        <Text>{pd.phoneNo}</Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td padding={2}>
                        <Text>Address:</Text>
                      </Td>
                      <Td padding={2}>
                        <Text>{pd.address}</Text>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Image src={ProfilePic} height={200} width={200}></Image>
              </Flex>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Search;
