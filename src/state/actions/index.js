const addArticle = ({ title, description, image }) => ({
  type: 'ADD_ARTICLE',
  payload: { title, description, image },
});

export { addArticle };
