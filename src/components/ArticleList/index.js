import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles, deleteArticle, openDialog } from '../../state/actions';
import { sortByAsc, sortByDesc } from '../../utils/sortBy';
import Article from '../Article';

function ArticleList() {
  const articles = useSelector(state => state.articles);
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem('articles'));

    if (savedArticles) dispatch(setArticles(savedArticles));
  }, []);

  useEffect(() => {
    const saveInLocalStorage = () => {
      localStorage.setItem('articles', JSON.stringify(articles));
    };

    window.addEventListener('unload', saveInLocalStorage);

    return () => window.removeEventListener('unload', saveInLocalStorage);
  }),
    [];

  const handleDelete = id => dispatch(deleteArticle(id));

  const handleOpenDialog = id => dispatch(openDialog(id));

  const [sortProp, sortPropOrder] = order.split('-');
  const sortedArticles =
    sortPropOrder === 'asc'
      ? sortByAsc(sortProp, articles)
      : sortByDesc(sortProp, articles);

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
