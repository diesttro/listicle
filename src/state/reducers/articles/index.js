import uniqid from 'uniqid';

const initialState = [];

const articles = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ARTICLES':
      return payload.articles;
    case 'ADD_ARTICLE':
      return state.concat({
        id: uniqid(),
        date: Date.now(),
        title: payload.title,
        description: payload.description,
        image: payload.image,
      });
    case 'EDIT_ARTICLE':
      return state.reduce(
        (articles, article) =>
          article.id === payload.id
            ? articles.concat({
                id: article.id,
                date: article.date,
                title: payload.title,
                description: payload.description,
                image: payload.image,
              })
            : articles.concat(article),
        []
      );
    case 'DELETE_ARTICLE':
      return state.filter(article => article.id !== payload.id);
    default:
      return state;
  }
};

export default articles;
