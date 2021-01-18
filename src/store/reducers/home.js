import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'

const initialState = {
  trending: [],
  popular: [],
  subreddits: [],
  filterType: 'hot',
};

//sets the trending posts list for Home page
const loadTrendingSuccess = (state, action) => {
  return utility.updateObject(state, { trending: action.trending });

}
//sets the popular posts list for Home page
const loadPopularSuccess = (state, action) => {
  return utility.updateObject(state, { popular: action.popular, error: false });

}
//sets the subreddits list for home page
const loadSubredditsSuccess = (state, action) => {
  return utility.updateObject(state, { subreddits: action.subreddits });

}
//sets filter state for loading popular posts
const setFilter = (state, action) => {
  return utility.updateObject(state, { filterType: action.filterType })
}

//home reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TRENDING_POSTS: return loadTrendingSuccess(state, action);
    case actionTypes.LOAD_POPULAR_POSTS: return loadPopularSuccess(state, action);
    case actionTypes.LOAD_SUBREDDITS: return loadSubredditsSuccess(state, action);
    case actionTypes.FILTER_POSTS: return setFilter(state, action);
    default: return state;
  }
};

export default reducer;

