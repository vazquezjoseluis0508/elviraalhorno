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
  HStack,
  Badge,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { businessData, formatPrice } from '../data';

const CompactMenu: React.FC = () => {
  const cardBg = useColorModeValue('background.secondary', 'gray.800');
  const borderColor = useColorModeValue('gray.700', 'gray.600');

  // Imágenes de pizzas (URLs más confiables)
  const pizzaImages = {
    "Muzza": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500",
    "Jamón": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500",
    "Napolitana": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500",
    "Jamón y Morrón": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500",
    "Jamón y Huevo": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500",
    "Jamón y Napo": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500",
    "Huevo": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500",
  };

  return (
    <Box 
      as="section" 
      py={8} 
      bg="background.primary"
      backgroundImage="url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'background.overlay',
        zIndex: 1,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={2}>
        <VStack spacing={8}>
          {/* Pizzas Section */}
          <Box w="full">
            <Heading
              as="h2"
              size="xl"
              color="brand.500"
              textAlign="center"
              mb={6}
              textShadow="2px 2px 4px rgba(0,0,0,0.8)"
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
                  shadow="xl"
                  overflow="hidden"
                  _hover={{
                    transform: 'translateY(-4px)',
                    shadow: '2xl',
                  }}
                  transition="all 0.3s"
                >
                  <Image
                    src={pizzaImages[pizza.name as keyof typeof pizzaImages]}
                    alt={pizza.name}
                    height="200px"
                    width="100%"
                    objectFit="cover"
                    fallbackSrc="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500"
                  />
                  <CardBody>
                    <VStack spacing={3} align="stretch">
                      <HStack justify="space-between" align="start">
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color="white"
                        >
                          {pizza.name}
                        </Text>
                        <Badge
                          colorScheme="brand"
                          variant="solid"
                          fontSize="md"
                          px={3}
                          py={1}
                        >
                          {formatPrice(pizza.price)}
                        </Badge>
                      </HStack>
                      <Text
                        fontSize="sm"
                        color="gray.300"
                        lineHeight="1.4"
                      >
                        {pizza.description}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* Empanadas Section */}
          <Box w="full" mt={8}>
            <Heading
              as="h2"
              size="xl"
              color="brand.500"
              textAlign="center"
              mb={6}
              textShadow="2px 2px 4px rgba(0,0,0,0.8)"
            >
              EMPANADAS
            </Heading>

            <Card
              bg={cardBg}
              border="1px"
              borderColor={borderColor}
              shadow="xl"
              maxW="md"
              mx="auto"
              overflow="hidden"
            >
              <Image
                src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Empanadas"
                height="200px"
                width="100%"
                objectFit="cover"
                fallbackSrc="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=500"
              />
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Text
                    fontSize="md"
                    color="white"
                    textAlign="center"
                    fontWeight="medium"
                  >
                    {businessData.empanadas.flavors}
                  </Text>
                  
                  <Text
                    fontSize="sm"
                    color="gray.300"
                    textAlign="center"
                    lineHeight="1.4"
                  >
                    {businessData.empanadas.description}
                  </Text>

                  <VStack spacing={2}>
                    <HStack justify="space-between" w="full">
                      <Text color="white" fontWeight="medium">Docena</Text>
                      <Badge colorScheme="brand" variant="solid">
                        {formatPrice(businessData.empanadas.dozenPrice)}
                      </Badge>
                    </HStack>
                    <HStack justify="space-between" w="full">
                      <Text color="white" fontWeight="medium">Media docena</Text>
                      <Badge colorScheme="brand" variant="solid">
                        {formatPrice(businessData.empanadas.halfDozenPrice)}
                      </Badge>
                    </HStack>
                    <HStack justify="space-between" w="full">
                      <Text color="white" fontWeight="medium">C/u</Text>
                      <Badge colorScheme="brand" variant="solid">
                        {formatPrice(businessData.empanadas.unitPrice)}
                      </Badge>
                    </HStack>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CompactMenu;
