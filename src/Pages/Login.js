import { useEffect } from "react";
import { Icon, LockIcon } from "@chakra-ui/icons";
import { border, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text , VStack} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";


export default function LoginPage(){
  const loginMut = gql`
    mutation login($password: String!, $email: String!) {
      loginUser(password: $password, email: $email) {
        token
      }
    }
  `

  const [login, { data, loading, error }] = useMutation(loginMut);

  const navigate = useNavigate()

  useEffect(() => {
    if (data && !loading){
      localStorage.setItem("token", data.login)
      navigate("/explore")
    }

    if (error){
      alert("Incorrect!")
    }
  }, [data, loading, error])

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
            login({
              variables: {
                email: values.email,
                password: values.password
              }
            })
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel color={'#0b0f25'} htmlFor="email" >Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    bg="gray.200"
                    color="gray.600"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel color={'#0b0f25'} htmlFor="password"  >Password</FormLabel>
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