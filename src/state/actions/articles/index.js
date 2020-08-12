import {
  SET_ARTICLES,
  ADD_ARTICLE,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from '../../types/articles';

const setArticles = articles => ({
  type: SET_ARTICLES,
  payload: { articles },
});

const addArticle = ({ title, description, image }) => ({
  type: ADD_ARTICLE,
  payload: { title, description, image },
});

const editArticle = ({ id, title, description, image }) => ({
  type: EDIT_ARTICLE,
  payload: { id, title, description, image },
});

const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: { id },
});

export { setArticles, addArticle, editArticle, deleteArticle };
