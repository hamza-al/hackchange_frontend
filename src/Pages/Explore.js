import { Heading, Highlight, Box, SimpleGrid, Flex, useMediaQuery, Text, Image, color, Img, Button, Tag, Stack } from "@chakra-ui/react";
import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import {Mentor} from "../components/Mentor"
import NavBar from "./Navbar";


function Explore() {

  return(
    <Box bg={'#0b0f25'}>
      <NavBar/>
        <Flex 
          
          w="full"
          alignItems="start"
          justifyContent="start"
          ml={220}
        >
        <Heading lineHeight='tall'>
            <Highlight
                query={[ 'connect']}
                styles={{ px: '2', py: '1', color:'teal.300' }}
            >
            
            Connect with the following mentors who are available to help!
            </Highlight>
        </Heading>
        </Flex>

        <Flex 
        flexDirection={'column'}
        
          p={[0, 5, 5, 5]}
          w="full"
          alignItems="start"
          justifyContent="center"
        >
           <Stack paddingRight={200} paddingLeft={210} pb={'10'}  direction={'column'} justify={'center'} alignItems='start' color='grey' spacing={'3'}>
                <Text fontWeight={'bold'} fontSize={'large'} color='white'>
                    Which skills would you like to learn
                </Text>
                <Stack    direction={'row'} justify={'center'} alignItems='center' color='grey' spacing={'10px'}>
                
                <Tag m={1} p={2} size={'s'} variant='solid' colorScheme='cyan'>
                        JavaScript
                </Tag>
                <Tag m={1}  p={2} size={'s'} variant='solid' colorScheme='red'>
                        Python
                </Tag>
                <Tag m={1}  p={2} size={'s'} variant='solid' colorScheme='pink'>
                        C
                </Tag>
                <Tag m={1}  p={2} size={'s'} variant='solid' colorScheme='purple'>
                        Data structures
                </Tag>
                <Tag m={1}  p={2} size={'s'} variant='solid' colorScheme='yellow'>
                        {<FaEllipsisH color="white"/>}
                </Tag>
                </Stack>
                
            </Stack>

          
          
            <SimpleGrid columns={4} spacing={0} paddingRight={200} paddingLeft={200}>

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
