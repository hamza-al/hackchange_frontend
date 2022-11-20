import { Icon, LockIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text , VStack} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function ProfilePage(){
    return(<Center overflowY={'hidden'}  h="100vh" bg='#0b0f25'>
            <Stack bg='white' p='20' boxShadow={'md'} alignItems='center'>
            <Avatar m={'5'} size='2xl' name='Hamza Al Sorkhy' src='https://bit.ly/sage-adebayo' />{' '}
            <Text pb={'10'} fontSize={'large'} color='grey'>
                Hamza Al Sorkhy
            </Text>

            

            <Stack direction={'row'} justify={'center'} color='grey' spacing={'3'}>
                <Box>
                    <Stack spacing={'0'} alignItems='center' justify={'center'}>
                         <Text pr={'10'} fontSize={'35'}  color='#0b0f25'>
                            30
                        </Text>
                        <Text pr={'10'}  pb={'20'} fontSize={'xs'}  color='grey'>
                            Likes
                        </Text>
                    </Stack>
                </Box>
                
                <Box>
                    <Stack spacing={'0'} alignItems='center' justify={'center'}>
                         <Text  fontSize={'35'}  color='#0b0f25'>
                            30
                        </Text>
                        <Text  pb={'20'} fontSize={'xs'}  color='grey'>
                            Likes
                        </Text>
                    </Stack>
                </Box>

            </Stack>
            </Stack>
        </Center>)
}