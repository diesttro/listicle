import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Article from './Article';
import FormDialog from './FormDialog';
import theme from '../theme';
import '../globalStyles.scss';

const initialArticles = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
    image:
      'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat',
  },
];

function App() {
  const [articles, setArticles] = useState(initialArticles);
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
          {articles.map((article, index) => (
            <Grid key={`article-${index}`} item xs={12} sm={6} md={4}>
              <Article
                title={article.title}
                description={article.description}
                image={article.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FormDialog
        open={open}
        setArticles={setArticles}
        handleClose={handleClose}
      />
    </ThemeProvider>
  );
}

export default App;
