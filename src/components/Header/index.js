import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { openDialog } from '../../state/actions/formDialog';
import { setOrder } from '../../state/actions/order';
import { orderSelector } from '../../state/selectors/order';
import './styles.scss';

function Header() {
  const order = useSelector(orderSelector);
  const dispatch = useDispatch();

  const handleOrderChange = order => dispatch(setOrder(order));

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
        <Typography component="h1" variant="h4" className="title">
          listicle
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Grid container justify="flex-end" alignItems="center" spacing={2}>
          <Grid item>
            <FormControl variant="outlined">
              <InputLabel id="order">Order</InputLabel>
              <Select
                labelId="order"
                value={order}
                onChange={event => handleOrderChange(event.target.value)}
                label="Order"
              >
                <MenuItem value="date-asc">Date (asc.)</MenuItem>
                <MenuItem value="date-desc">Date (desc.)</MenuItem>
                <MenuItem value="title-asc">Title (asc.)</MenuItem>
                <MenuItem value="title-desc">Title (desc.)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="add-article"
              disableRipple
              startIcon={<AddIcon />}
              onClick={handleOpenDialog}
            >
              Add article
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
