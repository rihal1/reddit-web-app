
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
//hide loader action creator
export const endLoader = (type) => {
  return {
    type: actionTypes.END_LOADER,
    loaderType: type
  }
};
//logout action creator for User Page
export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  }
};
//set error action creator for User Page
export const setError = () => {
  return {
    type: actionTypes.SET_ERROR,
    errorType: ErrorConst.UserPage
  }
};
//hide error action creator for User Page
export const hideUserError = () => {
  return {
    type: actionTypes.HIDE_ERROR,
    errorType: ErrorConst.UserPage
  }
};
//load user info success action creator for User Page
export const loadUserInfoSuccess = (response) => {
  return {
    type: actionTypes.LOAD_USER_INFO,
    userInfo: response
  }
};

//api call for loading user info of a loggedin user in thunk middleware
export const loadUserInfo = (param) => {

  return async dispatch => {
    try {
      const result = await fetch(EndPointConfig.get_user_info(param));
      const response = await result.json();
      dispatch(loadUserInfoSuccess(response));
    } catch (error) {
      dispatch(setError());
    }
  };
};

//load comments success action creator for User Page
export const loadCommentsSuccess = (response) => {
  return {
    type: actionTypes.LOAD_USER_COMMENTS,
    comments: response
  }
};

//api call for loading comments of a loggedin user in thunk middleware
export const loadUserComments = (param) => {
  return async dispatch => {
    try {
      dispatch(startLoader(LoaderConst.CommentsLoader));
      const result = await fetch(EndPointConfig.get_user_comments(param));
      const response = await result.json();
      const list = response.data.children;
      dispatch(loadCommentsSuccess(list));
      dispatch(endLoader(LoaderConst.CommentsLoader));
    } catch (error) {
      dispatch(setError());
      dispatch(endLoader(LoaderConst.CommentsLoader));
    }
  };
};



