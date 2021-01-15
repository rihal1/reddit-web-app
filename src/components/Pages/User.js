import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography,Grid, Container, Button ,Paper} from '@material-ui/core';
import AvatarCustom from '../Avatar/AvatarCustom';
import PostHeader from '../SubredditPageHeader/SubredditPageHeader';
import FilterComp from '../FilterComp/FilterComp';
import PopularPostList from '../Popular/PopularPostList';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import UserCountView from '../UserCountView/UserCountView';
import AddIcon from '@material-ui/icons/Add';
import SubredditDescription from '../SubreeditDescription/SubredditDescription';
import UserCardView from '../UserCardView/UserCardView';
import CommentList from '../UserComments/CommentList';
const styles = theme => ({
    button: {
     width:'100%',
     marginBottom:16
    },
    
  });
class User extends Component{
    state={
        username:""
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if(prevState.username!==nextProps.match.params.username){
        nextProps.loadUserInfo(nextProps.match.params.username);
        nextProps.loadComments(nextProps.match.params.username); 
       
      }
    }

    componentDidMount(){
        const name = this.props.match.params.username;
        this.setState({username:name});
        this.props.loadUserInfo(name);
        this.props.loadComments(name); 
       
        //this.props.loadSubredditInfo(name);
      };
      componentDidUpdate(prevProps){
       // if(prevProps.userInfo)
        //const name = this.props.match.params.username;
       // this.props.loadComments(name); 
      // const name = this.props.match.params.username;
       // this.props.loadComments(name); 
        //this.props.loadUserInfo(name);
      };
    render(){
        const { classes } = this.props;
        const name = this.props.match.params.username;
        return(
            <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} md={5} sm={12} lg={5}>
                    {
                      this.props.userInfo.data && <UserCardView userInfo={this.props.userInfo}></UserCardView>
                    }
                </Grid>
                <Grid item xs={12} md={7} sm={12} lg={7}>
                <CommentList comments={this.props.comments}></CommentList>
                {
                this.props.comments.length==0 && 
                <Paper >
                <Grid container justify="center" alignItems="center" direction="column" style={{minHeight:'85vh'}}>
                <Grid item xs={12} md={12} sm={12}> 
                <Typography variant="h4">
                 User has no Comments...
                </Typography>
                </Grid>
                 </Grid>
                </Paper>
              }
                </Grid>
            
            </Grid>
            </Container>
        )
    }
}

const mapStateToProps= state=>{
    return {
     //  subredditPosts:state.postsStore.subredditPosts,
      // filterType:state.homeStore.filterType,
      userInfo:state.userStore.userInfo,
      comments:state.userStore.comments
    }
};
const mapDispatchToProps= dispatch=>{
    return{
       // loadSubredditPosts:(filter,subreddit)=>dispatch(action.loadSubredditPosts(filter,subreddit)),
        loadComments:(username)=>dispatch(action.loadUserComments(username)),
        loadUserInfo:(username)=>dispatch(action.loadUserInfo(username))       
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(User));
// export default withStyles(styles, { withTheme: true })(Posts);
