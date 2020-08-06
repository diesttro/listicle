import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import ArticleList from './ArticleList';
import FormDialog from './FormDialog';
import theme from '../theme';
import '../globalStyles.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Header />
        <ArticleList />
      </Container>
      <FormDialog />
    </ThemeProvider>
  );
}

export default App;
