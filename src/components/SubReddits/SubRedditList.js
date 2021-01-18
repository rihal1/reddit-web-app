import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import SubReddit from './Subreddit';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

//component for showing list of subreddits
const SubRedditList = (props) => {
    const classes = useStyles();

    if (props.loading)
        return <div className={classes.root}><CircularProgress /></div>
    else
        return (
            <List>

                {
                    props.subRedditList.map((item, index) => (
                        <Paper key={item.data.display_name_prefixed.concat(index)} >
                            <SubReddit item={item}></SubReddit>
                            <Divider></Divider>
                        </Paper>
                    ))
                }

            </List>
        )


}
const mapStateToProps = state => {
    return {
        loading: state.loaderStore.loadingSubreddits

    }
};

export default connect(mapStateToProps, null)(SubRedditList);