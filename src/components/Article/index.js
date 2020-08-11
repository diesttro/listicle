import React, { useRef } from 'react';
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
  const imageRef = useRef(null);

  return (
    <Grid item xs={12} md={6} xl={4}>
      <Card className="card" elevation={3}>
        <CardMedia
          src={image || DEFAULT_IMAGE}
          component="img"
          ref={imageRef}
          className="card__image"
          onError={() => {
            if (imageRef) imageRef.current.src = DEFAULT_IMAGE;
          }}
        />
        <CardContent>
          <Typography component="h2" className="card__title" gutterBottom>
            {title}
          </Typography>
          <Typography component="p" className="card__text">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="card__actions">
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
