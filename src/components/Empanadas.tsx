import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { businessData, formatPrice } from '../data';

const Empanadas: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="section" py={16} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading
            as="h2"
            size="2xl"
            color="brand.500"
            textAlign="center"
            mb={8}
          >
            EMPANADAS
          </Heading>

          <Box
            bg={cardBg}
            border="1px"
            borderColor={borderColor}
            borderRadius="lg"
            p={8}
            shadow="md"
            w="full"
            maxW="md"
          >
            <VStack spacing={4} align="center">
              <Text
                fontSize="lg"
                fontWeight="medium"
                color="gray.700"
                textAlign="center"
              >
                {businessData.empanadas.flavors}
              </Text>
              
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="brand.500"
              >
                Docena {formatPrice(businessData.empanadas.dozenPrice)}
              </Text>
              
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="brand.500"
              >
                Media docena {formatPrice(businessData.empanadas.halfDozenPrice)}
              </Text>
              
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="brand.500"
              >
                C/u {formatPrice(businessData.empanadas.unitPrice)}
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Empanadas;
