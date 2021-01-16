import React, { useEffect,useState } from 'react';
import List from '@material-ui/core/List';
import EndPointConfig from '../../configuration/EndPointConfig';
import { makeStyles } from '@material-ui/core/styles';
import  Grid  from '@material-ui/core/Grid';
import PopularPost from './PopularPost';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { FlareSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      errorBar: {
        width: '100%',
        textAlign:'center'
  }
}));
const PopularPostList=(props)=>{
const classes=useStyles();
 
//    useEffect(()=>{

//    props.loadData(props.filterType);

//    },[props.filterType]); 
  
  //  if(props.error){
  //   return (
  //      <div className={classes.errorBar}> 
  //      <Alert severity="error"><span>There is a problem occured in fetching popular posts. !</span></Alert>
  //      </div>
  //   )
  //   }
   if(props.loading)
   return <div className={classes.root}><CircularProgress /></div>
   else
   return (
   <React.Fragment>
       {
    
        props.posts.map((item,index)=>(
            <React.Fragment>
             <PopularPost key={item.data.subreddit_name_prefixed.concat(index)} item={item}></PopularPost>
             </React.Fragment>
        ))
       }
    
    </React.Fragment>
    
   );

   
}
const mapStateToProps= state=>{
    return {
      // popularPosts:state.homeStore.popular,
      // error:state.homeStore.error,
       filterType:state.homeStore.filterType,
       loading:state.loaderStore.loading
       
    }
};
// const mapDispatchToProps= dispatch=>{
//     return{
//         loadPopular:(param)=>dispatch(action.loadPopular(param)),
//         startLoader:()=>dispatch(action.startLoader())
//     }
// };
export default  connect(mapStateToProps,null)(PopularPostList);