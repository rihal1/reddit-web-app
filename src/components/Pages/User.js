import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container } from '@material-ui/core';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';
import UserCardView from '../UserCardView/UserCardView';
import CommentList from '../UserComments/CommentList';
import ErrorBar from '../ErrorBar/ErrorBar';

const styles = () => ({
  button: {
    width: '100%',
    marginBottom: 16
  }

});

//User Page Component
class User extends Component {
  state = {
    username: ""
  }

  //update the username when props username changes
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.username !== nextProps.match.params.username) {
      nextProps.loadUserInfo(nextProps.match.params.username);
      nextProps.loadComments(nextProps.match.params.username);

    }
    return { username: nextProps.match.params.username };
  }
  //load the userInfo and comments in mounting phase
  componentDidMount() {
    const name = this.props.match.params.username;
    this.setState({ username: name });
    this.props.loadUserInfo(name);
    this.props.loadComments(name);

  };
  //close the errorBar in the page, if any error occures
  handleErrorClose = () => {
    this.props.hideUserError();
  }
  render() {
    const { classes } = this.props;
    const name = this.props.match.params.username;
    return (
      <Container>
        <Grid container spacing={1}>
          {/* column for showing the user info */}
          <Grid item xs={12} md={5} sm={12} lg={5}>
            {
              this.props.userInfo.data && <UserCardView userInfo={this.props.userInfo}></UserCardView>
            }
          </Grid>
          {/* column for showing the user comments */}
          <Grid item xs={12} md={7} sm={12} lg={7}>
            <CommentList comments={this.props.comments} commentType="U"></CommentList>
          </Grid>

        </Grid>
        { this.props.error &&
          <ErrorBar open={this.props.error} close={this.handleErrorClose}></ErrorBar>
        }
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {

    userInfo: state.userStore.userInfo,
    comments: state.userStore.comments,
    error: state.errorStore.errorUserPage
  }
};
const mapDispatchToProps = dispatch => {
  return {

    loadComments: (username) => dispatch(action.loadUserComments(username)),
    loadUserInfo: (username) => dispatch(action.loadUserInfo(username)),
    hideUserError: () => dispatch(action.hideUserError())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(User));

