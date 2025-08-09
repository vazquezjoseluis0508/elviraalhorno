import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Icon,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { businessData, getGoogleMapsUrl } from '../data';

const Location: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const toast = useToast();

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(businessData.contact.address);
      toast({
        title: 'Dirección copiada',
        description: 'La dirección se copió al portapapeles',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'No se pudo copiar la dirección',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
            Dirección
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
            textAlign="center"
          >
            <VStack spacing={6}>
              <Icon
                viewBox="0 0 24 24"
                boxSize={12}
                color="brand.500"
              >
                <path
                  fill="currentColor"
                  d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                />
              </Icon>
              
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="gray.700"
                lineHeight="1.4"
              >
                {businessData.contact.address}
              </Text>

              <HStack spacing={4} justify="center">
                <Button
                  colorScheme="brand"
                  variant="outline"
                  onClick={copyAddress}
                  leftIcon={<span>📋</span>}
                >
                  Copiar dirección
                </Button>
                
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    window.open(getGoogleMapsUrl(businessData.contact.address), '_blank');
                  }}
                  leftIcon={<span>🗺️</span>}
                >
                  Abrir en Google Maps
                </Button>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Location;
