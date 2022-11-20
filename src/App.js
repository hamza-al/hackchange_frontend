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
import AddTags from './Pages/AddTags';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Explore from './Pages/Explore';
import ProfilePage from './Pages/ProfilePage';
import SessionPage from './Pages/session/Session';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Routes>
        <Route  element={<LandingPage/>} path="/" />
        <Route  element={<RegisterPage/>} path="/register" />
        <Route  element={<LoginPage/>} path="/login" />
        <Route element ={<Explore></Explore>} path="/explore"/>
        <Route  element={<AddTags />} path="/complete-profile" />
        <Route element ={<ProfilePage/>} path="/profile"/>
        <Route element ={<SessionPage/>} path="/session"/>
     </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
