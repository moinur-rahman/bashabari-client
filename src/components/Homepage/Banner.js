import React from "react";
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Banner1 from "../../images/banner1.jpg";
import Banner2 from "../../images/banner2.jpg";
import Banner3 from "../../images/banner3.jpg";
import Banner4 from "../../images/banner4.jpg";
import Banner5 from "../../images/banner5.jpg";

const Banner = () => {
  return (
    <Box
      width="100%"
      maxH="600px"
      height="590px"
      bgImage={Banner5}
      bgSize="cover"
      bgPosition="center center"
    >
      <SimpleGrid columns={2}>
        <Flex
          width="60%"
          height="80vh"
          justifyContent="center"
          alignItems="center"
          mx="auto"
        >
          <Box>
            <Text fontSize="40px" fontWeight="700" color="black">
              Your Personal Assistant
            </Text>
            <Text fontSize="30px" fontWeight="400" color="black">
              One-stop solution for your services. Order any service, anytime.
            </Text>
          </Box>{" "}
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Banner;
