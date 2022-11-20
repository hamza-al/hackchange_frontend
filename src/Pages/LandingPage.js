import { Box } from "@chakra-ui/react";
import Header from "./Header";
import NavBar from "./Navbar";

export default function LandingPage(){
    return(
        <Box    bg={'#0b0f25'}>
            <NavBar></NavBar>
            <Header></Header>
            
        </Box>
    )
}