import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid, Container, Button,Box } from '@material-ui/core';
import AvatarCustom from '../Avatar/AvatarCustom';

const useStyles = makeStyles((theme)=>({
    // root: {
    //   display: "flex",
    //   flexDirection:'row',
    //   height:100,
    //  // backgroundColor:'#80deea',
    //   marginTop:theme.spacing(2),
    //   marginBottom:theme.spacing(2)
    // },
    // marginCls:{
    //     margin:16
    // },
    mediumBtn:{
        //margin: theme.spacing(4),
        width:200
    }
  }));

  const PostHeader=(props)=>{
        const classes  = useStyles();
        const defaultIcon=props.name.slice(0,1);
        return(
       
        // <div className={classes.root}>
           
        //         <div className={classes.marginCls}>
        //         <AvatarCustom size="large" src={props.info.icon_img} default="H"></AvatarCustom>
        //         </div>
        //         <div className={classes.marginCls}>
        //             <Typography variant="h4">{props.info.title}</Typography>
        //             <Typography  variant="subtitle2">{props.info.display_name_prefixed}</Typography>
        //         </div>
        //         <Button  className={classes.mediumBtn} variant="contained" color="primary">Join</Button>
            
           
        //  </div>
        <Grid container spacing={1} wrap="wrap">
           
        <Grid item xs={3} md={1} sm={2}>
        <AvatarCustom size="large" src={props.info.icon_img} default="H"></AvatarCustom>
        </Grid>
        <Grid item xs={6} md={4} sm={6}>
            <Typography variant="h4">{props.info.title}</Typography>
            <Typography  variant="subtitle2">{props.info.display_name_prefixed}</Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={4}>
        <Box m={4}>
        <Button  className={classes.mediumBtn} variant="contained" color="primary">Join</Button>
        </Box>
       </Grid>
       </Grid>
      
        )
    
}

export default PostHeader;
