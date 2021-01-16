import React, { Component }  from 'react';
import TrendingPost from '../Trending/TrendingPost';
import TrendingPostList from '../Trending/TrendingPostList';
import FilterComp from '../FilterComp/FilterComp';
import { Typography,Grid,AppBar,Toolbar, Container } from '@material-ui/core';
import SubRedditList from '../SubReddits/SubRedditList';
import PopularPostList from '../Popular/PopularPostList';
// import {Link} from 'react-router-dom';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import ErrorBar from '../ErrorBar/ErrorBar';
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
class  Home extends Component{

 state={
  // open:true,
   vertical: 'top',
   horizontal: 'right',
 }
 componentDidMount(){
    this.props.loadPopular(this.props.filterType);
  }
  componentDidUpdate(prevProps){
    if (this.props.filterType !== prevProps.filterType) {
    this.props.loadPopular(this.props.filterType);
    }
  }
 handleErrorClose=()=>{
  this.props.hideHomeError();
 // this.setState({open:false});
 }
render(){
  //const { vertical, horizontal } = this.state;
   return (
   
    <React.Fragment>
    <Container>
    <Grid container spacing={1} >
    <Grid item xs={12} sm={12} md={9} >
    <Typography variant="h5" color="textSecondary" style={{margin:10}}>Trending Today</Typography>
    <TrendingPostList ></TrendingPostList>
    <FilterComp></FilterComp>
    <PopularPostList   posts={this.props.popularPosts}></PopularPostList>
    </Grid>
    <Grid item xs={12} sm={12} md={3} >
    <AppBar position="static">
    <Toolbar variant="dense">
        <Typography variant="h6" color="initial">
        Top 10 Communities..
        </Typography>
    </Toolbar>
    </AppBar>
    <SubRedditList></SubRedditList>
    </Grid>
    </Grid>
    </Container>
    { this.props.error &&
    <ErrorBar open={this.props.error} close={this.handleErrorClose}></ErrorBar>
    }
    </React.Fragment>
   )
   }
};
const mapStateToProps= state=>{
    return {
       popularPosts:state.homeStore.popular,
       filterType:state.homeStore.filterType,
       error:state.errorStore.errorHomePage
    }
};
const mapDispatchToProps= dispatch=>{
    return{
        loadPopular:(param)=>dispatch(action.loadPopular(param)),
        hideHomeError:()=>dispatch(action.hideHomeError())
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(Home);