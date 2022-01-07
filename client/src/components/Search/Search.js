import React from "react";
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
} from "@chakra-ui/react";

const Search = () => {
  return (
    <>
      <Grid h="200px" templateColumns="repeat(5, 1fr)" gap={4} fontFamily= 'IBM Plex Sans' fontWeight="600">
        <GridItem colSpan={2}>

        <FormControl width="70%" mx="auto">
        <SimpleGrid marginTop="2" columns={2} spacing={10}>
          <Box>
            <FormLabel htmlFor="education">Education</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">J.S.C</option>
              <option value="option2">S.S.C</option>
              <option value="option3">H.S.C</option>
            </Select>
          </Box>
          <Box>
            <FormLabel htmlFor="description">Job Description</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">HouseMaid</option>
              <option value="option2">Driver</option>
              <option value="option3">Gaurd</option>
              <option value="option3">Gardener</option>
            </Select>
          </Box>
          <Box>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Male</option>
              <option value="option2">Female</option>
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
            <Select placeholder="Select option">
              <option value="option1">5,000-7000</option>
              <option value="option2">7,000-10,000</option>
              <option value="option3">10,000-13,000</option>
            </Select>
          </Box>

          <Box>
            <FormLabel htmlFor="address">Address</FormLabel>
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
        <GridItem colSpan={2}>
            Worker will be shown here
        </GridItem>
      </Grid>
    </>
  );
};

export default Search;
