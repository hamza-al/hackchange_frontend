import { Box, Flex, useMediaQuery, Text, Image, color, Img, Button, Icon, chakra, Highlight} from "@chakra-ui/react";
import { MdHeadset, EmailIcon, SearchIcon} from '@chakra-ui/icons'
import { MdLocationOn } from 'react-icons/md'


import React from "react";


export const Mentor = (props)=>{
    const [isNotSmall] = useMediaQuery("(min-width: 1100px)");

    return (

        <div  style={ isNotSmall ? { height: "65vh", display: 'flex', backgroundColor:'#0b0f25'}: { display: 'flex',flexDirection:'column'}}>

    <Flex
  p={2}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    w="sm"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      objectPosition="center"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      alt="avatar"
    />

    <Flex alignItems="start" px={6} py={3} bg="gray.900">
      <chakra.h1 mx={0} color="white" fontWeight="bold" fontSize="lg">
        {<Highlight
                query={[ 'Cost:']}
                styles={{ px: '2', py: '1', color:'teal.300' }}
            >
            
            Cost: 
            </Highlight>}
        {Math.floor(Math.random() * 101)} credits
      </chakra.h1>
    </Flex>

    <Box py={4} px={6}>
      <chakra.h1
        fontSize="xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Patterson johnson
      </chakra.h1>

      <chakra.p
        py={2}
        color="gray.700"
        _dark={{
          color: "gray.400",
        }}
      >
        Full Stack maker & UI / UX Designer , love hip hop music Author of
        Building UI.
      </chakra.p>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={SearchIcon} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          Choc UI
        </chakra.h1>
      </Flex>

      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={MdLocationOn} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          California
        </chakra.h1>
      </Flex>
      <Flex
        alignItems="center"
        mt={4}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <Icon as={EmailIcon} h={6} w={6} mr={2} />

        <chakra.h1 px={2} fontSize="sm">
          patterson@example.com
        </chakra.h1>
      </Flex>
    </Box>
  </Box>
</Flex>
</div>
    );


}