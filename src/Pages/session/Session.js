import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon, Icon } from '@chakra-ui/icons';

const borderRadius = 8;
const ChatBubble = ({ message, isUser }) => {
  return (
    // if isUser is true, then the chat bubble will be on the right side
    // if isUser is false, then the chat bubble will be on the left side
    <Box
      bg={isUser ? 'blue.500' : 'gray.200'}
      color={isUser ? 'white' : 'black'}
      p={4}
      borderRadius={borderRadius}
      maxW={500}
      alignSelf={isUser ? 'flex-end' : 'flex-start'}
      mt={4}
      mr={isUser ? 0 : 4}
      ml={isUser ? 4 : 0}
    >
      {message}
    </Box>
  );
};

// chat header
const ChatHeader = () => {
  return (
    <Flex
      bg='white'
      borderRadius={8}
      alignItems='center'
      justifyContent='space-between'
      w='100%'
      p={2}
    >
      <HStack>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <Flex alignItems="left" flexFlow="column" >
          <HStack>
            <Text fontSize='lg' fontWeight='bold'>
              Jhon Doe
            </Text>
            <Text fontSize='sm' color='gray.500'>
              300+ Rep
            </Text>
          </HStack>

          <Text fontSize='sm' color='gray.500'>
            Teaching react
          </Text>
        </Flex>
      </HStack>
      <Button colorScheme='blue' >
        End Session
      </Button>
    </Flex>
  );
};

// chat screen
const ChatScreen = () => {
  return (
    <Box bg={'#0b0f25'}>
      <Container>
        <VStack bg={'#0b0f25'}
                p={4}>
          <ChatHeader />
          <Box flex='1' w='100%' overflowY='scroll'>
            <VStack>
              >
              <ChatBubble message='How to use mongodb with react?' isUser={false} />
              <ChatBubble message='You need to create api first' isUser={true} />
              <ChatBubble message='then?' isUser={false} />
              <ChatBubble message='then you can call the api from the frontend' isUser={true} />
              <ChatBubble message='I am good too' isUser={false} />
              <ChatBubble message='Nice' isUser={true} />
              <ChatBubble message='Hello' isUser={false} />
              <ChatBubble message='Hi' isUser={true} />
              <ChatBubble message='How are you?' isUser={false} />
              <ChatBubble message='I am good, how about you?' isUser={true} />
              <ChatBubble message='I am good too' isUser={false} />
              <ChatBubble message='Nice' isUser={true} />
            </VStack>
          </Box>

          <HStack
            w='100%'
            p={4}>
            <Box
              as='input'
              placeholder='Write a message'
              bg='white'
              border='1px solid gray'
              borderRadius={20}
              p={2}
              flex={1}
            />
            {/*  icon button*/}
            <IconButton
              bg='blue.500'
              color='white'
              borderRadius={20}
              p={5}
              ml={4}
              icon={<ArrowForwardIcon />}
            />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};


export default ChatScreen;


