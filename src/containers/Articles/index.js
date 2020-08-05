import React from 'react';
import { useSelector } from 'react-redux';
import Article from '../../components/Article';

function Articles() {
  const articles = useSelector(state => state.articles);

  return articles.map((article, index) => (
    <Article
      key={`article-${index}`}
      title={article.title}
      description={article.description}
      image={article.image}
    />
  ));
}

export default Articles;
