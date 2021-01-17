import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

//Common Error snackbar Component for all 3 pages
const ErrorBar = ({ open, close }) => {

  //state for the material UI snackbar position
  const [state, setState] = useState({
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal } = state;
  return (
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

//Required Proptypes for ErrorBar component
ErrorBar.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func
};
export default ErrorBar;