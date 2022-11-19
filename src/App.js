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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
