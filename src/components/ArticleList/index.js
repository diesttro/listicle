import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { setArticles, deleteArticle } from '../../state/actions/articles';
import { openDialog } from '../../state/actions/formDialog';
import { articlesSelector } from '../../state/selectors/articles';
import { orderSelector } from '../../state/selectors/order';
import sortByProp from '../../utils/sortByProp';
import Article from '../Article';

function ArticleList() {
  const articles = useSelector(articlesSelector);
  const order = useSelector(orderSelector);
  const dispatch = useDispatch();
  const [sortProp, orderProp] = order.split(':');
  const sortedArticles = sortByProp(sortProp, articles, orderProp);

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
