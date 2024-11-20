import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import VideoChatButton from '../components/VideoChatButton'
import VideoChatModule from '../VideoChatModule';
// import "./VideoChatDialog.css"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function VideoChatDialog(openDialogBox) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={handleClickOpen}>
                <VideoChatButton />
            </button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="md"
                fullWidth={true}

            >
                <div >
                    <DialogContent sx={{ height: "500px" }}  >
                        <DialogContentText id="alert-dialog-slide-description">
                            <p className="text-4xl relative ">Do you want to ..... </p>
                            <div className=''>
                                <DialogActions>
                                    {/* <Button onClick={handleClose}>Join</Button> */}

                                </DialogActions>
                            </div>
                            <VideoChatModule />
                        </DialogContentText>
                    </DialogContent>
                </div>


            </Dialog >
        </div >
    );
}
