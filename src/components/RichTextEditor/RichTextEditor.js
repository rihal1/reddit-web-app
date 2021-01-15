import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Typography,Box } from '@material-ui/core';

const RichTextEditor=(props)=> {
 

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog 
        open={props.open}
        onClose={props.closePostModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Post Here</DialogTitle>
        <DialogContent>
          {
         !props.userInfo.data &&
        <Typography color="secondary" variant="h6">You should login to Post..</Typography>
    
          }
          { props.userInfo.data &&
        // <section>
        <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                       
                    } }
                    // onChange={ ( event, editor ) => {
                    //     const data = editor.getData();
                    //     console.log( { event, editor, data } );
                    // } }
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.', editor );
                    // } }
                />
       
          
      }
        </DialogContent>
        { props.userInfo.data &&
        <DialogActions>
        <Button variant="contained" color="secondary">
                 Submit
             </Button>
      </DialogActions>
       }     
      </Dialog>
    </div>
  );
}

export default RichTextEditor;