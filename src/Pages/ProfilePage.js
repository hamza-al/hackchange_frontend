import { Icon, LockIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Tag, Text , VStack} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function ProfilePage(){
    return(<Center overflowY={'hidden'}  h="100vh" bg='#0b0f25'>
            <Stack bg='white' p='20' boxShadow={'md'} alignItems='center'>
            <Avatar m={'5'} size='2xl' name='Hamza Al Sorkhy' src='https://bit.ly/sage-adebayo' />{' '}
            
            <Stack direction={'column'} justify={'center'} alignItems='center' color='grey' spacing={'3'}>
                <Text  fontSize={'large'} color='grey'>
                    Hamza Al Sorkhy
                </Text>
                <Text pb={'10'} fontSize={'xs'} color='#0b0f25'>
                    1167 credits
                </Text>
            </Stack>

            

            <Stack direction={'row'} justify={'center'} color='grey' spacing={'3'}>
                <Box>   
                    <Stack spacing={'0'} alignItems='center' justify={'center'}>
                         <Text pr={'10'} fontSize={'35'}  color='#0b0f25'>
                            300
                        </Text>
                        <Text pr={'10'}  pb={'10'} fontSize={'xs'}  color='grey'>
                            Likes
                        </Text>
                    </Stack>
                </Box>
                
                <Box>
                    <Stack spacing={'0'} alignItems='center' justify={'center'}>
                         <Text  fontSize={'35'}  color='#0b0f25'>
                            781
                        </Text>
                        <Text  pb={'10'} fontSize={'xs'}  color='grey'>
                            People helped
                        </Text>
                    </Stack>
                </Box>

            </Stack>
            <Stack  direction={'column'} justify={'center'} alignItems='center' color='grey' spacing={'3'}>
                <Text  fontSize={'large'} color='#0b0f25'>
                    Skills
                </Text>
                <Stack direction={'col'} justify={'center'} alignItems='center' color='grey' spacing={'10px'}>
                
                <Tag m={1} p={2} size={'s'} variant='solid' colorScheme='cyan'>
                        React
                </Tag>
                <Tag m={1}  p={2} size={'s'} variant='solid' colorScheme='red'>
                        Calculus
                </Tag>
                <Tag m={1}  p={2} size={'s'} variant='solid' colorScheme='pink'>
                        Python
                </Tag>
                </Stack>
                
            </Stack>

            </Stack>
        </Center>)
}