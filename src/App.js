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
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Signup';
import Header from './Pages/Header';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LandingPage/>
    </ChakraProvider>
  );
}

export default App;
