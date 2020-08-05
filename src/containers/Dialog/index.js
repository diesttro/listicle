import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addArticle } from '../../state/actions';
import FormDialog from '../../components/FormDialog';

function Dialog({ open, handleClose }) {
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleFormSubmit = data => {
    dispatch(addArticle(data));
  };

  return (
    <FormDialog
      open={open}
      form={form}
      handleFormSubmit={handleFormSubmit}
      handleClose={handleClose}
    />
  );
}

export default Dialog;
