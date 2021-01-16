
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
        errorType:ErrorConst.Homepage
    }
  };
  export const hideHomeError=()=>{
    return{
        type:actionTypes.HIDE_ERROR,
        errorType:ErrorConst.Homepage

    }
  };
  export const loadTrendingSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_TRENDING_POSTS,
        trending:response
    }
  };
  export const loadTrending = () => {
    return async dispatch => {     
        try {
            dispatch(startLoader(LoaderConst.TrendingLoader));
            const result = await fetch(EndPointConfig.get_trending_post);
            const response= await result.json(); 
            const topFourResponse=response.trending_searches.slice(0,4);
            dispatch(loadTrendingSuccess(topFourResponse));
            dispatch(endLoader(LoaderConst.TrendingLoader));
          } catch(error) {
            dispatch(setError());
            dispatch(endLoader(LoaderConst.TrendingLoader));
          }
    };
};

export const loadPopularSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_POPULAR_POSTS,
        popular:response
    }
  };
  // export const loadPopularError=()=>{
  //     return{
  //         type:actionTypes.LOAD_POPULAR_POSTS_FAILED
  //     }
  //   };
    export const loadPopular = (param) => {
      
      return async dispatch => {    
        // dispatch({type:actionTypes.START_LOADER});
          try {
            dispatch(startLoader(LoaderConst.PopularLoader));
            const result = await fetch(EndPointConfig.get_popular_posts.concat(`${param}.json`));
            const response= await result.json(); 
            const list=response.data.children;
              dispatch(loadPopularSuccess(list));
              dispatch(endLoader(LoaderConst.PopularLoader));
            } catch(error) {
              dispatch(setError());
              dispatch(endLoader(LoaderConst.PopularLoader))
            }
      };
  };
  export const loadSubredditsSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_SUBREDDITS,
        subreddits:response
    }
  };
  // export const loadSubredditsError=()=>{
  //     return{
  //         type:actionTypes.LOAD_SUBREDDITS_FAILED
  //     }
  //   };
    export const loadSubreddits = () => {
      return async dispatch => {     
          try {
            dispatch(startLoader(LoaderConst.SubredditsLoader));
            const result = await fetch(EndPointConfig.get_subreddit_list);
            const response= await result.json(); 
            const list=response.data.children.slice(0,11);
              dispatch(loadSubredditsSuccess(list));
              dispatch(endLoader(LoaderConst.SubredditsLoader));
            } catch(error) {
              dispatch(setError());
              dispatch(endLoader(LoaderConst.PopularLoader));
            }
      };
  };

  export const setFilter=(filter)=>{
      return{
          type:actionTypes.FILTER_POSTS,
          filterType:filter
      }
  }


