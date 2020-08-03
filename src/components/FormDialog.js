import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormDialog({ open, handleClose, title, description, image }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add new card</DialogTitle>
      <DialogContent>
        <form autoComplete="off">
          <TextField
            name="title"
            label={title ? title : 'Title'}
            className="mb-2"
            fullWidth
          />
          <TextField
            name="description"
            label={description ? description : 'Description'}
            className="mb-2"
            fullWidth
            multiline
          />
          <TextField
            name="image"
            label={image ? image : 'Image (url)'}
            className="mb-2"
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
