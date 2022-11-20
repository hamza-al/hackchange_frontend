import { Box, Flex, useMediaQuery, Text, Image, color, Img, Button } from "@chakra-ui/react";
import React from "react";




function Header() {
  const [isNotSmall] = useMediaQuery("(min-width: 1100px)");

  return (
    <div  style={ isNotSmall ? { height: "100vh", display: 'flex', backgroundColor:'#0b0f25',overflowX:'hidden'}: { display: 'flex',flexDirection:'column'}}>
      <Flex
      
        direction={isNotSmall ? "row" : "column"}
        alignSelf={"flex-start"}
        pl={isNotSmall ? 20 : 12}
        pr={isNotSmall ? 20 : 12}
      >
        <Box mt={isNotSmall ? 16 : 0}>
          <Text color={'white'} fontSize={isNotSmall ? "5xl" : "4xl"} fontWeight={"semibold"}>
            Hey 👋,
          </Text>
          <Text
            fontSize={isNotSmall ? "7xl" : "5xl"}
            fontWeight={"semibold"}
            bgGradient={"linear(to-r,teal.400, cyan.400)"}
            bgClip={"text"}
          >
           Welcome to nameless
          </Text>
          <Text fontSize={isNotSmall ? "xl" : "m" } color='white'>
            {" "}
            Tutorize is a platform that aims to push people to help and learn from each other. By rewarding members who help others, Tutorize uses teaching as its currency! Help others to recieve tokens you can then redeem to recieve help from others
            {" "}
          </Text>
          <Button mt={30} _hover={{color:'#0b0f25', backgroundColor:'white'}} color={'white'} variant={"outline"}  >
            
             Get Started
            
          </Button>
          
        </Box> 
        
        
      </Flex>
      
      { <Img p={50} src="Saly-26.png"  boxSize='700px'></Img> }
      
    </div>
  );
}

export default Header;
