import { useEffect } from "react";
import { Icon, LockIcon } from "@chakra-ui/icons";
import { Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text , VStack} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";


export default function RegisterPage(){

  const navigate = useNavigate();

  const addUserMut = gql`
    mutation AddUser($data: AddUser!) {
      addUser(data: $data) {
        token
      }
    }
  `

  const [ addUser, { data, loading, error } ] = useMutation(addUserMut)

  useEffect(() => {
    if (data && !loading){
      localStorage.setItem("token", data.addUser.token);
      navigate("/complete-profile")
    }
  }, [data, loading, error ])

  return(
      <Center overflowY={'hidden'}  h="100vh" bg='#0b0f25'>
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
          userName: ""
        }}
        onSubmit={(values) => {
          // const { firstName, lastName, email, password, userName } = values;
          addUser({
            variables: {
              data: values
            }
          })
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="firstName" color="gray.600" >First Name</FormLabel>
                <Field
                  as={Input}
                  id="firstName"
                  name="firstName"
                  variant="filled"
                  bg="gray.200"
                  color="gray.600"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="lastName" color="gray.600" >Last Name</FormLabel>
                <Field
                  as={Input}
                  id="lastName"
                  name="lastName"
                  variant="filled"
                  bg="gray.200"
                  color="gray.600"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" color="gray.600" >Email Address</FormLabel>
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
              <FormControl>
                <FormLabel htmlFor="username" color="gray.600" >Username</FormLabel>
                <Field
                  as={Input}
                  id="username"
                  name="userName"
                  type="text"
                  variant="filled"
                  bg="gray.200"
                  color="gray.600"
                />
              </FormControl>
              <FormControl isInvalid={!!errors.password && touched.password}>
                <FormLabel htmlFor="password" color="gray.600" >Password</FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  variant="filled"
                  bg="gray.200"
                  color="gray.600"
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