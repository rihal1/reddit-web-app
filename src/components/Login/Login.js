
import React from 'react';
import {Grid, TextField, Button, FormControlLabel, Checkbox,Box} from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';
import Alert from '@material-ui/lab/Alert';
const styles = theme => ({
    // margin: {
    //     margin: theme.spacing.unit * 2,
    // },
    // padding: {
    //     padding: theme.spacing.unit
    // }
});

class LoginTab extends React.Component {
    // componentDidMount(){
    //     this.props.loadUserInfo();
    //   }
    //   componentDidUpdate(prevProps){
    //     if (this.props.filterType !== prevProps.filterType) {
    //     this.props.loadPopular(this.props.filterType);
    //     }
    //   }
    state={
        username:"",
        password:""
    }
    // handleLogin=()=>{
    //     this.props.loadUserInfo(this.state.username);
    //     //this.props.onClose();
    // }
    onChange=(event)=>{
      this.setState({[event.target.id]:event.target.value})
    }
    render() {
        const { classes } = this.props;
        let error=null;
        if(this.props.userInfo.error){
         error=<Box my={2}><Alert severity="error">Incorrect Username or password!</Alert></Box>
        }
        return (
          
                <Box m={2}>

                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item>
                            <TextField id="username" label="Username" type="email" fullWidth autoFocus required 
                             value={this.state.username} onChange={this.onChange}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item >
                            <TextField id="password" label="Password" type="password" fullWidth required 
                            value={this.state.password} onChange={this.onChange}/>
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
                            <Button  variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                    <Grid container justify="center">
                        <Button variant="contained" color="primary" onClick={(e)=>this.props.onClose(this.state.username)}>Login</Button>
                    </Grid>
                    </Box>
                    {error}
                </Box>
            
        );
    }
}
const mapStateToProps= state=>{
    return {
       userInfo:state.userStore.userInfo,
      // filterType:state.homeStore.filterType,
    }
};
// const mapDispatchToProps= dispatch=>{
//     return{
//         loadUserInfo:(param)=>dispatch(action.loadUserInfo(param)),
//     }
// };
 export default connect(mapStateToProps,null)(LoginTab);;

 export{LoginTab}
//export default LoginTab;