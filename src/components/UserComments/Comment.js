import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Typography, Paper, Box } from '@material-ui/core';

//Component for a single Comment for Comment List
const Comment = ({ item, commentType }) => {
  const date = new Date(item.created_utc * 1000);
  let replyCount = 0;
  if (item.replies && item.replies.data) {
    replyCount = item.replies.data.children.length;
  }
  return (

    <Paper>
      <Box p={2}>
        <Grid container>
          <Grid item xs={1} md={1} sm={1}>
            <Box mr={2}>

              <ArrowUpwardIcon color="disabled"></ArrowUpwardIcon>
              <Typography variant="subtitle2">{item.ups}</Typography>
              <ArrowDownwardIcon color="disabled"></ArrowDownwardIcon>

            </Box>
          </Grid>
          <Grid item xs={10} md={10} sm={10}>
            <Typography variant="body1" color="secondary">
              {item.body}
            </Typography>
            <Grid container>
              <Grid item xs={3} md={3} sm={3}>
                <Box mt={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    {commentType === 'P' ? item.author_fullname : item.subreddit_name_prefixed}
                  </Typography>
                </Box>
              </Grid>
              {commentType === 'P' &&
                <Grid item xs={5} md={5} sm={5}>
                  <Box mt={2}>
                    <Typography variant="subtitle2" color="textSecondary">
                      {replyCount} more Replies
                  </Typography>
                  </Box>
                </Grid>
              }
              <Grid item xs={4} md={4} sm={4}>
                <Box mt={2}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Posted at {date.toDateString("en-US")}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>

  )

}
export default Comment;