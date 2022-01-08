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
  Button,
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
    rating: "",
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
    axios
      .post("http://localhost:8000/userWorker/search", filter)
      .then((data) => {
        setUser(data.data);
      });
  }, [filter]);

  const showRating = (star) => {
    if (star == 1)
      return <i className="fas fa-star" style={{ color: "#efa716" }}></i>;
    if (star == 2)
      return (
        <>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
        </>
      );
    if (star == 3)
      return (
        <>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
        </>
      );
    if (star == 4)
      return (
        <>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
        </>
      );
    if (star == 5)
      return (
        <>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
          <i className="fas fa-star" style={{ color: "#efa716" }}></i>
        </>
      );
  };

  return (
    <Box width="80%" mx="auto">
      <Grid
        h="200px"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        fontFamily="IBM Plex Sans"
        fontWeight="600"
      >
        <GridItem
          colSpan={3}
          marginTop="100px"
          fontFamily="IBM Plex Sans"
          fontWeight="600"
          color="black"
          backgroundColor="white"
          padding="5%"
        >
          <FormControl width="70%" mx="auto">
            <SimpleGrid marginTop="2" columns={2} spacing={10}>
              <Box>
                <FormLabel htmlFor="education" fontWeight="600">
                  Education
                </FormLabel>
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
                <FormLabel htmlFor="description" fontWeight="600">
                  Job Description
                </FormLabel>

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
                <FormLabel htmlFor="gender" fontWeight="600">
                  Gender
                </FormLabel>

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
                <FormLabel htmlFor="age" fontWeight="600">
                  Age
                </FormLabel>
                <Select placeholder="Select option" name="age" value={filter.age} onChange={onChange}>
                  <option value="10-20">10-20</option>
                  <option value="21-30">21-30</option>
                  <option value="31-40">31-40</option>

                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="salary" fontWeight="600">
                  Salary Range
                </FormLabel>
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
                <FormLabel htmlFor="address" fontWeight="600">
                  Address
                </FormLabel>

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

              <Box>
                <FormLabel htmlFor="address" fontWeight="600">
                  Rating
                </FormLabel>
                <Select
                  placeholder="Select option"
                  name="rating"
                  value={filter.rating}
                  onChange={onChange}
                >
                  <option value="1">1 star</option>
                  <option value="2">2 star</option>
                  <option value="3">3 star</option>
                  <option value="4">4 star</option>
                  <option value="5">5 star</option>

                </Select>
              </Box>
            </SimpleGrid>
          </FormControl>
        </GridItem>
        <GridItem marginTop="20px" height="85vh" colSpan={3} overflowY="scroll">
          <Text fontSize="20px" fontWeight="600">
            Search Result:
          </Text>
          <SimpleGrid columns={1} gap={10}>
            {user.map((pd) => (

              <Flex
                key={pd._id}
                border="2px solid black"
                justifyContent="space-around"
              >
                <Table width={300}>

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
                        <Text>{pd.jobDescription}</Text>
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
                    <Tr>
                      <Td padding={2}>
                        <Text>Rating:</Text>
                      </Td>
                      <Td padding={2}>
                        <Text>{showRating(pd.rating)}</Text>
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
