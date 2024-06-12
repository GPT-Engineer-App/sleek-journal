import { Box, Container, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";

const Index = () => {
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
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">First Blog Post</Heading>
            <Text mt={4}>
              This is the content of the first blog post. It's just a placeholder for now.
            </Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Second Blog Post</Heading>
            <Text mt={4}>
              This is the content of the second blog post. It's just a placeholder for now.
            </Text>
          </Box>
        </VStack>
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