import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import Header from './components/Header';
import CompactMenu from './components/CompactMenu';
import JsonLd from './components/JsonLd';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="background.primary" minH="100vh">
        <JsonLd />
        <Header />
        <Box pt="100px"> {/* Espacio para el header fijo compacto */}
          <CompactMenu />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
