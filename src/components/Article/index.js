import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles.scss';

const DEFAULT_IMAGE = 'https://dummyimage.com/300/d6d6d6&text=+';

function Article({
  id,
  title,
  description,
  image,
  handleDelete,
  handleOpenDialog,
}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="card">
        <CardMedia image={image || DEFAULT_IMAGE} style={{ height: '140px' }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          <IconButton
            className="icon-button"
            onClick={() => handleOpenDialog(id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton className="icon-button" onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Article;
