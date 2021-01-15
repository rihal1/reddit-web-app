import { Typography,Grid } from '@material-ui/core';
import React from 'react';

const NotFound=()=>{

return (
<Grid container style={{minHeight:'100vh'}} alignItems="center" justify="center" direction="column" spacing={0}>
<Grid item sm={12} md={12} xs={12} >
<Typography variant="h2" color="error"> 404 Not Found !!! :)</Typography>
</Grid>
</Grid>
)
};

export default NotFound;