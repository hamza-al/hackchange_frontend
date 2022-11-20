import { Box, Flex, useMediaQuery, Text, Image, color, Img, Button } from "@chakra-ui/react";
import React from "react";
import {Mentor} from "../components/Mentor"


function Explore() {
  const [isNotSmall] = useMediaQuery("(min-width: 1100px)");

  return (
    <div  style={ isNotSmall ? { height: "100vh", display: 'flex', backgroundColor:'#0b0f25'}: { display: 'flex',flexDirection:'column'}}>

    

    </div>
  );
}

export default Explore;
