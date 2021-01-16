import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState={
   // trending:[],
    error: false,
    //popular:[],
    subredditPosts:[],
    //postFilterType:'hot',
    //loading:false,
    subredditInfo:{}
   };
  
// const loadTrendingSuccess=(state,action)=>{
//   return utility.updateObject(state,{trending:action.trending});
 
// }
// const loadTrendingError=(state)=>{
//   return  utility.updateObject(state,{error:true})
//   }
const loadSubredditInfoSuccess=(state,action)=>{
    return utility.updateObject(state,{subredditInfo:action.subredditInfo,error:false,loading:false});
   
  }
  // const loadSubredditInfoError=(state)=>{
  //   return  utility.updateObject(state,{error:true,loading:false})
  //   }
  const loadSubredditPostsSuccess=(state,action)=>{
      return utility.updateObject(state,{subredditPosts:action.subredditPosts,error:false,loading:false});
     
    }
    // const loadSubredditPostsError=(state)=>{
    //   return  utility.updateObject(state,{error:true,loading:false})
    //   }
    //   const setPostFilter=(state,action)=>{
    //   return  utility.updateObject(state,{filterType:action.filterType})
    //  }
     
    //  const startLoader=(state,action)=>{
    //  return utility.updateObject(state,{loading:true});
    //  }
     const reducer=(state=initialState,action)=>{    
       switch(action.type){
       case actionTypes.LOAD_SUBREDDIT_INFO: return loadSubredditInfoSuccess(state,action);
      // case actionTypes.LOAD_SUBREDDIT_INFO_FAILED: return loadSubredditInfoError(state);
       case actionTypes.LOAD_SUBREDDIT_POSTS: return loadSubredditPostsSuccess(state,action);
      // case actionTypes.LOAD_SUBREDDIT_POSTS_FAILED: return loadSubredditPostsError(state);
    //    case actionTypes.LOAD_SUBREDDITS: return loadSubredditsSuccess(state,action);
    //    case actionTypes.LOAD_SUBREDDITS_FAILED: return loadSubredditsError(state);
      // case actionTypes.FILTER_SUBREDDIT_POSTS: return setPostFilter(state,action);
    //    case actionTypes.START_LOADER: return startLoader(state,action);
       default: return state;
       }
   };
   
export default reducer;

