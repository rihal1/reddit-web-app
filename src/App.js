import React , { Suspense } from 'react';
import './App.css';
import Layout from './container/Layout/Layout';
import TrendingPost from './components/Trending/TrendingPost';
import {Route, Switch} from 'react-router-dom';

// import Home from './components/Pages/Home';
import Container from '@material-ui/core/Container';
import NotFound from './components/Pages/NotFound';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const Home=React.lazy(()=>import('./components/Pages/Home'));
 const Posts=React.lazy(()=>import('./components/Pages/Posts'));
 const User=React.lazy(()=>import('./components/Pages/User'));

 const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function App() {
  const classes=useStyles();
  return (
    <div className="App">
    <Layout>
    <Suspense fallback={<Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>}>
    <Switch>
    <Route path='/' exact component={Home}></Route>
    <Route path='/reddit' exact component={Home}></Route>
    <Route path='/reddit/r/:subreddit' component={Posts}></Route>
    <Route path='/reddit/user/:username' component={User}></Route>
    <Route component={NotFound}></Route>
   
    </Switch>
    </Suspense>
     </Layout>
    </div>
  );
}

export default App;
