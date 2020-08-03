import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from '../theme';
import '../globalStyles.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Pressa</Typography>
    </ThemeProvider>
  );
}

export default App;
