import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState = {
  error: false,
  subredditPosts: [],
  subredditInfo: {},
  subredditPostComments:[],
  isCommentClicked:false,
  subredditPostView:{}
};
//sets the about info of the specific to subreddit in posts page
const loadSubredditInfoSuccess = (state, action) => {
  return utility.updateObject(state, { subredditInfo: action.subredditInfo});

}
//sets the posts list specific to subreddit in posts page
const loadSubredditPostsSuccess = (state, action) => {
  return utility.updateObject(state, { subredditPosts: action.subredditPosts });

}
//sets the specific post comments list posts page
const loadSubredditPostCommentsSuccess = (state, action) => {
  return utility.updateObject(state, { subredditPostComments: action.subredditPostComments
    ,isCommentClicked:true});

}
//hides the specific post comments section posts page
const hideSubredditPostCommentsSuccess = (state, action) => {
  return utility.updateObject(state, { subredditPostComments: []
    ,isCommentClicked:false});

}

//sets the specific post comments list posts page
const loadSubredditPostViewSuccess = (state, action) => {
  return utility.updateObject(state, { subredditPostView: action.subredditPostView});

}
//hides the specific post comments section posts page
const hideSubredditPostViewSuccess = (state, action) => {
  return utility.updateObject(state, { subredditPostView: {}});

}
//posts reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SUBREDDIT_INFO: return loadSubredditInfoSuccess(state, action);
    case actionTypes.LOAD_SUBREDDIT_POSTS: return loadSubredditPostsSuccess(state, action);
    case actionTypes.LOAD_SUBREDDIT_POST_COMMENTS: return loadSubredditPostCommentsSuccess(state, action);
    case actionTypes.HIDE_SUBREDDIT_POST_COMMENTS: return hideSubredditPostCommentsSuccess(state, action);
    case actionTypes.LOAD_SUBREDDIT_POST_VIEW: return loadSubredditPostViewSuccess(state, action);
    case actionTypes.HIDE_SUBREDDIT_POST_VIEW: return hideSubredditPostViewSuccess(state, action);
    default: return state;
  }
};

export default reducer;

