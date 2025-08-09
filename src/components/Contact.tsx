import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { businessData, getGoogleMapsUrl } from '../data';

const Contact: React.FC = () => {
  const cardBg = useColorModeValue('background.secondary', 'gray.800');
  const borderColor = useColorModeValue('gray.700', 'gray.600');

  return (
    <Box as="section" py={8} bg="background.primary">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading
            as="h2"
            size="xl"
            color="brand.500"
            textAlign="center"
            mb={8}
          >
            Horarios y Ubicación
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            {/* Horarios */}
            <Card bg={cardBg} border="1px" borderColor={borderColor} shadow="xl">
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon
                      viewBox="0 0 24 24"
                      boxSize={12}
                      color="brand.500"
                      mb={4}
                    >
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"
                      />
                    </Icon>
                    
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color="white"
                      lineHeight="1.4"
                    >
                      {businessData.contact.schedule}
                    </Text>
                  </Box>
                </VStack>
              </CardBody>
            </Card>

            {/* Dirección */}
            <Card bg={cardBg} border="1px" borderColor={borderColor} shadow="xl">
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Box textAlign="center">
                    <Icon
                      viewBox="0 0 24 24"
                      boxSize={12}
                      color="brand.500"
                      mb={4}
                    >
                      <path
                        fill="currentColor"
                        d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                      />
                    </Icon>
                    
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      color="white"
                      lineHeight="1.4"
                      mb={4}
                    >
                      {businessData.contact.address}
                    </Text>

                    <Button
                      colorScheme="blue"
                      size="md"
                      onClick={() => {
                        window.open(getGoogleMapsUrl(businessData.contact.address), '_blank');
                      }}
                      leftIcon={<span>🗺️</span>}
                    >
                      Ver en Google Maps
                    </Button>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
