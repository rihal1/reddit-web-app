import React, { Component } from 'react';
import TrendingPostList from '../Trending/TrendingPostList';
import FilterComp from '../FilterComp/FilterComp';
import { Typography, Grid, AppBar, Toolbar, Container } from '@material-ui/core';
import SubRedditList from '../SubReddits/SubRedditList';
import PopularPostList from '../Popular/PopularPostList';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';
import ErrorBar from '../ErrorBar/ErrorBar';

//A stateful Home/Landing page Component
class Home extends Component {

  //Mounting lifecycle for loading popular,trending posts and top subreddits in the home page
  componentDidMount() {
    this.props.loadPopular(this.props.filterType);
    this.props.loadSubreddits();
    this.props.loadTrending();
  }

  //Update lifecycle for updating the popular posts when filter changes
  componentDidUpdate(prevProps) {
    if (this.props.filterType !== prevProps.filterType) {
      this.props.loadPopular(this.props.filterType);
    }
  }
  //close the errorBar in the page, if any error occures
  handleErrorClose = () => {
    this.props.hideHomeError();
  }

  render() {

    return (

      <React.Fragment>
        <Container>
          <Grid container spacing={1} >
            {/* column for loading popular posts with filter */}
            <Grid item xs={12} sm={12} md={9} >
              <Typography variant="h5" color="textSecondary" style={{ margin: 10 }}>Trending Today</Typography>
              <TrendingPostList trendingPosts={this.props.trendingPosts}></TrendingPostList>
              <FilterComp></FilterComp>
              <PopularPostList posts={this.props.popularPosts} page='home'></PopularPostList>

            </Grid>
            {/* column for loading top 10 communities */}
            <Grid item xs={12} sm={12} md={3} >
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Typography variant="h6" color="initial">
                    Top 10 Communities..
        </Typography>
                </Toolbar>
              </AppBar>
              <SubRedditList subRedditList={this.props.subRedditList}></SubRedditList>
            </Grid>
          </Grid>
        </Container>
        {/* shows any api error occured in a snackbar on top right corner of the page */}
        { this.props.error &&
          <ErrorBar open={this.props.error} close={this.handleErrorClose}></ErrorBar>
        }
      </React.Fragment>
    )
  }
};
// maps the redux store states to props
const mapStateToProps = state => {
  return {
    popularPosts: state.homeStore.popular,
    filterType: state.homeStore.filterType,
    error: state.errorStore.errorHomePage,
    subRedditList: state.homeStore.subreddits,
    trendingPosts: state.homeStore.trending,
  }
};
//maps the redux action creators to props
const mapDispatchToProps = dispatch => {
  return {
    loadPopular: (param) => dispatch(action.loadPopular(param)),
    hideHomeError: () => dispatch(action.hideHomeError()),
    loadSubreddits: () => dispatch(action.loadSubreddits()),
    loadTrending: () => dispatch(action.loadTrending()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);