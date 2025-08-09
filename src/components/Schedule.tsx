import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { businessData } from '../data';

const Schedule: React.FC = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="section" py={16} bg="cream.50">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading
            as="h2"
            size="2xl"
            color="brand.500"
            textAlign="center"
            mb={8}
          >
            Horarios
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
            <VStack spacing={4}>
              <Icon
                viewBox="0 0 24 24"
                boxSize={12}
                color="brand.500"
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"
                />
              </Icon>
              
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="gray.700"
                lineHeight="1.4"
              >
                {businessData.contact.schedule}
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Schedule;
