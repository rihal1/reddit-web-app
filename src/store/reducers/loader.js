import * as actionTypes from '../actions/actionTypes';
import * as utility from '../../utility/utility'
import LoaderConst from '../../constants/LoaderConstant';

const initialState = {
   loadingTrending: false,
   loadingPopular: false,
   loadingSubreddits: false,
   loadingUserComments: false,
};

//set the loader as true
const startLoader = (state, action) => {
   return checkLoaderType(state, action, true);
}
//sets the loader as false
const endLoader = (state, action) => {
   return checkLoaderType(state, action, false);
}
//check the loader type for all the pages
const checkLoaderType = (state, action, input) => {
   switch (action.loaderType) {
      case LoaderConst.TrendingLoader: return utility.updateObject(state, { loadingTrending: input });
      case LoaderConst.PopularLoader: return utility.updateObject(state, { loadingPopular: input });
      case LoaderConst.SubredditsLoader: return utility.updateObject(state, { loadingSubreddits: input });
      case LoaderConst.CommentsLoader: return utility.updateObject(state, { loadingUserComments: input });
      default: return state;
   }
}
//loader reducer
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.END_LOADER: return endLoader(state, action);
      case actionTypes.START_LOADER: return startLoader(state, action);
      default: return state;
   }
};

export default reducer;

