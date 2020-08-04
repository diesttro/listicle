import React from 'react';
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

function Field({ name, label, register, errors }) {
  return (
    <FormControl fullWidth error={errors[name] ? true : false} className="mb-1">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input id={name} name={name} inputRef={register()} />
      <FormHelperText>
        {errors[name] ? errors[name].message : <span>&nbsp;</span>}
      </FormHelperText>
    </FormControl>
  );
}

function FormDialog({ open, handleClose }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <DialogTitle>Add new card</DialogTitle>
        <DialogContent>
          <Field
            name="title"
            label="Title *"
            register={() => register({ required: 'Field is required' })}
            errors={errors}
          />
          <Field
            name="description"
            label="Description *"
            register={() => register({ required: 'Field is required' })}
            errors={errors}
          />
          <Field
            name="image"
            label="Image (url)"
            register={() => register()}
            errors={errors}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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
