import { Icon, LockIcon } from "@chakra-ui/icons";
import { Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text , VStack} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";


export default function RegisterPage(){
    return(
        <Center h="100vh" bg='#0b0f25'>
            <Stack bg='white' p='20' boxShadow={'md'}>
            <Heading as='h1' color='#0b0f25' >
                Register
            </Heading>
            <Text fontSize={'large'} color='grey'>
                Welcome to tutorize! We're happy to have you aboard
            </Text>

            <Formik
          initialValues={{
            email: "",
            password: "",
            firstName:'',
            lastName:'',

          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">First Name</FormLabel>
                  <Field
                    as={Input}
                    id="firstName"
                    name="firstName"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Last Name</FormLabel>
                  <Field
                    as={Input}
                    id="lastName"
                    name="lastName"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
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
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>

            <Stack justify={'center'} color='grey' spacing={'3'}>
                <Text as={'div'} textAlign='center'>
                    <span> Already have a account? </span>
                    <Button color={'#0b0f25'} variant='link'>
                         <Link to={'/../login'}>Log in</Link>
                    </Button>
                </Text>

            </Stack>
            </Stack>
        </Center>
    )
}