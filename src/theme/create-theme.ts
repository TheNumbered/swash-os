import { createTheme } from '@mui/material/styles';

const createSoftTheme = (mode: 'dark' | 'light') => {
  const isDarkMode = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDarkMode ? '#007AFF' : '#0A84FF', // Blue for primary color
      },
      secondary: {
        main: isDarkMode ? '#FF2D55' : '#FF453A', // Red for secondary color
      },
      background: {
        default: isDarkMode ? '#1C1C1E' : '#F0F0F3', // Background colors
        paper: isDarkMode ? '#2C2C2E' : '#FFFFFF', // Paper background
      },
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#000000', // Primary text color
        secondary: isDarkMode ? '#A1A1A1' : '#3A3A3A', // Secondary text color
      },
    },
    typography: {
      fontFamily: 'San Francisco, Roboto, Arial, sans-serif', // Mac OS-like font
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF', // AppBar background
            color: isDarkMode ? '#FFFFFF' : '#000000', // AppBar text color
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px', // Rounded buttons
            textTransform: 'none', // No uppercase text
            boxShadow: isDarkMode
              ? '0px 1px 3px rgba(0, 0, 0, 0.3)'
              : '0px 1px 3px rgba(0, 0, 0, 0.1)', // Button shadows
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '12px', // Rounded paper components
            boxShadow: isDarkMode
              ? '0px 2px 4px rgba(0, 0, 0, 0.2)'
              : '0px 2px 4px rgba(0, 0, 0, 0.1)', // Paper shadows
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '12px', // Rounded cards
            boxShadow: isDarkMode
              ? '0px 2px 4px rgba(0, 0, 0, 0.2)'
              : '0px 2px 4px rgba(0, 0, 0, 0.1)', // Card shadows
          },
        },
      },
    },
  });
};

export default createSoftTheme;
