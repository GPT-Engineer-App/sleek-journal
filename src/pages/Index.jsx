import { Box, Container, Heading, Text, VStack, HStack, Link, Divider, Button, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Container maxW="container.lg" p={4} bg={bg} color={color}>
      {/* Header */}
      <Box as="header" mb={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          My Personal Blog
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to my personal blog where I share my thoughts and experiences.
        </Text>
      </Box>

      <Divider />

      {/* Main Content */}
      <Box as="main" my={8}>
        <VStack spacing={8} align="stretch">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" position="relative">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <Button
                position="absolute"
                top="1rem"
                right="1rem"
                colorScheme="red"
                onClick={() => handleDelete(index)}
              >
                <FaTrash />
              </Button>
            </Box>
          ))}
        </VStack>
      </Box>

      <Divider />

      {/* Add Post Button */}
      <Box textAlign="center" my={8}>
        <Button as={RouterLink} to="/add-post" colorScheme="blue">
          Add New Post
        </Button>
      </Box>

      <Divider />

      {/* Footer */}
      <Box as="footer" py={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.</Text>
        <HStack justify="center" spacing={4} mt={2}>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;