import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteArticle, openDialog } from '../../state/actions';
import Article from '../../components/Article';

function Articles() {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteArticle(id));

  const handleOpenDialog = id => dispatch(openDialog(id));

  return articles.map((article, index) => (
    <Article
      key={`article-${index}`}
      id={article.id}
      title={article.title}
      description={article.description}
      image={article.image}
      handleDelete={handleDelete}
      handleOpenDialog={handleOpenDialog}
    />
  ));
}

export default Articles;
