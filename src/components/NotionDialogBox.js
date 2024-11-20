import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import NotionButton from '../components/NotionButton'
import VideoChatModule from '../VideoChatModule';
import axios from 'axios'
import { use } from 'passport';
import { Navigate , Link} from 'react-router-dom';
// import "./VideoChatDialog.css"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function NotionDialogBox(openDialogBox) {
    const [open, setOpen] = React.useState(false);
    const [response, setResponse] = React.useState([])

    const handleClickOpen =async () => {
       const res = await axios.get("http://localhost:5000/Notion")
       setOpen(true);
        setResponse(res.data)
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleProfileSelect=() =>
    {

        <Navigate to="/NotionNotes" />
    }
    return (
        <div>
            <button onClick={handleClickOpen}>
                <NotionButton/>
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
                            <p className="text-4xl relative ">Choose your Notion Profile  </p>
                            <div className='relative bottom-11'>
                                <DialogActions>
                                     <Button onClick={handleClose}>close</Button> 
                                </DialogActions>
                            </div>
                            {response.map((item, index) => (
                                    <ol className="border-2 rounded-md m-2">
                
                            <div className='flex p-4'>
                                <button onClick={handleProfileSelect}>
                                    <img
                                        className="relative  left-4 rounded-[50px] w-[68px] h-[68px] object-cover"
                                        alt="Avatar"
                                        loading="lazy"
                                        src={item.image_url}
                                    />
                                </button>   
                                <div className='ml-7 relative left-4 inline'>
                                    <button>  <Link to={"/NotionNotes"} className='text-lg  mb-1'>{item.name}</Link></button>
                                    <p className='text-sm font-thin'>{item.email}</p>
                                </div>
                            </div>
                             </ol>     
        ))}
                        </DialogContentText>
                    </DialogContent>
                </div>


            </Dialog >
        </div >
    );
}
