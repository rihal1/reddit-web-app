import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography,Grid, Container, Button,Box } from '@material-ui/core';
import AvatarCustom from '../Avatar/AvatarCustom';
import PostHeader from '../SubredditPageHeader/SubredditPageHeader';
import FilterComp from '../FilterComp/FilterComp';
import PopularPostList from '../Popular/PopularPostList';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import UserCountView from '../UserCountView/UserCountView';
import AddIcon from '@material-ui/icons/Add';
import SubredditDescription from '../SubreeditDescription/SubredditDescription';
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import ErrorBar from '../ErrorBar/ErrorBar';
const styles = theme => ({
    button: {
     width:'100%',
     //marginBottom:16
    },
    // marginCls:{
    //     margin:12
    // },
    // mediumBtn:{
    //     margin: theme.spacing(2.5),

    // }
  });
class Posts extends Component{

    state={
        isOpenPostModal:false
    }
    componentDidMount(){
        const name = this.props.match.params.subreddit;
        this.props.loadSubredditPosts(name,this.props.filterType); 
        this.props.loadSubredditInfo(name);
      };
      componentDidUpdate(prevProps){
        const name = this.props.match.params.subreddit;
        if (this.props.filterType !== prevProps.filterType) {
        this.props.loadSubredditPosts(name,this.props.filterType);
        }
      };

      openPostModal=()=>{
       this.setState({isOpenPostModal:true});
      }
      closePostModal = () => {
        this.setState({isOpenPostModal:false});
     };  

     handleErrorClose=()=>{
        this.props.hidePostError();
       // this.setState({open:false});
       }
    render(){
        const { classes } = this.props;
        const name = this.props.match.params.subreddit;
        return(
        <Container>
        <PostHeader name={name} info={this.props.subredditInfo}></PostHeader>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={9} lg={9}>
            <FilterComp></FilterComp>
            <PopularPostList  posts={this.props.subredditPosts}></PopularPostList>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box mb={2}>
            <Button variant="contained" color="secondary" className={classes.button}
             startIcon={<AddIcon />} onClick={this.openPostModal}>
                Add Post
             </Button>
             </Box>
            <SubredditDescription info={this.props.subredditInfo}></SubredditDescription>
            <UserCountView info={this.props.subredditInfo}></UserCountView>
            <RichTextEditor open={this.state.isOpenPostModal} closePostModal={this.closePostModal}
             userInfo={this.props.userInfo}></RichTextEditor>
          
            </Grid>
        </Grid>
        { this.props.error &&
        <ErrorBar open={this.props.error} close={this.handleErrorClose}></ErrorBar>
        }
        </Container>
        )
    }
}

const mapStateToProps= state=>{
    return {
       subredditPosts:state.postsStore.subredditPosts,
       filterType:state.homeStore.filterType,
       subredditInfo:state.postsStore.subredditInfo,
       userInfo:state.userStore.userInfo,
       error:state.errorStore.errorPostPage
    }
};
const mapDispatchToProps= dispatch=>{
    return{
        loadSubredditPosts:(filter,subreddit)=>dispatch(action.loadSubredditPosts(filter,subreddit)),
        loadSubredditInfo:(subreddit)=>dispatch(action.loadSubredditInfo(subreddit)),
        hidePostError:()=>dispatch(action.hidePostError())
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Posts));
// export default withStyles(styles, { withTheme: true })(Posts);
