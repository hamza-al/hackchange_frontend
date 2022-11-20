import React from "react";
import { Flex, Box, Stack, Text, Spacer, Button } from "@chakra-ui/react";

import {
  FaSun,
  FaMoon,
  FaTimes,
  FaEllipsisH,
  FaPaperPlane,
} from "react-icons/fa";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box bg={'#0b0f25'}>
      <NavBarContainer {...props}>
        
        <Spacer />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} dark={props.dark} change={props.change} />
      </NavBarContainer>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <FaTimes /> : <FaEllipsisH />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text display="block" {...rest} colorScheme={"teal"}>
      {children}
    </Text>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem>
          {" "}
          <Button _hover={{color:'#0b0f25', backgroundColor:'white'}} color={'white'} variant={"outline"}  >
            
              About us
            
          </Button>
        </MenuItem>
        <MenuItem>
          {" "}
          <Button _hover={{color:'#0b0f25', backgroundColor:'white'}} color={'white'} variant={"outline"}  >
            
              Log in
            
          </Button>
        </MenuItem>
      
        <MenuItem>
        <Button  _hover={{color:'#0b0f25', backgroundColor:'white'}} color={'white'} bgGradient={"linear(to-r,teal.400, cyan.400)"}>
            <Box mr={2}>
              {" "}
              <FaPaperPlane />{" "}
            </Box>
            Register
          </Button>
          
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
