import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState={
    //trending:[],
    //error: false,
//    // popular:[],
//     subreddits:[],
//     filterType:'hot',
    loading:false
   };
  

     const startLoader=(state,action)=>{
     return utility.updateObject(state,{loading:action.loading});
     }
     const endLoader=(state,action)=>{
        return utility.updateObject(state,{loading:action.loading});
        }
     const reducer=(state=initialState,action)=>{    
       switch(action.type){
    //    case actionTypes.LOAD_TRENDING_POSTS: return loadTrendingSuccess(state,action);
    //    case actionTypes.LOAD_TRENDING_POSTS_FAILED: return loadTrendingError(state);
    //    case actionTypes.LOAD_POPULAR_POSTS: return loadPopularSuccess(state,action);
    //    case actionTypes.LOAD_POPULAR_POSTS_FAILED: return loadPopularError(state);
    //    case actionTypes.LOAD_SUBREDDITS: return loadSubredditsSuccess(state,action);
    //    case actionTypes.LOAD_SUBREDDITS_FAILED: return loadSubredditsError(state);
       case actionTypes.END_LOADER: return endLoader(state,action);
       case actionTypes.START_LOADER: return startLoader(state,action);
       default: return state;
       }
   };
   
export default reducer;

