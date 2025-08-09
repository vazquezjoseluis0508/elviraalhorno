import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer: React.FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box as="footer" bg={bgColor} py={8}>
      <Container maxW="container.xl">
        <VStack spacing={4}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="brand.500"
          >
            ELVIRA AL HORNO
          </Text>
          <Text
            fontSize="sm"
            color={textColor}
            textAlign="center"
          >
            © {new Date().getFullYear()} Elvira al Horno. Todos los derechos reservados.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
