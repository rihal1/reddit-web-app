import React from 'react';
import { Grid, TextField, Button, FormControlLabel, Checkbox, Box } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

//Login Modal Component that appears on clicking the login menu in Navbar
class LoginTab extends React.Component {

    state = {
        username: "",
        password: ""
    }
    // oncahnge event of username and password input fields
    onChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }
    render() {
        //check if incorrect username/password and loads the error texth
        let error = null;
        if (this.props.userInfo.error) {
            error = <Box my={2}><Alert severity="error">Incorrect Username or password!</Alert></Box>
        }
        return (

            <Box m={2}>

                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Face />
                    </Grid>
                    <Grid item>
                        <TextField id="username" label="Username" type="email" fullWidth autoFocus required
                            value={this.state.username} onChange={this.onChange} />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Fingerprint />
                    </Grid>
                    <Grid item >
                        <TextField id="password" label="Password" type="password" fullWidth required
                            value={this.state.password} onChange={this.onChange} />
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                        <FormControlLabel control={
                            <Checkbox
                                color="primary"
                            />
                        } label="Remember me" />
                    </Grid>
                    <Grid item>
                        <Button variant="text" color="primary">Forgot password ?</Button>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Grid container justify="center">
                        <Button variant="contained" color="primary" onClick={(e) => this.props.onClose(this.state.username)}>Login</Button>
                    </Grid>
                </Box>
                {error}
            </Box>

        );
    }
}
const mapStateToProps = state => {
    return {
        userInfo: state.userStore.userInfo,

    }
};

export default connect(mapStateToProps, null)(LoginTab);

//default export required for testing
export { LoginTab }
