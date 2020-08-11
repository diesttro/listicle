import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4a148c',
    },
  },
  typography: {
    button: {
      fontWeight: 700,
    },
  },
});

export default theme;
