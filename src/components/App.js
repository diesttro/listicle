import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArticleList from './ArticleList';
import FormDialog from './FormDialog';
import theme from '../theme';
import '../globalStyles.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          Pressa
        </Typography>
        <Grid container spacing={2}>
          <Grid container item justify="flex-end" xs={12}>
            <Button variant="contained" color="primary" onClick={() => {}}>
              Add card
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <ArticleList />
        </Grid>
      </Container>
      <FormDialog />
    </ThemeProvider>
  );
}

export default App;
