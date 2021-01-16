import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const ErrorBar=({open,close})=>{

 const [state, setState] = useState({
       // open: false,
        vertical: 'top',
        horizontal: 'right',
      });
 const { vertical, horizontal } = state;
return(
    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={new Date().getTime()}
        autoHideDuration={6000}
        onClose={close}
      >
      <Alert severity="error" variant="filled">This is an error occured in loading page data...!</Alert>
      </Snackbar>
)
}
ErrorBar.propTypes = {
    open: PropTypes.bool,
    close:PropTypes.func
  };
export default ErrorBar;