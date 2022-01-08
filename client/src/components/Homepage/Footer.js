import { Box, Flex, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box marginTop="100px" backgroundColor="#ccf5ff" paddingTop="20px">
      <Grid h="200px" templateColumns="repeat(7, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Box width="60%" mx="auto">
            <Text marginTop="35px">
              Tempora dolorem voluptatum nam vero assumenda voluptate, facilis
              ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>
            <Text
              fontWeight="600"
              fontSize="18px"
              fontFamily="Asap"
              marginBottom="30px"
            >
              Departments
            </Text>
            <Text>HouseMaid</Text>
            <Text>Driver</Text>
            <Text>Guard</Text>
            <Text>Gardener</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>
            <Text
              fontWeight="600"
              fontSize="18px"
              fontFamily="Asap"
              marginBottom="30px"
            >
              Services
            </Text>
            <Text>HouseMaid</Text>
            <Text>Driver</Text>
            <Text>Guard</Text>
            <Text>Gardener</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>
            <Text
              fontWeight="600"
              fontSize="18px"
              fontFamily="Asap"
              marginBottom="30px"
            >
              Useful Links
            </Text>
            <Text>Home</Text>
            <Text>Search for worker</Text>
            <Text>Register</Text>
            <Text>Log In</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Text fontWeight="600" fontSize="18px" fontFamily="Asap">
              Get In Touch
            </Text>
            <Text marginY="14px" marginTop="14px">
              Support Available 24/7
            </Text>
            <Text fontWeight="600" fontSize="20px" fontFamily="Asap">
              Support@email.com
            </Text>

            <Text fontWeight="600" fontSize="18px" fontFamily="Asap">
              Mon to Fri : 08:30 - 18:00
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
