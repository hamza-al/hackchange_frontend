import { Heading, Highlight, Box, SimpleGrid, Flex, useMediaQuery, Text, Image, color, Img, Button } from "@chakra-ui/react";
import React from "react";
import {Mentor} from "../components/Mentor"


function Explore() {

  return(
    <Box    bg={'#0b0f25'}>


        <Flex 
          paddingTop={100}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
        <Heading lineHeight='tall'>
            <Highlight
                query={['available', 'mentors', 'connect']}
                styles={{ px: '2', py: '1', borderRadius: '10px', bg: 'teal.100' }}
            >
            Connect with the following mentors who are available to help!
            </Highlight>
        </Heading>
        </Flex>

        <Flex 
          p={[0, 5, 5, 5]}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
            <SimpleGrid columns={4} spacing={0} paddingRight={200} paddingLeft={200} border="white">

                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>
                <Mentor></Mentor>

            </SimpleGrid>

        </Flex>        
    </Box>
)
}

export default Explore;
