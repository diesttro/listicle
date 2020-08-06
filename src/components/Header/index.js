import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { openDialog } from '../../state/actions';

function Header() {
  const dispatch = useDispatch();

  const handleOpenDialog = () => dispatch(openDialog());

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className="mt-1 mb-2"
      spacing={2}
    >
      <Grid item xs={4}>
        <Typography component="h1" variant="h4">
          Pressa
        </Typography>
      </Grid>
      <Grid container item justify="flex-end" xs={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
        >
          Add article
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
