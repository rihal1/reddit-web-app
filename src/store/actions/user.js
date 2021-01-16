
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
  export const logout=()=>{
    return{
        type:actionTypes.LOGOUT
    }
  };
  export const setError=()=>{
    return{
        type:actionTypes.SET_ERROR,
        errorType:ErrorConst.UserPage
    }
  };
  export const hideUserError=()=>{
    return{
        type:actionTypes.HIDE_ERROR,
        errorType:ErrorConst.UserPage
    }
  };
export const loadUserInfoSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_USER_INFO,
        userInfo:response
    }
  };
  // export const loadUserInfoFailed=()=>{
  //     return{
  //         type:actionTypes.LOAD_USER_INFO_FAILED
  //     }
  //   };
    export const loadUserInfo = (param) => {
      
      return async dispatch => {    
        // dispatch({type:actionTypes.START_LOADER});
          try {
            //dispatch(startLoader());
            const result = await fetch(EndPointConfig.get_user_info(param));
            const response= await result.json(); 
            //console.log(response);
              dispatch(loadUserInfoSuccess(response));
            } catch(error) {
              //dispatch(loadUserInfoFailed(error));
              dispatch(setError());
            }
      };
  };

  export const loadCommentsSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_USER_COMMENTS,
        comments:response
    }
  };
  // export const loadCommentsError=()=>{
  //     return{
  //         type:actionTypes.LOAD_USER_COMMENTS_FAILED
  //     }
  //   };
    export const loadUserComments = (param) => {
      return async dispatch => {     
          try {
            dispatch(startLoader(LoaderConst.CommentsLoader));
              const result = await fetch(EndPointConfig.get_user_comments(param));
              const response= await result.json(); 
              const list=response.data.children;
              dispatch(loadCommentsSuccess(list));
              dispatch(endLoader(LoaderConst.CommentsLoader));
            } catch(error) {
              dispatch(setError());
              dispatch(endLoader(LoaderConst.CommentsLoader));
            }
      };
  };
  
 
  
