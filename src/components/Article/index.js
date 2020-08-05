import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const DEFAULT_IMAGE = 'https://dummyimage.com/300/d6d6d6&text=+';

function Article({ title, description, image }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia image={image || DEFAULT_IMAGE} style={{ height: '140px' }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Article;
