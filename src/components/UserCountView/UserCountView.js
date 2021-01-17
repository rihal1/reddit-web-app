import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import * as utility from '../../utility/utility';
const useStyles = makeStyles({
  root: {
    height: 140,

  },
});
//Component tos show the no of active and total subscriber of a community/subreddit
const UserCountView = (props) => {
  const classes = useStyles();

  return (

    <Box className={classes.root} mb={2}>
      <Paper>
        <Box p={1}>
          <Typography variant="h6" className={classes.title}>
            Members
     </Typography>
        </Box>

        <Grid container>

          <Grid item xs={7} md={7} sm={7}>
            <Box p={1}>
              <Typography variant="body2" >
                Total Subscribers
        </Typography>
            </Box>
          </Grid>

          <Grid item xs={5} md={5} sm={5}>
            <Box p={1}>
              <Typography variant="body2" >
                {utility.numFormatter(props.info.subscribers)}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={7} md={7} sm={7}>
            <Box p={1}>
              <Typography variant="body2">
                Active Online
        </Typography>
            </Box>
          </Grid>

          <Grid item xs={5} md={5} sm={5}>
            <Box p={1}>
              <Typography variant="body2">
                {utility.numFormatter(props.info.accounts_active)}
              </Typography>
            </Box>
          </Grid>
        </Grid>

      </Paper>
    </Box>
  )
}

export default UserCountView;