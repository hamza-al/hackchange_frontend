import { useState, useEffect } from "react";
import { 
  Center, 
  Text, 
  Stack, 
  Heading, 
  VStack, 
  HStack,
  FormControl, 
  FormLabel, 
  FormErrorMessage, 
  Input,
  Button,
  Link,
  Tag,
  TagLabel,
  TagCloseButton
} from "@chakra-ui/react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router";


const AddTags = () => {

  const [learningTagsComplete, setLearningTagsComplete] = useState(false);
  const [editing, setEditing] = useState("");
  const [learningTags, setLearningTags] = useState([]);
  const [teachingTags, setTeachingTags] = useState([]);

  const navigate = useNavigate();

  const addTagMut = gql`
    mutation addTags($tags: [TagInput!]!) {
      addTags(tags: $tags) {
        token
      } 
    }
  `

  const [addTags, { data, loading, error }] = useMutation(addTagMut);

  useEffect(() => {
    if (data && !loading){
      localStorage.setItem("token", data.addTags.token);
      if (learningTagsComplete){
        navigate("/explore")
      } else {
        setLearningTagsComplete(true);
      }
    }
  }, [data, loading])

  return (
    <Center overflowY={'hidden'}  h="100vh" bg='#0b0f25'>
          <Stack  p='20'>
          <Heading as='h1' color='teal.400' >
              Just a few more things.
          </Heading>
          <Text fontSize={'large'} color='gray.200'>
              {
                learningTagsComplete ? "What would you like to teach?" : "What would you like to learn?"
              }
          </Text>
          
          <HStack >
            <Input 
              placeholder={learningTagsComplete ? "Skill you would like to teach." : "Skill you would like to learn."}
              onChange={(e) => setEditing(e.target.value)}
              value={editing}
            />
            <Button colorScheme="teal" onClick={() => {
              if (learningTagsComplete){
                setTeachingTags( prev => [...prev, editing])
              } else {
                setLearningTags( prev => [...prev, editing])
              }
              setEditing("")
            }} >Add</Button>
          </HStack>
          <HStack>
            {
              (learningTagsComplete ? teachingTags : learningTags).map( (tag, idx) => {
                return (
                  <Tag colorScheme="cyan" key={idx} >
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => {
                      setLearningTags( prev => {
                        return prev.filter( val => val !== tag)
                      })
                    }}/>
                  </Tag>
                )
              })
            }
          </HStack>
          <HStack justify="center" pt="5" >
            <Button colorScheme="teal" 
              onClick={() => {
                const token = localStorage.getItem("token");
                if (!token) navigate("/login");
                if (learningTagsComplete){
                  addTags({
                    context: {
                      headers: {
                        Authorization: token
                      }
                    },
                    variables: {
                      tags: teachingTags.map( tag => {
                        return {
                          name: tag,
                          level: 0,
                          type: "teaching"
                        }
                      })
                    }
                  })
                } else {
                  addTags({
                    context: {
                      headers: {
                        Authorization: token
                      }
                    },
                    variables: {
                      tags: learningTags.map( tag => {
                        return {
                          name: tag,
                          level: 0,
                          type: "learning"
                        }
                      })
                    }
                  })
                }
              }}
            >Next</Button>
          </HStack>
          </Stack>
      </Center>
  )
}

export default AddTags;