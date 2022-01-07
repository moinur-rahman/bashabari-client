import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  SimpleGrid,
  Box,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

import "../../styles/Registration.css";
const backgroundImageStyle = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/images/bg.jpg)",
};

const Register = () => {
  const [input, setInput] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    age: "",
    education: "",
    jobDescription: "",
    gender: "",
    address: "",
    salaryRange: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };
  console.log(user);
  const onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/userWorker", {
        name: user.name,
        email: user.email,
        password: user.password,
        phoneNo: user.phoneNo,
        age: user.age,
        education: user.education,
        gender: user.gender,
        address: user.address,
        jobDescription: user.jobDescription,

        salaryRange: user.salaryRange,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const isError = input === "";
  return (
    <div style={backgroundImageStyle}>
      <form onSubmit={onFormSubmit}>
        <FormControl
          width="50%"
          mx="auto"
          fontFamily="IBM Plex Sans"
          fontWeight="600"
          color="black"
          backgroundColor="white"
          padding="5%"
        >
          <Text align="center" fontSize="30px" color="blue" fontWeight="600">
            Register for Workers
          </Text>
          <FormLabel htmlFor="email" fontWeight="600">
            Email address
          </FormLabel>
          <Input
            border="3px solid"
            name="email"
            type="email"
            value={user.email}
            onChange={onChange}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <br />

          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}

          <FormLabel marginTop="2" htmlFor="name" fontWeight="600">
            Name
          </FormLabel>
          <Input
            name="name"
            type="text"
            border="3px solid"
            value={user.name}
            onChange={onChange}
          />

          <br />
          <FormLabel marginTop="2" htmlFor="phoneNo" fontWeight="600">
            Phone No
          </FormLabel>
          <Input
            name="phoneNo"
            type="number"
            border="3px solid"
            value={user.phoneNo}
            onChange={onChange}
          />

          <br />

          <FormLabel marginTop="2" htmlFor="password1" fontWeight="600">
            Password
          </FormLabel>
          <Input
            name="password"
            type="password"
            border="3px solid"
            value={user.password}
            onChange={onChange}
          />

          <br />
          <FormLabel marginTop="2" htmlFor="password2" fontWeight="600">
            Repeat Password
          </FormLabel>
          <Input id="password2" type="password" border="3px solid" />

          <br />

          <FormLabel marginTop="2" htmlFor="email" fontWeight="600">
            Age
          </FormLabel>
          <Input
            name="age"
            type="number"
            border="3px solid"
            value={user.age}
            onChange={onChange}
          />

          <br />

          <SimpleGrid marginTop="2" columns={2} spacing={5}>
            <Box>
              <FormLabel htmlFor="education" fontWeight="600">
                Education
              </FormLabel>
              <Select
                placeholder="Select option"
                name="education"
                value={user.education}
                onChange={onChange}
              >
                <option value="jsc">J.S.C</option>
                <option value="ssc">S.S.C</option>
                <option value="ssc">H.S.C</option>
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="description" fontWeight="600">
                Job Description
              </FormLabel>
              <Select
                placeholder="Select option"
                name="jobDescription"
                value={user.jobDescription}
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
                value={user.gender}
                onChange={onChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </Box>
            <Box>
              <FormLabel htmlFor="salary" fontWeight="600">
                Salary Range
              </FormLabel>
              <Select
                placeholder="Select option"
                name="salaryRange"
                value={user.salaryRange}
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
                value={user.address}
                onChange={onChange}
              >
                <option value="Pahartoli">Pahartoli</option>
                <option value="Rauzan">Rauzan </option>
                <option value="Noapara">Noapara</option>
                <option value="Tapbiddut">Tapbiddut</option>
              </Select>
            </Box>
          </SimpleGrid>

          <Flex justifyContent="center" marginTop="10px">
            <Button
              colorScheme="blue"
              size="lg"
              color="white"
              paddingX="100px"
              paddingY="15px"
              borderRadius="10px"
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </form>
    </div>
  );
};

export default Register;
