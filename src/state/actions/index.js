const setArticles = articles => ({
  type: 'SET_ARTICLES',
  payload: { articles },
});

const addArticle = ({ title, description, image }) => ({
  type: 'ADD_ARTICLE',
  payload: { title, description, image },
});

const editArticle = ({ id, title, description, image }) => ({
  type: 'EDIT_ARTICLE',
  payload: { id, title, description, image },
});

const deleteArticle = id => ({
  type: 'DELETE_ARTICLE',
  payload: { id },
});

const openDialog = articleId => ({
  type: 'OPEN_DIALOG',
  payload: { articleId },
});

const closeDialog = () => ({
  type: 'CLOSE_DIALOG',
});

const setOrder = order => ({
  type: 'SET_ORDER',
  payload: { order },
});

export {
  setArticles,
  addArticle,
  editArticle,
  deleteArticle,
  openDialog,
  closeDialog,
  setOrder,
};
