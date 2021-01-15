import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TrendingPost from './TrendingPost';
// import Axios from 'axios';
import EndPointConfig from '../../configuration/EndPointConfig';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';

const TrendingPostList=(props)=>{

   // const [trendingState,setTrendingState]=useState([]);
    useEffect(()=>{
    // const fetchData=async()=>{

    //     try {
    //         const result = await fetch(EndPointConfig.get_trending_post);
    //         const response= await result.json(); 
    //         const topFourResponse=response.trending_searches.slice(0,4);
    //         setTrendingState(topFourResponse);
    //       } catch(err) {
    //         // catches errors both in fetch and response.json
    //         //alert(err);
    //       }
    //     }
   
    // fetchData();
    props.loadTrending();
    
    },[]);

    
    return(

        <Grid container spacing={1} style={{padding:16}}>
        { props.trendingPosts.map((trending,index)=> (
            <Grid key={trending.results.data.children[0].data.title.concat(index)} item xs={12} sm={6} md={3} >
              <TrendingPost item={trending}></TrendingPost>
            </Grid>
        ))}
    </Grid>
    )
}
const mapStateToProps= state=>{
  return {
     trendingPosts:state.homeStore.trending,
     error:state.homeStore.error
     
  }
};
const mapDispatchToProps= dispatch=>{
  return{
      loadTrending:()=>dispatch(action.loadTrending()),
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TrendingPostList);