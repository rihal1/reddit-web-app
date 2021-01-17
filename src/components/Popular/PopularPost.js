import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Grid, Chip, Paper, Box } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import * as utility from '../../utility/utility';
const useStyles = makeStyles((theme) => ({
  cover: {
    width: '100%',
    height: '100%'
  },

  deafultImage: {
    backgroundImage: 'linear-gradient(grey, white)',
    minHeight: '20vh'
  }

}));

//Single Post Component
const PopularPost = ({ item }) => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const chip = <Chip label={item.data.link_flair_text} style={{ marginLeft: 10 }} />;

  //default Image for showing in post bar
  let defaultImage = (<Grid container className={classes.deafultImage} alignItems="center" justify="center" direction="column" spacing={0}>
    <Grid item sm={12} md={12} xs={12} >
      <Typography variant="body1" color="inherit">No Images Available</Typography>
    </Grid>
  </Grid>);

  // cahnge the defaultImage to original thumnail of the post
  if (item.data.thumbnail && (item.data.thumbnail.split('.').includes('jpg') ||
    item.data.thumbnail.split('.').includes('png'))) {

    defaultImage = <img
      className={classes.cover}
      src={item.data.thumbnail}

    />;
  }

  return (


    <Paper>
      <Box mt={2} borderRadius={2}>
        <Grid container>
          <Grid item md={1} xs={2} sm={1}>
            <Box p={2}>
              <Link href="#" onClick={preventDefault}>
                <ThumbUpAltIcon color="primary"></ThumbUpAltIcon>
              </Link>
              <Typography variant="subtitle2">{utility.numFormatter(item.data.ups)}</Typography>
              <Link href="#" onClick={preventDefault}>
                <ThumbDownIcon color="primary"></ThumbDownIcon>
              </Link>


            </Box>
          </Grid>

          <Grid item md={8} xs={7} sm={8}>

            <Box my={2}>
              <Grid container>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    <b>{item.data.subreddit_name_prefixed}</b>
                  </Typography>
                </Grid>
                <Grid item>
                  {
                    item.data.link_flair_text && chip
                  }
                </Grid>

                <Grid item>
                  <Box ml={2}>
                    <Typography variant="body2" color="textSecondary">
                      Posted by
          </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box ml={1}>
                    <Typography variant="body2" color="textSecondary">
                      {item.data.author_fullname}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="subtitle1">
              {item.data.title}
            </Typography>


          </Grid>

          <Grid item md={3} xs={3} sm={3}>
            {
              defaultImage
            }
          </Grid>

          <Box m={2}>
            <Grid container >
              <Grid item>
                <Box mr={1}>
                  <Link href="#" onClick={preventDefault}>
                    <CommentIcon color="primary"></CommentIcon>
                  </Link>
                </Box>
              </Grid>

              <Grid item>
                <Box mr={1}>
                  <Typography variant="subtitle2">{utility.numFormatter(item.data.num_comments)} Comments</Typography>
                </Box>
              </Grid>

              <Grid item>
                <Box mr={1}>
                  <Link href="#" onClick={preventDefault}>
                    <ShareIcon color="primary" ></ShareIcon>
                  </Link>
                </Box>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">Share</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Paper>
  );
}

export default PopularPost;