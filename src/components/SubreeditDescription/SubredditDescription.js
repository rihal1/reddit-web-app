import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { AppBar,Toolbar,Paper,Grid,Box} from '@material-ui/core';


const useStyles = makeStyles({
    // root: {
    //  // minWidth: 275,
    // // background:"#fff",
    //  //height: 140,
    // // marginBottom: 12,
    // },
   
  });
  
const SubredditDescription=({info})=>{
    const classes = useStyles();
    const date = new Date(info.created_utc*1000);
   // console.log(date.toDateString("en-US"));
    //const bull = <span className={classes.bullet}>•</span>;
    return(
  
    <Paper className={classes.root}>
    <Box mb={2}>
     <AppBar position="static">
    <Toolbar variant="dense">
        <Typography variant="subtitle1" color="inherit">
          About Community
        </Typography>
    </Toolbar>
    </AppBar>
    <Box m={1}>
      
      <Typography  variant="subtitle2">
        Welcome to {info.display_name} Community....
      </Typography>
      </Box>
    
      {/* <div className={classes.pos}> */}
      <Grid container spacing={2}>
        <Grid item>
        <Box m={1}>
       <Typography  variant="body2">
         Date Created 
        </Typography>
        </Box>
        </Grid>
        <Grid item>
        <Box m={1}>
        <Typography  variant="body2">
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