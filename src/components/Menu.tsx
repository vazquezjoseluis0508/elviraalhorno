import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { businessData, formatPrice } from '../data';

const Menu: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="section" py={16} bg="cream.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading
            as="h2"
            size="2xl"
            color="brand.500"
            textAlign="center"
            mb={8}
          >
            NUESTRAS PIZZAS
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            w="full"
          >
            {businessData.pizzas.map((pizza) => (
              <Card
                key={pizza.name}
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                shadow="md"
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'xl',
                }}
                transition="all 0.3s"
              >
                <CardBody>
                  <VStack spacing={3} align="center">
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color="brand.500"
                      textAlign="center"
                    >
                      {pizza.name}
                    </Text>
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      color="gray.700"
                    >
                      {formatPrice(pizza.price)}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Menu;
