import { Box, Container, Heading, Text, VStack, HStack, Link, Divider, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.lg" p={4}>
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
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
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