import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { addArticle, editArticle, closeDialog } from '../../state/actions';

function Field({ name, label, value, register, errors }) {
  return (
    <FormControl fullWidth error={errors[name] ? true : false} className="mb-1">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input id={name} name={name} defaultValue={value} inputRef={register()} />
      <FormHelperText>
        {errors[name] ? errors[name].message : <>&nbsp;</>}
      </FormHelperText>
    </FormControl>
  );
}

function FormDialog() {
  const { register, handleSubmit, errors } = useForm();
  const { open, articleId } = useSelector(state => state.formDialog);
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  const { title = '', description = '', image = '' } = articleId
    ? articles.find(article => article.id === articleId)
    : {};

  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  const handleFormSubmit = data => {
    articleId
      ? dispatch(editArticle({ ...data, id: articleId }))
      : dispatch(addArticle(data));

    handleCloseDialog();
  };

  return (
    <Dialog open={open}>
      <form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
        <DialogTitle>Add new card</DialogTitle>
        <DialogContent>
          <Field
            name="title"
            label="Title *"
            value={title}
            register={() => register({ required: 'Field is required' })}
            errors={errors}
          />
          <Field
            name="description"
            label="Description *"
            value={description}
            register={() => register({ required: 'Field is required' })}
            errors={errors}
          />
          <Field
            name="image"
            label="Image (url)"
            value={image}
            register={() => register()}
            errors={errors}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default FormDialog;
