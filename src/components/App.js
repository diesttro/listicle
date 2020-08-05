import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Articles from '../containers/Articles';
import Dialog from '../containers/Dialog';
import theme from '../theme';
import '../globalStyles.scss';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center">
          Pressa
        </Typography>
        <Grid container spacing={2}>
          <Grid container item justify="flex-end" xs={12}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add card
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Articles />
        </Grid>
      </Container>
      <Dialog open={open} handleClose={handleClose} />
    </ThemeProvider>
  );
}

export default App;
