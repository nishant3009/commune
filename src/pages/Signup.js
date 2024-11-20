import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react'
import axios from 'axios'
import technologist from '../images/apple_technologist.png';
import postbox from "../images/apple_postbox.png"
import oldkey from "../images/apple-old-key.png"
import background from "../images/login-background.png"
import { useNavigate } from "react-router-dom";

function Signup() {
    useEffect(() => {

    })
    const navigate = useNavigate()
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const handelSubmit = async () => {
        console.log(email)
        console.log(password)
        axios.post("http://localhost:5000/Signup",
            {
                email: email,
                password: password,

            }).then(() => {
                window.location.href = "/"
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <div className="absolute left-52 rounded-xl bg-white w-[1024px] h-[720px] overflow-hidden text-left text-5xl text-black font-inter" >
                <TextField
                    className="[border:none] bg-[transparent] absolute top-[342px] left-[373px]"
                    sx={{ width: 310 }}
                    color="primary"
                    variant="filled"
                    type="text"
                    name="Email"
                    placeholder="gavinbelson@hooli.com"
                    size="medium"
                    margin="none"
                    autoComplete="off"
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
                <TextField
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    className="[border:none] bg-[transparent] absolute top-[460px] left-[60px]"
                    sx={{ width: 310 }}
                    color="primary"
                    variant="filled"
                    type="password"
                    name="Password"
                    label="Password"
                    placeholder="Password"
                    size="medium"
                    margin="none"
                    autoComplete="off"
                />
                <div className="absolute top-[302px] left-[410px] font-light inline-block w-[318px] h-7 text-xl" >
                    Email
                </div>
                <img
                    className="absolute top-[303px] left-[380px] w-[30px] h-[29px] object-cover"
                    alt="mail box"
                    src={postbox}
                />
                <h4 className="m-0 absolute top-[405px] left-[415px]" />
                <div className="absolute top-[415px] left-[410px] font-light inline-block w-[318px] h-7 text-xl" >
                    Password
                </div>
                <img
                    className="absolute top-[405px] left-[380px] w-[30px] h-[30px] object-cover"
                    src={oldkey}
                />
                <a href="/" className="[text-decoration:none] absolute top-[600px] left-[460px] font-light text-[inherit] inline-block w-[265px] h-[51px] text-xl text-blue-600 underline">
                    or Login !!!!!!
                </a>
                <h2 className="m-0 absolute top-[204px] left-[380px] text-[48px] font-normal font-motley-forces text-mediumspringgreen inline-block w-[341px] h-[73px] mix-blend-multiply " style={{
                    fontFamily: "Motley Forces", color: "#00D88E"
                }}>
                    Communify
                </h2>
                <img
                    className="absolute top-[209px] left-[625px] w-9 h-[41px] object-cover"
                    src={technologist}
                />

                <Button sx={{ width: 310 }} className="absolute top-[529px] left-[-250px] text-blue underline bg-green-500" variant="contained" onClick={handelSubmit}>Submit</Button>
            </div >
        </>
    )
}

export default Signup;