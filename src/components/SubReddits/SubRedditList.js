import React, { useEffect,useState } from 'react';
import List from '@material-ui/core/List';
import EndPointConfig from '../../configuration/EndPointConfig';
import SubReddit from './Subreddit';
import { makeStyles } from '@material-ui/core/styles';
import { Divider,ListSubheader,Paper } from '@material-ui/core';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
  }));
const SubRedditList=(props)=>{
const classes=useStyles();
 //const [subRedditList,setSubReddit]=useState([]);
   useEffect(()=>{
    // const fetchData=async()=>{

    //     try {
    //         const result = await fetch(EndPointConfig.get_subreddit_list);
    //         const response= await result.json(); 
    //         const list=response.data.children.slice(0,11);
    //         setSubReddit(list);
    //       } catch(err) {
    //         // catches errors both in fetch and response.json
    //         //alert(err);
    //       }
    //     }
   
    // fetchData();
    props.loadSubreddits();

   },[]); 
   if(props.loading)
   return <div className={classes.root}><CircularProgress /></div>
   else
   return (
   <List>
        
       {
        props.subRedditList.map((item,index)=>(
            <Paper>
             <SubReddit key={item.data.display_name_prefixed.concat(index)} item={item}></SubReddit>
             <Divider></Divider>
             </Paper>
        ))
       }
    
    </List>
   )

   
}
const mapStateToProps= state=>{
    return {
       subRedditList:state.homeStore.subreddits,
       loading: state.loaderStore.loadingSubreddits
       //error:state.homeStore.error,
       
    }
};
const mapDispatchToProps= dispatch=>{
    return{
        loadSubreddits:()=>dispatch(action.loadSubreddits()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SubRedditList);