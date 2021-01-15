// import { Avatar } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link'; 
import { LensTwoTone } from '@material-ui/icons';
import AvatarCustom from '../Avatar/AvatarCustom';

// const useStyles = makeStyles((theme) => ({
//     orange: {
//       color: 'white',
//       backgroundColor: 'orange',
//     },
//     // purple: {
//     //   color: theme.palette.getContrastText(deepPurple[500]),
//     //   backgroundColor: deepPurple[500],
//     // },
//   }));

  
const SubReddit=({item})=>{
// const classes =useStyles();
// let defaultAvatar=<Avatar className={classes.orange}>{item.data.title.slice(0,1)}</Avatar>
// if (item.data.icon_img){
//     defaultAvatar=  <Avatar src={item.data.icon_img} /> 
// }
  const names= item.data.display_name_prefixed.split('/');
    return(
      <Link variant="subtitle1" style={{textDecoration:'none'}} to={`/reddit/r/${names[1]}`}>
        <ListItem>
        <ListItemAvatar>
        <AvatarCustom default={item.data.title.slice(0,1)} src={item.data.icon_img}></AvatarCustom>
        </ListItemAvatar>
        <ListItemText primary={item.data.display_name_prefixed} secondary={item.data.title} />
      </ListItem>  
      </Link> 
    )

}
export default SubReddit;