import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import Comment from './Comment';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

//Component to show the list of user comments in user page
const CommentList = (props) => {
  const classes = useStyles();

  if (props.loading)
    return <div className={classes.root}><CircularProgress /></div>
  else
    return (
      <Paper>

        {
          props.comments.map((item, index) => (
            <React.Fragment>
              <Comment key={item.data.id} item={item.data} commentType={props.commentType}></Comment>
              <Divider></Divider>
            </React.Fragment>
          ))
        }

      </Paper>
    )


}
const mapStateToProps = state => {
  return {
    loading: state.loaderStore.loadingUserComments
  }
};


export default connect(mapStateToProps, null)(CommentList);