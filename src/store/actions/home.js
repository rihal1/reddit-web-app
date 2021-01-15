
import * as actionTypes from './actionTypes';
import EndPointConfig from '../../configuration/EndPointConfig';


export const startLoader=()=>{
  return{
      type:actionTypes.START_LOADER,
      loading:true
  }
};
export const endLoader=()=>{
  return{
      type:actionTypes.END_LOADER,
      loading:false
  }
};
export const loadTrendingSuccess=(response)=>{
  return{
      type:actionTypes.LOAD_TRENDING_POSTS,
      trending:response
  }
};
export const loadTrendingError=()=>{
    return{
        type:actionTypes.LOAD_TRENDING_POSTS_FAILED
    }
  };
  export const loadTrending = () => {
    return async dispatch => {     
        try {
            const result = await fetch(EndPointConfig.get_trending_post);
            const response= await result.json(); 
            const topFourResponse=response.trending_searches.slice(0,4);
            dispatch(loadTrendingSuccess(topFourResponse));
          } catch(error) {
            dispatch(loadTrendingError(error));
          }
    };
};

export const loadPopularSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_POPULAR_POSTS,
        popular:response
    }
  };
  export const loadPopularError=()=>{
      return{
          type:actionTypes.LOAD_POPULAR_POSTS_FAILED
      }
    };
    export const loadPopular = (param) => {
      
      return async dispatch => {    
        // dispatch({type:actionTypes.START_LOADER});
          try {
            dispatch(startLoader());
            const result = await fetch(EndPointConfig.get_popular_posts.concat(`${param}.json`));
            const response= await result.json(); 
            const list=response.data.children;
              dispatch(loadPopularSuccess(list));
              dispatch(endLoader());
            } catch(error) {
              dispatch(loadPopularError(error));
              dispatch(endLoader())
            }
      };
  };
  export const loadSubredditsSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_SUBREDDITS,
        subreddits:response
    }
  };
  export const loadSubredditsError=()=>{
      return{
          type:actionTypes.LOAD_SUBREDDITS_FAILED
      }
    };
    export const loadSubreddits = () => {
      return async dispatch => {     
          try {
            const result = await fetch(EndPointConfig.get_subreddit_list);
            const response= await result.json(); 
            const list=response.data.children.slice(0,11);
              dispatch(loadSubredditsSuccess(list));
            } catch(error) {
              dispatch(loadSubredditsError(error));
            }
      };
  };

  export const setFilter=(filter)=>{
      return{
          type:actionTypes.FILTER_POSTS,
          filterType:filter
      }
  }


