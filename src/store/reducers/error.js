import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility';
import ErrorConst from '../../constants/ErrorConstants';


const initialState={
    errorHomePage:false,
    errorPostPage:false,
    errorUserPage:false
   };
  

     const setError=(state,action)=>{
      return checkErrorType(state,action,true);
   //   if(action.errorType==='HomePage')
   //   return utility.updateObject(state,{errorHomePage:true});
   //   else if(action.errorType==='PostPage')
   //   return utility.updateObject(state,{errorPostPage:true});
   //   else
   //   return utility.updateObject(state,{errorUserPage:true});
     }
     const hideError=(state,action)=>{
        return checkErrorType(state,action,false);
      // if(action.errorType==='HomePage')
      // return utility.updateObject(state,{errorHomePage:false});
      // else if(action.errorType==='PostPage')
      // return utility.updateObject(state,{errorPostPage:false});
      // else
      // return utility.updateObject(state,{errorUserPage:false});
      }
        
      const checkErrorType=(state,action,input)=>{
         if(action.errorType===ErrorConst.Homepage){
         return utility.updateObject(state,{errorHomePage:input});
         }
         else if(action.errorType===ErrorConst.PostPage){
         return utility.updateObject(state,{errorPostPage:input});
         }
         else{
         return utility.updateObject(state,{errorUserPage:input});
         }
      }
     const reducer=(state=initialState,action)=>{    
       switch(action.type){
    //    case actionTypes.LOAD_TRENDING_POSTS: return loadTrendingSuccess(state,action);
    //    case actionTypes.LOAD_TRENDING_POSTS_FAILED: return loadTrendingError(state);
    //    case actionTypes.LOAD_POPULAR_POSTS: return loadPopularSuccess(state,action);
    //    case actionTypes.LOAD_POPULAR_POSTS_FAILED: return loadPopularError(state);
    //    case actionTypes.LOAD_SUBREDDITS: return loadSubredditsSuccess(state,action);
    //    case actionTypes.LOAD_SUBREDDITS_FAILED: return loadSubredditsError(state);
       case actionTypes.SET_ERROR: return setError(state,action);
       case actionTypes.HIDE_ERROR: return hideError(state,action);
      //  case actionTypes.SET_POST_ERROR: return setError(state,action);
      //  case actionTypes.HIDE_POST_ERROR: return hideError(state,action);
      //  case actionTypes: return setError(state,action);
      //  case actionTypes.HIDE_POST_ERROR: return hideError(state,action);
       default: return state;
       }
   };
   
export default reducer;

