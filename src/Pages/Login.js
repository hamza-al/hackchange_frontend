import { Icon, LockIcon } from "@chakra-ui/icons";
import { border, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text , VStack} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";


export default function LoginPage(){
    return(
        <Center overflowY={'hidden'}  h="100vh" bg='#0b0f25'>
            <Stack bg='white' p='20' boxShadow={'md'}>
            <Heading as='h1' color='#0b0f25' >
                Log in.
            </Heading>
            <Text fontSize={'large'} color='grey'>
                Welcome back, we missed you. Log in here to continue
            </Text>

            <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel color={'#0b0f25'} htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="outline"
                   
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel color={'#0b0f25'} htmlFor="password">Password</FormLabel>
                  <Field
                  
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="outline"
                    
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                
                <Button type="submit" color={'white'} bg="#0b0f25" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>

            <Stack justify={'center'} color='grey' spacing={'3'}>
                <Text as={'div'} textAlign='center'>
                    <span> Don't have a account? </span>
                    <Button color={'#0b0f25'} variant='link'>
                         <Link to={'/../register'}>Sign up</Link>
                    </Button>
                </Text>

            </Stack>
            </Stack>
        </Center>
    )
}