import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Box,Paper,Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import * as utility from '../../utility/utility';
import GroupIcon from '@material-ui/icons/Group';
const useStyles = makeStyles({
    root: {
     // minWidth: 275,
    // background:"#fff",
     height: 140,
     //marginBottom: 12,
    },
    // header:{
    //    height:65,
    //    background:'blue' 
    // },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    // title: {
    //   //fontSize: 14,
    //   //color:"#fff",
    //   padding:10
     
      
    // },
    // textAlign:{
    //     textAlign:'center'
    // },
    // pos:{
    //     display : 'flex',
    //     flexDirection:'row',
    //     flexGrow:1
    // }
    // pos: {
    //   marginBottom: 12,
    // },
  });
  
const UserCountView=(props)=>{
    const classes = useStyles();
  
    return(
  
    <Box className={classes.root} mb={2}>
    <Paper>
    <Box p={1}>
     <Typography  variant="h6" className={classes.title}>
        Members
     </Typography>
     </Box>
      {/* <div className={classes.pos}> */}
      <Grid container>
      {/* <div  style={{width:'60%'}}> */}
        <Grid item xs={7} md={7} sm={7}>
        <Box  p={1}>
        <Typography  variant="body2" >
         Total Subscribers
        </Typography>
        </Box>
        </Grid>
       
        <Grid item xs={5} md={5} sm={5}>
        <Box  p={1}>
        <Typography  variant="body2" >
          {utility.numFormatter(props.info.subscribers)}
        </Typography>
        </Box>
        </Grid>
       </Grid>
      {/* </div> */}
      {/* <div className={classes.pos}> */}
      <Grid container>
      <Grid  item xs={7} md={7} sm={7}>
      <Box  p={1}>
       <Typography  variant="body2">
          Active Online
        </Typography>
        </Box>
        </Grid>
        {/* </div> */}
        <Grid item xs={5} md={5} sm={5}>
        <Box  p={1}>
        <Typography  variant="body2">
          {utility.numFormatter(props.info.accounts_active)}
        </Typography>
        </Box>
        </Grid>
        </Grid>
      {/* </div> */}
      {/* </div> */}
      </Paper>
    </Box>
    )
}

export default UserCountView;