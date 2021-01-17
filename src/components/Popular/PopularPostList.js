import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PopularPost from './PopularPost';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorBar: {
    width: '100%',
    textAlign: 'center'
  }
}));

//Component for showing the list of popular posts
const PopularPostList = (props) => {
  const classes = useStyles();

  //loader for showing the popular posts
  if (props.loading)
    return <div className={classes.root}><CircularProgress /></div>
  else
    return (
      <React.Fragment>
        {

          props.posts.map((item, index) => (
            <React.Fragment>
              <PopularPost key={item.data.subreddit_name_prefixed.concat(index)} item={item}></PopularPost>
            </React.Fragment>
          ))
        }

      </React.Fragment>

    );


}
const mapStateToProps = state => {
  return {
    filterType: state.homeStore.filterType,
    loading: state.loaderStore.loadingPopular

  }
};
export default connect(mapStateToProps, null)(PopularPostList);