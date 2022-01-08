import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";

import image1 from "../../images/review1.png";
const Review = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      review:
        "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
      content: "Amazing Service",
      image: "../../images/review1.png",
    },
    {
      id: 2,
      name: "John Doe",
      review:
        "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
      content: "Amazing Service",
      image: "../../images/review2.png",
    },
  ];
  const reviewData = data;

  return (
    <Box fontFamily="IBM Plex Sans">
      <Box marginTop="166px">
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Text fontSize="48px" fontFamily="IBM Plex Sans" fontWeight="600">
            We served over 12000+{" "}
          </Text>
          <Text fontSize="48px" fontFamily="IBM Plex Sans" fontWeight="600">
            Customers
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Text fontSize="18px" fontFamily="IBM Plex Sans" fontWeight="600">
            Our customer are very satisfied to us. Hopefully we can serve
          </Text>
          <Text fontSize="18px" fontFamily="IBM Plex Sans" fontWeight="600">
            better quality to them always
          </Text>
        </Flex>
      </Box>
      <SimpleGrid
        columns={2}
        spacingX="20px"
        spacingY="20px"
        width="85%"
        mx="auto"
        marginTop="66px"
      >
        {reviewData.map((data) => (
          <Box key={data.id} bgColor="#FFFFFF">
            <Flex>
              <Box width="75px" height="73px">
                {/* <Image src={data.image} width="100%" height="100%"></Image> */}
                <Image src={image1}></Image>
              </Box>
              <Box paddingLeft="50px">
                <Text
                  fontWeight="600"
                  fontFamily="IBM Plex Sans"
                  fontSize="16px"
                >
                  {data.content}
                </Text>
                <Text
                  fontWeight="600"
                  fontFamily="IBM Plex Sans"
                  fontSize="14px"
                >
                  {data.name}
                </Text>
                <Text
                  fontWeight="400"
                  fontFamily="IBM Plex Sans"
                  fontSize="16px"
                  marginTop="30px"
                >
                  {data.review}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Review;
