
import * as actionTypes from './actionTypes';
import EndPointConfig from '../../configuration/EndPointConfig';
import  ErrorConst from '../../constants/ErrorConstants';
import LoaderConst from '../../constants/LoaderConstant';

export const startLoader=(type)=>{
  return{
      type:actionTypes.START_LOADER,
      loaderType: type
  }
};
export const endLoader=(type)=>{
  return{
      type:actionTypes.END_LOADER,
      loaderType: type
  }
};

  export const setError=()=>{
    return{
        type:actionTypes.SET_ERROR,
        errorType:ErrorConst.PostPage
    }
  };
  export const hidePostError=()=>{
    return{
        type:actionTypes.HIDE_ERROR,
        errorType:ErrorConst.PostPage
    }
  };
export const loadSubredditInfoSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_SUBREDDIT_INFO,
        subredditInfo:response
    }
  };
  // export const loadSubredditInfoFailed=()=>{
  //     return{
  //         type:actionTypes.LOAD_SUBREDDIT_INFO_FAILED
  //     }
  //   };
    export const loadSubredditInfo = (param) => {
      
      return async dispatch => {    
        // dispatch({type:actionTypes.START_LOADER});
          try {
            //dispatch(startLoader());
            const result = await fetch(EndPointConfig.get_subreddit_info(param));
            const response= await result.json(); 
              dispatch(loadSubredditInfoSuccess(response.data));
            } catch(error) {
              //dispatch(loadSubredditInfoFailed(error));
              dispatch(setError());
            }
      };
  };
  export const loadSubredditPostsSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_SUBREDDIT_POSTS,
        subredditPosts:response
    }
  };
  // export const loadSubredditPostsError=()=>{
  //     return{
  //         type:actionTypes.LOAD_SUBREDDIT_POSTS_FAILED
  //     }
  //   };
    export const loadSubredditPosts = (subreddit,filter) => {
      return async dispatch => {     
          try {
            dispatch(startLoader(LoaderConst.PopularLoader));
            const result = await fetch(EndPointConfig.get_subreddit_posts(subreddit,filter));
            const response= await result.json(); 
            const list=response.data.children;
              dispatch(loadSubredditPostsSuccess(list));
              dispatch(endLoader(LoaderConst.PopularLoader));
            } catch(error) {
              dispatch(setError());
              dispatch(endLoader(LoaderConst.PopularLoader));
            }
      };
  };

//   export const setPostFilter=(filter)=>{
//       return{
//           type:actionTypes.FILTER_SUBREDDIT_POSTS,
//           filterType:filter
//       }
//   }


