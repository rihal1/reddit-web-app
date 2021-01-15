
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
  export const logout=()=>{
    return{
        type:actionTypes.LOGOUT
    }
  };
export const loadUserInfoSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_USER_INFO,
        userInfo:response
    }
  };
  export const loadUserInfoFailed=()=>{
      return{
          type:actionTypes.LOAD_USER_INFO_FAILED
      }
    };
    export const loadUserInfo = (param) => {
      
      return async dispatch => {    
        // dispatch({type:actionTypes.START_LOADER});
          try {
            //dispatch(startLoader());
            const result = await fetch(EndPointConfig.get_user_info(param));
            const response= await result.json(); 
            console.log(response);
              dispatch(loadUserInfoSuccess(response));
            } catch(error) {
              dispatch(loadUserInfoFailed(error));
            }
      };
  };

  export const loadCommentsSuccess=(response)=>{
    return{
        type:actionTypes.LOAD_USER_COMMENTS,
        comments:response
    }
  };
  export const loadCommentsError=()=>{
      return{
          type:actionTypes.LOAD_USER_COMMENTS_FAILED
      }
    };
    export const loadUserComments = (param) => {
      return async dispatch => {     
          try {
              const result = await fetch(EndPointConfig.get_user_comments(param));
              const response= await result.json(); 
              const list=response.data.children;
              dispatch(loadCommentsSuccess(list));
            } catch(error) {
              dispatch(loadCommentsError(error));
            }
      };
  };
  
 
  
