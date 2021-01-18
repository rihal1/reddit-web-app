import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility';
import ErrorConst from '../../constants/ErrorConstants';


const initialState = {
   errorHomePage: false,
   errorPostPage: false,
   errorUserPage: false
};

//sets the error as true to the specific page
const setError = (state, action) => {
   return checkErrorType(state, action, true);
}
//sets the error as false to the specific page
const hideError = (state, action) => {
   return checkErrorType(state, action, false);
}

//checks if the error has occured in Home/Posts/User page
const checkErrorType = (state, action, input) => {
   if (action.errorType === ErrorConst.Homepage) {
      return utility.updateObject(state, { errorHomePage: input });
   }
   else if (action.errorType === ErrorConst.PostPage) {
      return utility.updateObject(state, { errorPostPage: input });
   }
   else {
      return utility.updateObject(state, { errorUserPage: input });
   }
}
//error reducer
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.SET_ERROR: return setError(state, action);
      case actionTypes.HIDE_ERROR: return hideError(state, action);
      default: return state;
   }
};

export default reducer;

