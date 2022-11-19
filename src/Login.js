import { Button, Center, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";

export default function LoginPage(){
    return(
        <Center h="100vh" bg='#0b0f25'>
            <Stack bg='white' p='20' boxShadow={'md'}>
            <Heading as='h1' color='#0b0f25' >
                Log in.
            </Heading>
            <Text fontSize={'large'} color='grey'>
                Welcome back, we missed you. Log in here to continue
            </Text>

            <Formik onSubmit={(values,{setSubmitting})=>{
                setTimeout(()=>{
                    console.log(values)
                    setSubmitting(false)

                },1000)
            }} initialValues={{email: '',password: ''}}>
                {({isSubmitting}) =>(
                    <Form>
                        <Stack my='4' spacing='6'>
                            <Input name="email" type={'email'} placeholder='Email' color={"white"} focusBorderColor='#0b0f25' errorBorderColor="0b0f25"></Input>
                            <Input name="password" type={'password'} placeholder='Password' focusBorderColor="#0b0f25"></Input>
                            <Button isLoading={isSubmitting} loadingText="Logging in" size={'lg'} color='#0b0f25' type="submit">
                                Login
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>

            <Stack justify={'center'} color='grey' spacing={'3'}>
                <Text as={'div'} textAlign='center'>
                    <span> Don't have a account? </span>
                    <Button color={'#0b0f25'} variant='link'>
                         Sign up
                    </Button>
                </Text>

            </Stack>
            </Stack>
        </Center>
    )
}