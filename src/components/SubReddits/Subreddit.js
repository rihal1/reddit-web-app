
import React from 'react';
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AvatarCustom from '../Avatar/AvatarCustom';

//Single Subreddit Component
const SubReddit=({item})=>{

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