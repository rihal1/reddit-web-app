import React, { useEffect } from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from '@material-ui/core/styles';
import {Paper,Link,Box} from '@material-ui/core';
import filterData from '../../constants/FilterConstants';
import { Typography } from '@material-ui/core';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding:theme.spacing(4),
        flexDirection:'row',
        flexWrap:'wrap',
       // borderWidth:1,
        //borderColor:'grey',
        //borderStyle: 'solid',
        //marginTop : theme.spacing(2),
        backgroundColor:theme.palette.background.paper
        
    },
    chip:{
       // marginRight:10,
       // marginLeft:10,
        textTransform:'capitalize',
        //fontWeight:'bold'
    }
}));


const FilterComp = (props) => {
    const classes = useStyles();
    const handleClick = (param) => {
        //event.preventDefault();
        props.setFilter(param);
    };
    
    useEffect(()=>{

        handleClick(props.filterType);
        
    },[]);
    return (
        <div className={classes.root} >
        {
            filterData.map(item=>(
               
                item.label==='controversial'?
                
                <Box mx={1} fontWeight="bold">
                <Chip key={item.label} className={classes.chip}
                avatar={<Avatar>{item.avatar}</Avatar>}
                label={item.label}
                onClick={()=>{handleClick(item.label)}}
                variant="outlined" />
                </Box>
            :
            <Box mx={1} fontWeight="bold">
            <Chip key={item.label} className={classes.chip}
            avatar={<Avatar>{item.avatar}</Avatar>}
            label={item.label}
            onClick={()=>{handleClick(item.label)}}
            variant="outlined"
            />
            </Box>
            ))
            
        }
      
        </div>
    )
}

const mapStateToProps= state=>{
    return {
       filterType:state.homeStore.filterType,
       //error:state.homeStore.error
       
    }
  };
  const mapDispatchToProps= dispatch=>{
    return{
        setFilter:(param)=>dispatch(action.setFilter(param)),
    }
  };
  export default connect(mapStateToProps,mapDispatchToProps)(FilterComp);