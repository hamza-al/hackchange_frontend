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


            <Mentor name={"Bimal"} img={"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80%22%7D"}
                desc={"Math Tutor"} loc={"Calgary"} email={"bim2323@gmail.com"}></Mentor>
                <Mentor name={"Yen Ben"} img={"https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%22%7D"} 
                desc={"React dev"} loc={"Toronto"} email={"yen4903@gmail.com"}></Mentor>
                <Mentor name={"Yoda mashi"} img={"https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%22%7D"} 
                desc={"React dev"} loc={"Toronto"} email={"yidj445@gmail.com"}></Mentor>
                <Mentor name={"Emmet Bred"} img={"https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80%22%7D"} 
                desc={"Mucisian"} loc={"Mumbai"} email={"emmet5033@gmail.com"}></Mentor>
                <Mentor name={"Lionel messi"} img={"https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%22%7D"} 
                desc={"soccer"} loc={"Argentina"} email={"lionel3435@gmail.com"}></Mentor>
                <Mentor name={"Magnus Carlsen"} img={"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%22%7D"} 
                desc={"Chess"} loc={"Denmark"} email={"mg4343@gmail.com"}></Mentor>
                <Mentor name={"Kartik"} img={"https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%22%7D"} 
                desc={"Developer"} loc={"Surat"} email={"kart3493@gmail.com"}></Mentor>
                <Mentor name={"Mars Jupitor"} img={"https://plus.unsplash.com/premium_photo-1667511317053-4860f9513da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80%22%7D"} 
                desc={"Astronomer"} loc={"California"} email={"mar435jupi4903@gmail.com"}></Mentor>
                <Mentor name={"Krushang Modi"} img={"https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80%22%7D"} 
                desc={"Broker"} loc={"New York"} email={"modi453@gmail.com"}></Mentor>
                <Mentor name={"Sappy"} img={"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80%22%7D"} 
                desc={"Athlete"} loc={"Amsterdem"} email={"sapp455@gmail.com"}></Mentor>
                <Mentor name={"Cody Bran"} img={"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80%22%7D"} 
                desc={"Dietician"} loc={"London"} email={"cody5u45@gmail.com"}></Mentor>
                <Mentor name={"Charlie Munger"} img={"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80%22%7D"} 
                desc={"Investor"} loc={"Delhi"} email={"charle343@gmail.com"}></Mentor>

            </SimpleGrid>

        </Flex>        
    </Box>
)
}

export default Explore;
