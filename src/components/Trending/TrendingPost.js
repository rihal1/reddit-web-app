import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia,Box } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles({
  root: {
    height: 285
  },
  media: {
    height: 140
  }
});

//single trending post component
const TrendingPost = ({ item }) => {
  const classes = useStyles();
  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.results.data.children[0].data.preview.images[0].source.url}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.display_string}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.results.data.children[0].data.title.length > 40 ?
              item.results.data.children[0].data.title.substr(0, 40).concat('...') :
              item.results.data.children[0].data.title
            }
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginTop: 10 }}>
            <ForumIcon></ForumIcon>
            <Box ml={1}>
            <Typography variant="subtitle2" color="textSecondary">{item.results.data.children[0].data.subreddit_name_prefixed}
            </Typography>
            </Box>
          </div>

        </CardContent>

      </CardActionArea>
    </Card>
  )
}

export default TrendingPost;