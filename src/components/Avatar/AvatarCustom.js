import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  orange: {
    color: 'white',
    backgroundColor: 'orange',

  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}

));
//A component to make a common avatar component 
const AvatarCustom = (props) => {
  const classes = useStyles();

  const existingClassDefault = [classes.orange];
  const existingClassSrc = [];

  if (props.size === 'large') {
    existingClassDefault.push(classes.large);
    existingClassSrc.push(classes.large);
  }
  //default avatar
  let defaultAvatar = <Avatar className={existingClassDefault.join(" ")}>{props.default}</Avatar>
  if (props.src) {
    // avatar with image background
    defaultAvatar = <Avatar className={existingClassSrc.join(" ")} src={props.src} />
  }
  return defaultAvatar;
}

export default AvatarCustom;