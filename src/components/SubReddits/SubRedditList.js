import React, { useEffect,useState } from 'react';
import List from '@material-ui/core/List';
import EndPointConfig from '../../configuration/EndPointConfig';
import SubReddit from './Subreddit';
import { makeStyles } from '@material-ui/core/styles';
import { Divider,ListSubheader,Paper } from '@material-ui/core';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      //width: '100%',
      //maxWidth: 360,
     // backgroundColor: "white",
    //  boxShadow:"0px 0px 12px 0px #888888"
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
   return (
   <List className={classes.root}>
        
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
       error:state.homeStore.error,
       
    }
};
const mapDispatchToProps= dispatch=>{
    return{
        loadSubreddits:()=>dispatch(action.loadSubreddits()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SubRedditList);