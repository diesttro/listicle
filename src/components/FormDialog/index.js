import React, { useState, useEffect } from 'react';
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
import { addArticle, editArticle } from '../../state/actions/articles';
import { closeDialog } from '../../state/actions/formDialog';
import { formDialogSelector } from '../../state/selectors/formDialog';
import { articlesSelector } from '../../state/selectors/articles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './styles.scss';

const ADD_ARTICLE = 'Add article';
const EDIT_ARTICLE = 'Edit article';

function Field({ name, label, value, autoFocus, register, errors }) {
  return (
    <FormControl fullWidth error={errors[name] ? true : false} className="mb-1">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        name={name}
        defaultValue={value}
        autoFocus={autoFocus}
        inputRef={register()}
      />
      <FormHelperText>
        {errors[name] ? errors[name].message : <>&nbsp;</>}
      </FormHelperText>
    </FormControl>
  );
}

function FormDialog() {
  const { register, handleSubmit, errors } = useForm();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [dialogTitle, setDialogTitle] = useState(null);
  const { open, articleId } = useSelector(formDialogSelector);
  const articles = useSelector(articlesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) setDialogTitle(articleId ? EDIT_ARTICLE : ADD_ARTICLE);
  }, [open]);

  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  const handleFormSubmit = data => {
    articleId
      ? dispatch(editArticle({ ...data, id: articleId }))
      : dispatch(addArticle(data));

    handleCloseDialog();
  };

  const { title = '', description = '', image = '' } = articleId
    ? articles.find(article => article.id === articleId)
    : {};

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleCloseDialog}>
      <form
        className="dialog__form"
        onSubmit={handleSubmit(handleFormSubmit)}
        autoComplete="off"
      >
        <DialogTitle className="dialog__title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <Field
            name="title"
            label="Title *"
            value={title}
            autoFocus
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
          <Button onClick={handleCloseDialog} color="primary" size="large">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default FormDialog;
