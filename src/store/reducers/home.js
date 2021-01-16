import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState={
    trending:[],
    //error: false,
    popular:[],
    subreddits:[],
    filterType:'hot',
    //loading:false
   };
  
const loadTrendingSuccess=(state,action)=>{
  return utility.updateObject(state,{trending:action.trending});
 
}
// const loadTrendingError=(state)=>{
//   return  utility.updateObject(state,{error:true})
//   }
const loadPopularSuccess=(state,action)=>{
    return utility.updateObject(state,{popular:action.popular,error:false});
   
  }
  // const loadPopularError=(state)=>{
  //   return  utility.updateObject(state,{error:true})
  //   }
  const loadSubredditsSuccess=(state,action)=>{
      return utility.updateObject(state,{subreddits:action.subreddits});
     
    }
    // const loadSubredditsError=(state)=>{
    //   return  utility.updateObject(state,{error:true})
    //   }
      const setFilter=(state,action)=>{
      return  utility.updateObject(state,{filterType:action.filterType})
     }
     
    //  const startLoader=(state,action)=>{
    //  return utility.updateObject(state,{loading:true});
    //  }
     const reducer=(state=initialState,action)=>{    
       switch(action.type){
       case actionTypes.LOAD_TRENDING_POSTS: return loadTrendingSuccess(state,action);
       //case actionTypes.LOAD_TRENDING_POSTS_FAILED: return loadTrendingError(state);
       case actionTypes.LOAD_POPULAR_POSTS: return loadPopularSuccess(state,action);
       //case actionTypes.LOAD_POPULAR_POSTS_FAILED: return loadPopularError(state);
       case actionTypes.LOAD_SUBREDDITS: return loadSubredditsSuccess(state,action);
       //case actionTypes.LOAD_SUBREDDITS_FAILED: return loadSubredditsError(state);
       case actionTypes.FILTER_POSTS: return setFilter(state,action);
      // case actionTypes.START_LOADER: return startLoader(state,action);
       default: return state;
       }
   };
   
export default reducer;

