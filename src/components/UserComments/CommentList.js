import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Comment from './Comment';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    direction:'row',
    height:'90vh'
  },
}));

//Component to show the list of user comments in user page
const CommentList = (props) => {
  const classes = useStyles();

  if (props.loading)
    return <div className={classes.root}><CircularProgress /></div>
  else
  {
    if( props.comments.length>0){
    return (
      <Paper>

        {
          props.comments.map((item, index) => (
            <React.Fragment key={item.data.id}>
              <Comment item={item.data} commentType={props.commentType}></Comment>
              <Divider></Divider>
            </React.Fragment>
          ))
        }

      </Paper>
    )
      }
      else 
      return(
      props.commentType==='U' && <div className={classes.root}>
        <Typography variant="h4" color="secondary">
         User has no Comments
        </Typography>
        </div>);
  }

}
const mapStateToProps = state => {
  return {
    loading: state.loaderStore.loadingUserComments
  }
};


export default connect(mapStateToProps, null)(CommentList);