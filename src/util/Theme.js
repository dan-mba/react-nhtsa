/*
  Material-UI Theme Object
*/
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#004c7b'
    },
    background: {
      default: '#dbe3e8',
      paper: '#f1f4f6'
    },
    text: {
      secondary: '#004c7b'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          maxWidth: 1000,
          margin: '0 auto',
          padding: '1%'
        }
      }
    }
  }
});

export default theme;
