
import * as actionTypes from './actionTypes';
import EndPointConfig from '../../configuration/EndPointConfig';
import ErrorConst from '../../constants/ErrorConstants';
import LoaderConst from '../../constants/LoaderConstant';

//start loader action creator
export const startLoader = (type) => {
  return {
    type: actionTypes.START_LOADER,
    loaderType: type
  }
};
//end loader action creator
export const endLoader = (type) => {
  return {
    type: actionTypes.END_LOADER,
    loaderType: type
  }
};
//set error action creator for Posts Page
export const setError = () => {
  return {
    type: actionTypes.SET_ERROR,
    errorType: ErrorConst.PostPage
  }
};
//hide error action creator for Posts Page
export const hidePostError = () => {
  return {
    type: actionTypes.HIDE_ERROR,
    errorType: ErrorConst.PostPage
  }
};
//load subreddit info success action creator for Posts Page
export const loadSubredditInfoSuccess = (response) => {
  return {
    type: actionTypes.LOAD_SUBREDDIT_INFO,
    subredditInfo: response
  }
};

//api call for loading subreddit Info in thunk middleware
export const loadSubredditInfo = (param) => {
  return async dispatch => {

    try {

      const result = await fetch(EndPointConfig.get_subreddit_info(param));
      const response = await result.json();
      dispatch(loadSubredditInfoSuccess(response.data));
    } catch (error) {
      dispatch(setError());
    }
  };
};
//load subreddit posts success action creator for Posts Page
export const loadSubredditPostsSuccess = (response) => {
  return {
    type: actionTypes.LOAD_SUBREDDIT_POSTS,
    subredditPosts: response
  }
};

//api call for loading a subreddits poular posts in thunk middleware
export const loadSubredditPosts = (subreddit, filter) => {
  return async dispatch => {
    try {
      dispatch(startLoader(LoaderConst.PopularLoader));
      const result = await fetch(EndPointConfig.get_subreddit_posts(subreddit, filter));
      const response = await result.json();
      const list = response.data.children;
      dispatch(loadSubredditPostsSuccess(list));
      dispatch(endLoader(LoaderConst.PopularLoader));
    } catch (error) {
      dispatch(setError());
      dispatch(endLoader(LoaderConst.PopularLoader));
    }
  };
};




