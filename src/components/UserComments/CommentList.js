import React, { useEffect,useState } from 'react';
import List from '@material-ui/core/List';
import EndPointConfig from '../../configuration/EndPointConfig';
import { makeStyles } from '@material-ui/core/styles';
import { Divider,ListSubheader,Paper } from '@material-ui/core';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import Comment from './Comment';

const useStyles = makeStyles((theme) => ({
    root: {
      //width: '100%',
      //maxWidth: 360,
     // backgroundColor: "white",
      //boxShadow:"0px 0px 12px 0px #888888"
    },
  }));
const CommentList=(props)=>{
const classes=useStyles();
 //const [subRedditList,setSubReddit]=useState([]);
//    useEffect(()=>{
  
//    },[]); 
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
       //subRedditList:state.homeStore.subreddits,
       error:state.userStore.error,
       
    }
};


export default connect(mapStateToProps,null)(CommentList);