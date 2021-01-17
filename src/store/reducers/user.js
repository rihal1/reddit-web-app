import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState = {
  userInfo: {},
  comments: []
};

const loadCommentsSuccess = (state, action) => {
  return utility.updateObject(state, { comments: action.comments });

}
const loadUserInfoSuccess = (state, action) => {
  return utility.updateObject(state, { userInfo: action.userInfo });

}
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

