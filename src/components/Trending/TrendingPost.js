import React from 'react';
import Typography from '@material-ui/core/Typography';
//import {Link} from 'react-router-dom'
//import articlesContent from '../dummyData/article-content';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardActionArea,CardContent,CardMedia } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
const useStyles = makeStyles({
    root: {
      height:285
      //width: 275,
      //background: "#ffab40"
    },
    media:{
      height:140
    }
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    // title: {
    //   fontSize: 14,
    // },
    // pos: {
    //   marginBottom: 12,
    // },
  });
  
const TrendingPost=({item})=>{
   const classes = useStyles();
    //const articleObj= articlesContent.find(x=>x.name===name);
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
           {item.results.data.children[0].data.title.length> 40 ?
           item.results.data.children[0].data.title.substr(0,40).concat('...'):
           item.results.data.children[0].data.title
           }
          </Typography>
          <div style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',marginTop:10}}>
          <FaceIcon></FaceIcon>
          <Typography variant="subtitle2" color="textSecondary">{item.results.data.children[0].data.subreddit_name_prefixed}</Typography>
          </div>
         
        </CardContent>
        
        </CardActionArea>
      </Card>
    )
}

export default TrendingPost;