import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import * as utility from '../../utility/utility';
import GroupIcon from '@material-ui/icons/Group';
import { Container, Grid,CardActionArea,Avatar,Box } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
    //   middle:{
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     flexDirection:'column',
    //     marginTop: 16
    //   },
    //   karma:{
    //       marginLeft:'3%'
    //   },
    //   desc:{
    //       marginTop:16,
    //       marginBottom:16
    //   }
  }));
  
const UserCardView=({userInfo})=>{
    //console.log(userinfo);
    const classes = useStyles();
    //const bull = <span className={classes.bullet}>•</span>;
    return(
  
       
        <Card> 
        <CardActionArea>

          <Box mt={2}>
          <Grid container justify="center" alignItems="center" direction="column">
            <Grid item>
          <Avatar className={classes.large} src={userInfo.data.icon_img} />
          <Box textAlign="center">
           <Typography variant="h6">{userInfo.data.subreddit.name}</Typography>
           <Typography variant="subtitle2">{userInfo.data.subreddit.display_name_prefixed}</Typography>
           </Box>
           </Grid>
           </Grid>
           </Box>
       
          <CardContent>
            <Box mx={2}>
           <Grid container spacing={1}>
           <Grid item xs={4} sm={4} md={4}>{userInfo.data.awarder_karma}</Grid>
            <Grid item xs={4} sm={4} md={4}>{userInfo.data.link_karma}</Grid>
            <Grid item xs={4} sm={4} md={4}>{userInfo.data.comment_karma}</Grid>
           </Grid>
          
           <Grid container spacing={1}>
            <Grid item xs={4} sm={4} md={4}>Awarded Karma</Grid>
            <Grid item xs={4} sm={4} md={4}>Link Karma</Grid>
            <Grid item xs={4} sm={4} md={4}>Comment Karma</Grid>
           </Grid>
           </Box>
           <hr></hr>
           <Box my={2}>
           <Typography variant="body1"> Welcome to the official Nintendo Reddit profile, home of all things Nintendo! 
           For customer support,
            please visit support.nintendo.com.
            </Typography>
           </Box>
            </CardContent>
            </CardActionArea>
        </Card>
      
    )
}

export default UserCardView;