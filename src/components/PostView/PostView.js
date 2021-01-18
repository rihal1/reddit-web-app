import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Box, Grid, Link } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import * as utility from '../../utility/utility';

const useStyles = makeStyles({
    media: {
        height: 350
    },
    deafultImage: {
        backgroundImage: 'linear-gradient(grey, white)',
        minHeight: '20vh'
    }
});

//single post View component
const PostView = ({ item }) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    //default Image for showing in post bar
    let defaultImage = (<Grid container className={classes.deafultImage} alignItems="center" justify="center" direction="column" spacing={0}>
        <Grid item sm={12} md={12} xs={12} >
            <Typography variant="body1" color="inherit">No Images Available</Typography>
        </Grid>
    </Grid>);
    // cahnge the defaultImage to original thumnail of the post
    if (item.data.thumbnail && (item.data.thumbnail.split('.').includes('jpg') ||
        item.data.thumbnail.split('.').includes('png'))) {

        defaultImage = <CardMedia
            className={classes.media}
            image={item.data.thumbnail}

        />;
    }
    return (

        <Card>
            <CardActionArea>
                {defaultImage}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.data.title}
                    </Typography>
                    <Box m={2}>
                        <Grid container >
                            <Grid item>
                                <Box mr={1}>
                                    <Link href="#" onClick={preventDefault}>
                                        <CommentIcon color="primary"></CommentIcon>
                                    </Link>
                                </Box>
                            </Grid>

                            <Grid item>
                                <Box mr={1}>
                                    <Typography variant="subtitle2">{utility.numFormatter(item.data.num_comments)} Comments</Typography>
                                </Box>
                            </Grid>

                            <Grid item>
                                <Box mr={1}>
                                    <Link href="#" onClick={preventDefault}>
                                        <ShareIcon color="primary" ></ShareIcon>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2">Share</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>

            </CardActionArea>
        </Card>
    )
}

export default PostView;