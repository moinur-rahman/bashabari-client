import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import driver from "../../images/driver.jpg";
import housemaid from "../../images/housemaid.png";
import guard from "../../images/guard.png";
import gardener from "../../images/gardener.png";
const Worker = () => {
  return (
    <Flex justifyContent="center">
      <Flex
        width="70%"
        position="absolute"
        top="600px"
        justifyContent="space-evenly"
        alignItems="center"
        backgroundColor="white"
        borderRadius="50px"
      >
        <Box marginTop="30px">
          <Image width="80px" height="80px" src={driver}></Image>
          <Text textAlign="center">Driver</Text>
        </Box>
        <Box marginTop="30px">
          <Image width="80px" height="80px" src={housemaid}></Image>
          <Text textAlign="center">House Maid</Text>
        </Box>
        <Box marginTop="30px">
          <Image width="80px" height="80px" src={guard}></Image>
          <Text textAlign="center">Guard</Text>
        </Box>
        <Box marginTop="30px">
          <Image width="80px" height="80px" src={gardener}></Image>
          <Text textAlign="center">Gardener</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Worker;
