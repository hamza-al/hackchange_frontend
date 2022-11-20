import { Box } from "@chakra-ui/react";
import { Mentor } from "../components/Mentor";
import Header from "./Header";
import NavBar from "./Navbar";

export default function LandingPage(){
    console.log('hello')
    return(
        <Box  overflowY={'hidden'}     bg={'#0b0f25'}>
            <NavBar></NavBar>
            <Header></Header>
            
        </Box>
    )
}