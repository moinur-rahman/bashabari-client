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
} from "@chakra-ui/react";
import axios from "axios";

import ProfilePic from "../../images/profilePic.png";

const Search = () => {
  const [user, setUser] = useState([]);

  const [filter, setFilter] = useState({
    age: "",
    education: "",
    jobDescription: "",
    gender: "",
    address: "",
    salaryRange: "",
  });
 
  const onChange = (event) => {
    const { name, value } = event.target;

    setFilter((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    axios.post("http://localhost:8000/userWorker/search",filter).then((data) => {
      setUser(data.data);
    });
  }, [filter]);

  return (
    <>
      <Grid
        h="200px"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        fontFamily="IBM Plex Sans"
        fontWeight="600"
      >
        <GridItem colSpan={2}>
          <FormControl width="70%" mx="auto">
            <SimpleGrid marginTop="2" columns={2} spacing={10}>
              <Box>
                <FormLabel htmlFor="education">Education</FormLabel>
                <Select
                  placeholder="Select option"
                  name="education"
                  value={filter.education}
                  onChange={onChange}
                >
                  <option value="J.S.C">J.S.C</option>
                  <option value="S.S.C">S.S.C</option>
                  <option value="H.S.C">H.S.C</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="description">Job Description</FormLabel>
                <Select
                  placeholder="Select option"
                  name="jobDescription"
                  value={filter.jobDescription}
                  onChange={onChange}
                >
                  <option value="HouseMaid">HouseMaid</option>
                  <option value="Driver">Driver</option>
                  <option value="Guard">Gaurd</option>
                  <option value="Gardener">Gardener</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <Select
                  placeholder="Select option"
                  name="gender"
                  value={filter.gender}
                  onChange={onChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="age">Age</FormLabel>
                <Select placeholder="Select option">
                  <option value="option1">20-30</option>
                  <option value="option1">30-40</option>
                  <option value="option1">40-50</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="salary">Salary Range</FormLabel>
                <Select
                  placeholder="Select option"
                  name="salaryRange"
                  value={filter.salaryRange}
                  onChange={onChange}
                >
                  <option value="5,000-7000">5,000-7000</option>
                  <option value="7,000-10,000">7,000-10,000</option>
                  <option value="10,000-13,000">10,000-13,000</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="address">Address</FormLabel>
                <Select
                  placeholder="Select option"
                  name="address"
                  value={filter.address}
                  onChange={onChange}
                >
                  <option value="Pahartoli">Pahartoli</option>
                  <option value="Rauzan">Rauzan </option>
                  <option value="Noapara">Noapara</option>
                  <option value="Tapbiddut">Tapbiddut</option>
                </Select>
              </Box>
            </SimpleGrid>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <SimpleGrid columns={1} gap={10}>
            {user.map((pd) => (
              <Flex
                key={pd._id}
                border="2px solid black"
                justifyContent="space-around"
              >
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
    </>
  );
};

export default Search;
