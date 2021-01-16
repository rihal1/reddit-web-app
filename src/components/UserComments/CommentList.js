import React, { useEffect,useState } from 'react';
import List from '@material-ui/core/List';
import EndPointConfig from '../../configuration/EndPointConfig';
import { makeStyles } from '@material-ui/core/styles';
import { Divider,ListSubheader,Paper,Grid,Typography} from '@material-ui/core';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import Comment from './Comment';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  }));
const CommentList=(props)=>{
const classes=useStyles();
 //const [subRedditList,setSubReddit]=useState([]);
//    useEffect(()=>{
  
//    },[]); 
 if(props.loading)
   return <div className={classes.root}><CircularProgress /></div>
   else
   return (
   <Paper>
        
       {
        props.comments.map((item,index)=>(
            <React.Fragment>
             <Comment key={item.data.id} item={item.data}></Comment>
             <Divider></Divider>
             </React.Fragment>
        ))
       }
    
    </Paper>
   )

   
}
const mapStateToProps= state=>{
    return {
      loading: state.loaderStore.loadingUserComments
       //subRedditList:state.homeStore.subreddits,
       //error:state.userStore.error,
       
    }
};


export default connect(mapStateToProps,null)(CommentList);