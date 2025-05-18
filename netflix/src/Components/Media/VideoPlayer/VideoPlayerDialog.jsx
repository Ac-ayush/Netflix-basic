import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenDialog } from '../../../Redux/videoPlayer';
import VideoBackround from '../Video/VideoBackground';

export default function AlertDialog() {
  const dispatch = useDispatch();
  const { isOpenDialog, movie_id } = useSelector((state) => state.video_player);


  const handleClose = () => {
    dispatch(setOpenDialog(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpenDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Enjoy the moments'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                <VideoBackround movieId={movie_id} isSourceDialog/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className='bg-red-800 text-white rounded-md px-4 py-2 hover:cursor-pointer  hover:opacity-85'>close</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
