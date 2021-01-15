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



class  Home extends Component{

 componentDidMount(){
    this.props.loadPopular(this.props.filterType);
  }
  componentDidUpdate(prevProps){
    if (this.props.filterType !== prevProps.filterType) {
    this.props.loadPopular(this.props.filterType);
    }
  }

render(){
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
    
    </React.Fragment>
   )
   }
};
const mapStateToProps= state=>{
    return {
       popularPosts:state.homeStore.popular,
       filterType:state.homeStore.filterType,
    }
};
const mapDispatchToProps= dispatch=>{
    return{
        loadPopular:(param)=>dispatch(action.loadPopular(param)),
    }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Home);