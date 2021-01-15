import React,{useEffect, useState} from 'react'
import { AppBar,Toolbar,Typography,Button,IconButton,Menu,MenuItem,Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import RedditIcon from '@material-ui/icons/Reddit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root:{
      background: '#424242',
      marginBottom:16
    },
    menuButton: {
      //marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuText:{
     //fontSize:'inherit',
    // marginLeft:'15px'
    }
  }));

const NavBar = (props) => {
  //const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginOpen, setLoginModalOpen] = useState(false);
  const [name,setUserName]=useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    //history.push(`/reddit/user/JustMashedPotatoes`)
  };
 
  useEffect(()=>{

    if(!props.userInfo.error){
      setLoginModalOpen(false);
      
    }
   if(props.userInfo.data){
    setUserName(props.userInfo.data.subreddit.display_name_prefixed.split('/')[1]);
   }
  },[props.userInfo])
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const openLogin=()=>{
    setLoginModalOpen(true);
    }
    const closeLogin = (username) => {
      props.loadUserInfo(username);
      //setLoginModalOpen(false);
    };
    const closeOnClick=()=>{
      setLoginModalOpen(false);
    }
    const logOut=()=>{
      props.logout();
    }
    const classes = useStyles();
     return( 
        <div>
        <AppBar position="static" className={classes.root}>
            <Toolbar>
            <Link variant="subtitle1" style={{textDecoration:'none'}} 
                  to={`/reddit`}>
            <IconButton edge="start" className={classes.menuButton} style={{color:'#fff'}}aria-label="menu">
            <RedditIcon />
            </IconButton>
            </Link>
                <Typography variant="h6" color="inherit" className={classes.title}>
                 Reddit Web Client 
                </Typography>
                
                <div>
                <IconButton
                  aria-controls="login-menu-appbar"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="inherit"
                >
                  <PersonIcon></PersonIcon> 
                  <Typography variant="h6" color="inherit"  className={classes.menuText}>
                    {props.userInfo.data? props.userInfo.data.subreddit.display_name_prefixed:'My Account'}
                  </Typography>
                 
                </IconButton>
                <Menu
                  id="login-menu-appbar"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                   {
                     !props.userInfo.data &&
                   <Link variant="subtitle1" style={{textDecoration:'none'}} onClick={openLogin}>
                  <MenuItem onClick={handleClose}><ExitToAppIcon/>Login/Sign Up</MenuItem>
                  </Link>
                    }
                  {/* <Divider /> */}
                  {
                    props.userInfo.data &&
                  <Link variant="subtitle1" style={{textDecoration:'none'}} 
                  to={`/reddit/user/${name}`}>
                  <MenuItem onClick={handleClose}><FaceIcon></FaceIcon>Profile</MenuItem>
                  </Link>
                  }
                  {
                     props.userInfo.data &&
                  <Link variant="subtitle1" style={{textDecoration:'none'}} 
                  to={`/reddit`} onClick={logOut}>
                  <MenuItem onClick={handleClose}><ExitToAppIcon></ExitToAppIcon>Logout</MenuItem>
                  </Link>
                  }
                  {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                </Menu>
              </div>
            </Toolbar>
        </AppBar>
        <Dialog open={loginOpen} onClose={closeOnClick} aria-labelledby="login-form">
        <DialogTitle id="login-form">Login</DialogTitle>
        <DialogContent>
         <Login onClose={closeLogin}></Login>
        </DialogContent>
        </Dialog>
        </div>
     )
}
const mapStateToProps= state=>{
  return {
     userInfo:state.userStore.userInfo,
    // filterType:state.homeStore.filterType,
  }
};
const mapDispatchToProps= dispatch=>{
  return{
      loadUserInfo:(param)=>dispatch(action.loadUserInfo(param)),
      logout:()=>dispatch(action.logout()),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);;


