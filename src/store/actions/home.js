
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

//set error action creator for Home Page
export const setError = () => {
  return {
    type: actionTypes.SET_ERROR,
    errorType: ErrorConst.Homepage
  }
};
//hide error action creator for Home Page
export const hideHomeError = () => {
  return {
    type: actionTypes.HIDE_ERROR,
    errorType: ErrorConst.Homepage

  }
};
//load trending posts success action creator for Home Page
export const loadTrendingSuccess = (response) => {
  return {
    type: actionTypes.LOAD_TRENDING_POSTS,
    trending: response
  }
};

//api call for trending posts in thunk middleware
export const loadTrending = () => {
  return async dispatch => {
    try {
      dispatch(startLoader(LoaderConst.TrendingLoader));
      const result = await fetch(EndPointConfig.get_trending_post);
      const response = await result.json();
      const topFourResponse = response.trending_searches.slice(0, 4);
      dispatch(loadTrendingSuccess(topFourResponse));
      dispatch(endLoader(LoaderConst.TrendingLoader));
    } catch (error) {
      dispatch(setError());
      dispatch(endLoader(LoaderConst.TrendingLoader));
    }
  };
};

//load popular posts success action creator for Home Page
export const loadPopularSuccess = (response) => {
  return {
    type: actionTypes.LOAD_POPULAR_POSTS,
    popular: response
  }
};

//api call for popular posts in thunk middleware
export const loadPopular = (param) => {

  return async dispatch => {

    try {
      dispatch(startLoader(LoaderConst.PopularLoader));
      const result = await fetch(EndPointConfig.get_popular_posts(param));
      const response = await result.json();
      const list = response.data.children;
      dispatch(loadPopularSuccess(list));
      dispatch(endLoader(LoaderConst.PopularLoader));
    } catch (error) {
      dispatch(setError());
      dispatch(endLoader(LoaderConst.PopularLoader))
    }
  };
};
//load subreddits success action creator for Home Page
export const loadSubredditsSuccess = (response) => {
  return {
    type: actionTypes.LOAD_SUBREDDITS,
    subreddits: response
  }
};

//api call for subreddits in thunk middleware
export const loadSubreddits = () => {
  return async dispatch => {
    try {
      dispatch(startLoader(LoaderConst.SubredditsLoader));
      const result = await fetch(EndPointConfig.get_subreddit_list);
      const response = await result.json();
      const list = response.data.children.slice(0, 11);
      dispatch(loadSubredditsSuccess(list));
      dispatch(endLoader(LoaderConst.SubredditsLoader));
    } catch (error) {
      dispatch(setError());
      dispatch(endLoader(LoaderConst.PopularLoader));
    }
  };
};

//set the filter for loading popular posts in home page
export const setFilter = (filter) => {
  return {
    type: actionTypes.FILTER_POSTS,
    filterType: filter
  }
}


