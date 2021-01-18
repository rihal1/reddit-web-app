import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState = {
  error: false,
  subredditPosts: [],
  subredditInfo: {}
};
//sets the about info of the specific to subreddit in posts page
const loadSubredditInfoSuccess = (state, action) => {
  return utility.updateObject(state, { subredditInfo: action.subredditInfo, error: false, loading: false });

}
//sets the posts specific to subreddit in posts page
const loadSubredditPostsSuccess = (state, action) => {
  return utility.updateObject(state, { subredditPosts: action.subredditPosts, error: false, loading: false });

}
//posts reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SUBREDDIT_INFO: return loadSubredditInfoSuccess(state, action);
    case actionTypes.LOAD_SUBREDDIT_POSTS: return loadSubredditPostsSuccess(state, action);
    default: return state;
  }
};

export default reducer;

