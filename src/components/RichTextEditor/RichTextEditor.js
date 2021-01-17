import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Typography } from '@material-ui/core';

//Rich text editor component for posting data to subreddit community
const RichTextEditor = (props) => {


  return (
    <div>
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
          {props.userInfo.data &&
            //Ck editor
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={editor => {

              }}

            />


          }
        </DialogContent>
        {props.userInfo.data &&
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