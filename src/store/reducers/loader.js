import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'
import LoaderConst from '../../constants/LoaderConstant';

const initialState={
    loadingTrending:false,
    loadingPopular:false,
    loadingSubreddits:false,
    loadingUserComments:false,
   };
  

     const startLoader=(state,action)=>{
     return checkLoaderType(state,action,true);
     }
     const endLoader=(state,action)=>{
      return checkLoaderType(state,action,false);
        }
   const checkLoaderType=(state,action,input)=>{
      switch(action.loaderType){
            case LoaderConst.TrendingLoader: return utility.updateObject(state,{loadingTrending:input});
            case LoaderConst.PopularLoader: return utility.updateObject(state,{loadingPopular:input});
            case LoaderConst.SubredditsLoader: return utility.updateObject(state,{loadingSubreddits:input});
            case LoaderConst.CommentsLoader: return utility.updateObject(state,{loadingUserComments:input});
            default: return state;
            }
      }
      //loader reducer
     const reducer=(state=initialState,action)=>{    
       switch(action.type){
       case actionTypes.END_LOADER: return endLoader(state,action);
       case actionTypes.START_LOADER: return startLoader(state,action);
       default: return state;
       }
   };
   
export default reducer;

