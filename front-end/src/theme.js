import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: '#c924d2',
      main: '#c924d2',
    },
    secondary: {
      light: '#130201',
      main: '#130201',
    },
    brand: {
      main: '#c924d2',
    },
    brandBlack: {
      main: '#130201',
      contrastText: '#fff',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
  },
});

export default theme;
