import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState = {
  userInfo: {},
  comments: []
};
//sets the user comments after loggin in
const loadCommentsSuccess = (state, action) => {
  return utility.updateObject(state, { comments: action.comments });

}
//sets the user info when logs in
const loadUserInfoSuccess = (state, action) => {
  return utility.updateObject(state, { userInfo: action.userInfo });

}
//sets the userinfo as blank after logout
const logout = (state) => {
  return utility.updateObject(state, { userInfo: {} })
}
//user reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER_INFO: return loadUserInfoSuccess(state, action);
    case actionTypes.LOAD_USER_COMMENTS: return loadCommentsSuccess(state, action);
    case actionTypes.LOGOUT: return logout(state);
    default: return state;
  }
};

export default reducer;

