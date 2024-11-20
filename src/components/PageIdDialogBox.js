import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { Input } from "@mui/icons-material";
import { TextField } from "@mui/material";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PageIdDialogBox(props) {
  const pageIdBox = props.pageIdBox;
  const [open, setOpen] = useState(props.pageIdBox);
  const [pageId, setPageId] = useState("");
  const handleSubmit = async () => {
    await props.sendPageId(pageId);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Page Id Connect"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Enter your page Id from Notion app to connect it to communify
          </DialogContentText>
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(e) => {
              const pageId = e.target.value.toString().slice();
              setPageId(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
