import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const Hero: React.FC = () => {
  const overlayColor = useColorModeValue(
    'rgba(231, 111, 81, 0.8)',
    'rgba(231, 111, 81, 0.9)'
  );

  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundImage="url('/hero.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: overlayColor,
        zIndex: 1,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={2}>
        <VStack
          spacing={8}
          textAlign="center"
          color="white"
          py={20}
        >
          <Text
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontWeight="bold"
            lineHeight="1"
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          >
            Pizzas al horno
          </Text>
          <Text
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="medium"
            textShadow="1px 1px 2px rgba(0,0,0,0.5)"
          >
            y empanadas bien caseras
          </Text>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            opacity={0.9}
            maxW="2xl"
            textShadow="1px 1px 2px rgba(0,0,0,0.3)"
          >
            Sabor auténtico de barrio en Grand Bourg
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
