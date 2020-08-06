import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addArticle, editArticle, closeDialog } from '../../state/actions';
import FormDialog from '../../components/FormDialog';

function Dialog() {
  const { opened, articleId } = useSelector(state => state.formDialog);
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  const article = articles.find(article => article.id === articleId);

  const handleFormSubmit = data =>
    articleId
      ? dispatch(editArticle({ ...data, id: articleId }))
      : dispatch(addArticle(data));

  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  return (
    <FormDialog
      open={opened}
      article={article}
      handleFormSubmit={handleFormSubmit}
      handleClose={handleCloseDialog}
    />
  );
}

export default Dialog;
