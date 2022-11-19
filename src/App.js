import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import LoginPage from './Login';
import RegisterPage from './Signup';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RegisterPage/>
    </ChakraProvider>
  );
}

export default App;
