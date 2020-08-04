import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const defaultImage = 'https://dummyimage.com/300/d6d6d6&text=+';

function Article({ title, description, image }) {
  return (
    <Card>
      <CardMedia image={image || defaultImage} style={{ height: '140px' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Article;
