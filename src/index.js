import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import home from './store/reducers/home';
import posts from './store/reducers/posts';
import loader from './store/reducers/loader';
import user from './store/reducers/user';
import error from './store/reducers/error';
import {BrowserRouter as Router}from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//logging in the application is implemented using redux middleware
const logging=store=>next=>action=>{

  console.log("An action is dispatched..");
  console.log("State before the action:"+ store.getState())
  next(action);//the action occured
  console.log("State after the action"+store.getState())
}
//root reducers combine all individual reducers
const rootReducer=combineReducers({
  homeStore:home,
  postsStore:posts,
  loaderStore:loader,
  userStore:user,
  errorStore:error
  //categoryStore:categories

})
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(logging,thunk)));
//create the central store
// Our new pattern with middleware now looks like:

// 1. An event occurs
// 2. An action is dispatched
// 3. Middleware receives the action
// 4. Reducer creates a new state from the change prescribed by the action
// 5. New state is passed into the React app via prop

ReactDOM.render(
    <Router>
    <Provider store={store}>
     <App />
    </Provider>
    </Router>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
