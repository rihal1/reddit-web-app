import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar, Paper, Grid, Box } from '@material-ui/core';

//component that describe about the subreddit community in Post page
const SubredditDescription = ({ info }) => {

  const date = new Date(info.created_utc * 1000);
  return (

    <Paper>
      <Box mb={2}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="subtitle1" color="inherit">
              About Community
        </Typography>
          </Toolbar>
        </AppBar>
        <Box m={1}>

          <Typography variant="subtitle2">
            Welcome to {info.display_name} Community....
      </Typography>
        </Box>


        <Grid container spacing={2}>
          <Grid item>
            <Box m={1}>
              <Typography variant="body2">
                Date Created
        </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box m={1}>
              <Typography variant="body2">
                {date.toDateString("en-US")}
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </Paper>
  )
}

export default SubredditDescription;