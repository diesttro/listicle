import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteArticle, openDialog } from '../../state/actions';
import Article from '../Article';

function ArticleList() {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteArticle(id));

  const handleOpenDialog = id => dispatch(openDialog(id));

  return (
    <Grid container spacing={2}>
      {articles.map((article, index) => (
        <Article
          key={`article-${index}`}
          id={article.id}
          title={article.title}
          description={article.description}
          image={article.image}
          handleDelete={handleDelete}
          handleOpenDialog={handleOpenDialog}
        />
      ))}
    </Grid>
  );
}

export default ArticleList;
