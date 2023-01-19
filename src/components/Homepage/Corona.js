import React from 'react';
import { Flex, SimpleGrid, Box, Image, Button, Text } from "@chakra-ui/react"
import mask from "../../images/mask.png"

const Corona = () => {
    return (
        <Flex 
        justifyContent="space-evenly"
        alignItems="center"
        height="645px">
            <Box height="520px" width="590px">
        <Flex
          
          alignItems="center"
          height="124px"
          width="590px"
        >
          <Text fontFamily="Asap" fontSize="42px" fontWeight="600">
            Protect Yourself
          </Text>
        </Flex>
        <Flex
          
          alignItems="center"
          height="124px"
          width="590px"
        >
          <Text fontFamily="Asap" fontSize="48px" fontWeight="600" color="#FF465C">
            Covid-19 Prevention <br/> Product Combo  
          </Text>
        </Flex>
        <Flex
          
          alignItems="center"
          width="590px"
          height="93px"
          marginTop="21px"
        >
          <Text fontFamily="Asap" fontSize="16px" fontWeight="300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          <br />veniam, quis nostrud exercitation ullamco consequat.
            <br />
            deleniti ipsum officia dolores repellat laudantium obcaecati neque.
          </Text>
        </Flex>
        <Flex width="590px"  marginTop="40px">
          <Button
            fontFamily="Asap"
            fontSize="14px"
            fontWeight="600"
            background="rgba(225, 36, 84, 1)"
            height="42px"
            width="195px"
            color="rgba(255, 255, 255, 1)"
          >
            View All
          </Button>
        </Flex>
      </Box>

            <Flex justifyContent="center" alignItems="center">
            <Box width="480px" height="408px">
                <Image src={mask}>
                </Image>
            </Box>
        </Flex>
        </Flex>
    );
};

export default Corona;