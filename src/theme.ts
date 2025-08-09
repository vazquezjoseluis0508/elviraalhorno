import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#FFF5F2',
      100: '#FFE4D6',
      200: '#FFC4A8',
      300: '#FFA47A',
      400: '#FF844C',
      500: '#FF6B35', // Naranja vibrante como el folleto
      600: '#E55A2B',
      700: '#CC4921',
      800: '#B23817',
      900: '#99270D',
    },
    dark: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
    background: {
      primary: '#0F0F0F', // Negro profundo
      secondary: '#1A1A1A', // Negro más claro
      overlay: 'rgba(0, 0, 0, 0.7)', // Overlay oscuro
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
});

export default theme;
