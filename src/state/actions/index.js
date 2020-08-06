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

export { addArticle, editArticle, deleteArticle, openDialog, closeDialog };
