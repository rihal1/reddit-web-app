import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import RedditIcon from '@material-ui/icons/Reddit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#424242',
    marginBottom: 16
  },
  title: {
    flexGrow: 1,
  },
}));

//Top Navbar Component
const NavBar = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);// state to handle open/ hide menubar
  const [loginOpen, setLoginModalOpen] = useState(false);// state to handle loginModal Open/hide
  const [name, setUserName] = useState("");

  //this recat hook lifecycle is called when the Navbar component is mounted
  //and when userinfo changes after submit clicked in login
  useEffect(() => {
    // close the modal,if userdata is correct then
    if (!props.userInfo.error) {
      setLoginModalOpen(false);

    }
    //set the original display name of the user
    if (props.userInfo.data) {
      setUserName(props.userInfo.data.subreddit.display_name_prefixed.split('/')[1]);
    }
  }, [props.userInfo])

  //open the Navbar Menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  //close the Navbar menu
  const handleClose = (event, option) => {
    if (option === 'login') {
      event.preventDefault();
      setLoginModalOpen(true);
    }
    else if (option === 'logout') {
      props.logout();
    }
    setAnchorEl(null);
  };

  // close the login Modal after click submit and load the user data
  const closeLogin = (username) => {
    props.loadUserInfo(username);
  };

  //Login Dialog onclose event on clicking outside anywhere
  const closeOnClick = () => {
    setLoginModalOpen(false);
  }

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Link variant="subtitle1" style={{ textDecoration: 'none' }}
            to={`/reddit`}>
            <IconButton edge="start" className={classes.menuButton} style={{ color: '#fff' }} aria-label="menu">
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
              <Typography variant="h6" color="inherit" className={classes.menuText}>
                {props.userInfo.data ? props.userInfo.data.subreddit.display_name_prefixed : 'My Account'}
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
                <Link variant="subtitle1" style={{ textDecoration: 'none' }} to="">
                  <MenuItem onClick={(e) => handleClose(e, 'login')}><ExitToAppIcon />Login/Sign Up</MenuItem>
                </Link>
              }

              {
                props.userInfo.data &&
                <Link variant="subtitle1" style={{ textDecoration: 'none' }}
                  to={`/reddit/user/${name}`}>
                  <MenuItem onClick={(e) => handleClose(e, 'profile')}><FaceIcon></FaceIcon>Profile</MenuItem>
                </Link>
              }
              {
                props.userInfo.data &&
                <Link variant="subtitle1" style={{ textDecoration: 'none' }}
                  to={`/reddit`}>
                  <MenuItem onClick={(e) => handleClose(e, 'logout')}><ExitToAppIcon></ExitToAppIcon>Logout</MenuItem>
                </Link>
              }

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
const mapStateToProps = state => {
  return {
    userInfo: state.userStore.userInfo,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    loadUserInfo: (param) => dispatch(action.loadUserInfo(param)),
    logout: () => dispatch(action.logout()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);;


