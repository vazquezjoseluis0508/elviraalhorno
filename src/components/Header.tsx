import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  VStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { businessData } from '../data';
import WhatsAppButtons from './WhatsAppButtons';

const Header: React.FC = () => {
  const bgColor = useColorModeValue('background.primary', 'gray.900');
  const borderColor = useColorModeValue('gray.700', 'gray.600');

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      backdropFilter="blur(10px)"
      bgColor="rgba(15, 15, 15, 0.95)"
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center" w="full" gap={6}>
          {/* Logo y Slogan */}
          <VStack align="start" spacing={1} minW="200px">
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              color="brand.500"
              lineHeight="1"
            >
              {businessData.name.split(' ')[0]}
            </Text>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="white"
              fontWeight="medium"
            >
              {businessData.name.split(' ').slice(1).join(' ')}
            </Text>
            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              color="gray.300"
            >
              {businessData.subtitle}
            </Text>
          </VStack>

          {/* Horarios */}
          <VStack align="center" spacing={1} minW="180px">
            <Icon
              viewBox="0 0 24 24"
              boxSize={6}
              color="brand.500"
            >
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"
              />
            </Icon>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="white"
              fontWeight="medium"
              textAlign="center"
              lineHeight="1.2"
            >
              {businessData.contact.schedule}
            </Text>
          </VStack>

          {/* Ubicación */}
          <VStack align="center" spacing={1} minW="200px">
            <Icon
              viewBox="0 0 24 24"
              boxSize={6}
              color="brand.500"
            >
              <path
                fill="currentColor"
                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
              />
            </Icon>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color="white"
              fontWeight="medium"
              textAlign="center"
              lineHeight="1.2"
            >
              {businessData.contact.address}
            </Text>
          </VStack>

          {/* WhatsApp Buttons */}
          <WhatsAppButtons />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
