// import { Avatar } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Card} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Typography,Paper,Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
    // desc:{
    //   display:'flex',
    //   flexDirection:'row',
    //   marginTop:16,
    //   //color:'#9e9e9e'
      
    // },
    // root:{
    //  padding:16,
    //  display:'flex',
    //  flexDirection:'row',
    // }
    // purple: {
    //   color: theme.palette.getContrastText(deepPurple[500]),
    //   backgroundColor: deepPurple[500],
    // },
  }));

  
const Comment=({item})=>{
 const classes =useStyles();
 const preventDefault = (event) => event.preventDefault();
 const date = new Date(item.created_utc*1000);
 // const names= item.data.display_name_prefixed.split('/');
    return(
    
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
        <Grid item xs={11} md={11} sm={11}>
        {/* <Box> */}
          <Typography variant="body1" color="secondary">
            {item.body}
          </Typography>
          {/* <div className={classes.desc}> */}
          <Grid container>
          <Grid item xs={5} md={5} sm={5}>
          <Box mt={2}>
          <Typography variant="subtitle2" color="textSecondary">
            {item.subreddit_name_prefixed}
          </Typography>
          </Box>
          </Grid>
          <Grid item xs={7} md={7} sm={7}>
            <Box mt={2}>
          <Typography variant="subtitle2" color="textSecondary">
            {date.toDateString("en-US")}
          </Typography>
          </Box>
          </Grid>
          </Grid>
          {/* </Box> */}
          </Grid>
          </Grid>
          </Box>
      </Paper>  

    )

}
export default Comment;