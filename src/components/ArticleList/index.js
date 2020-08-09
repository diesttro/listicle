import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteArticle, openDialog } from '../../state/actions';
import { sortByAsc, sortByDesc } from '../../utils/sortBy';
import Article from '../Article';

function ArticleList() {
  const articles = useSelector(state => state.articles);
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  const [prop, propOrder] = order.split('-');
  const sortedArticles =
    propOrder === 'asc'
      ? sortByAsc(prop, articles)
      : sortByDesc(prop, articles);

  const handleDelete = id => dispatch(deleteArticle(id));

  const handleOpenDialog = id => dispatch(openDialog(id));

  return (
    <Grid container spacing={2}>
      {sortedArticles.map((article, index) => (
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
