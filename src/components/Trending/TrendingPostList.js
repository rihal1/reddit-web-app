import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import TrendingPost from './TrendingPost';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));
//Component for loading Trending Posts List
const TrendingPostList = (props) => {
  const classes = useStyles();

  //loader for trending list component
  if (props.loading)
    return <div className={classes.root}><CircularProgress /></div>
  else
    return (

      <Grid container spacing={1} style={{ padding: 16 }}>
        { props.trendingPosts.map((trending, index) => (
          <Grid key={trending.results.data.children[0].data.title.concat(index)} item xs={12} sm={6} md={3} >
            <TrendingPost item={trending}></TrendingPost>
          </Grid>
        ))}
      </Grid>
    )
}
const mapStateToProps = state => {
  return {
    loading: state.loaderStore.loadingTrending

  }
};

export default connect(mapStateToProps, null)(TrendingPostList);