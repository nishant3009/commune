import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import technologist from '../images/apple_technologist.png';
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import background from "../images/login-background.png"

const Landing = () => {
    const [email, setEmail] = useState("")
    const [alertMessage, setAlertMessage] = useState('')
    const [password, setPassword] = useState("")
    const [visiblity, setVisiblity] = useState("hidden")
    const navigate = useNavigate();

    const handelSubmit = () => {
        axios.post("http://localhost:5000/",
            {
                email: email,
                password: password,

            }).then((response) => {
                console.log(response.data)
                if (response.data.Result) {
                    setAlertMessage("Redirecting to login and Signup page")
                    setVisiblity("visible")
                    axios.get("http://localhost:5000/Home")
                }

            }).catch((error) => {
                console.log(error)
            })
    }
    const { loginWithRedirect } = useAuth0();
    return (
        <>
            {
                // <Alert severity="success" style={{ visiblity: visiblity }}>{alertMessage}</Alert>
            }



            <div className="flex items-center justify-center">
                <h2 className=" relative left-48 top-48 text-[52px] font-normal font-motley-forces text-mediumspringgreen inline-block w-[341px] h-[73px] mix-blend-multiply " style={{
                    fontFamily: "Motley Forces", color: "#00D88E"
                }}>
                    Communify
                </h2>
                <img
                    className=" relative top-48  left-32 w-9 h-[41px] object-cover"
                    src={technologist}
                />
                <Button sx={{ width: 310 }} className=" relative top-72 right-40 justify-center underline bg-green-500" variant="contained" onClick={() => {
                    loginWithRedirect()
                    handelSubmit()
                }} >Login or Signup with auth0</Button>
            </div>



        </>
    );
};

export default Landing;
