import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState={
   // trending:[],
    error: false,
    //popular:[],
    userInfo:{},
    comments:[]
    //postFilterType:'hot',
    //loading:false,
   // subredditInfo:{}
   };
  
const loadCommentsSuccess=(state,action)=>{
  return utility.updateObject(state,{comments:action.comments});
 
}
// const loadCommentsError=(state)=>{
//   return  utility.updateObject(state,{error:true})
//   }
const loadUserInfoSuccess=(state,action)=>{
    return utility.updateObject(state,{userInfo:action.userInfo,error:false});
   
  }
  // const loadUserInfoError=(state)=>{
  //   return  utility.updateObject(state,{error:true})
  //   }
    const logout=(state)=>{
        return  utility.updateObject(state,{userInfo:{}})
        }
     const reducer=(state=initialState,action)=>{    
       switch(action.type){
       case actionTypes.LOAD_USER_INFO: return loadUserInfoSuccess(state,action);
      // case actionTypes.LOAD_USER_INFO_FAILED: return loadUserInfoError(state);
       case actionTypes.LOAD_USER_COMMENTS: return loadCommentsSuccess(state,action);
      // case actionTypes.LOAD_USER_COMMENTS_FAILED: return loadCommentsError(state);
       case actionTypes.LOGOUT: return logout(state);
    //    case actionTypes.LOAD_SUBREDDITS: return loadSubredditsSuccess(state,action);
    //    case actionTypes.LOAD_SUBREDDITS_FAILED: return loadSubredditsError(state);
      // case actionTypes.FILTER_SUBREDDIT_POSTS: return setPostFilter(state,action);
    //    case actionTypes.START_LOADER: return startLoader(state,action);
       default: return state;
       }
   };
   
export default reducer;

