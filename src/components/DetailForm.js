import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import "./DetailForm.css"
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import technologist from '../images/apple_technologist.png';


function DetailForm({ user }) {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    const [dob, setDob] = useState(new Date())
    const [error, setError] = useState(false)
    const [sucess, setSuccess] = useState(false)

    const handleSubmit = async () => {

        try {
            if (username == "" || firstName === "" || lastName === "" || age === 0 || dob === new Date()) {

                setError(true)
                return;
            }

            await axios.post('http://localhost:5000/details',
                {
                    email: user.email,
                    username: username,
                    firstname: firstName,
                    lastname: lastName,
                    age: age,
                    dob: dob,

                }

            )
            console.log("Test" + user.email)
            navigate("/Home");

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="relative  rounded-[20px] bg-white w-full h-[882px] overflow-hidden text-left text-17xl text-black font-inter">
            {error ? <Alert style={{ height: "80px" }} severity="error">Fill up all the details </Alert> : ""}
            <div className="absolute top-[897px] left-[402px] rounded-[14px] bg-gainsboro w-[961px] h-[86px]" />
            <div className="absolute top-[784px] left-[1283px] rounded-[50%] bg-gainsboro w-[100px] h-[100px]" />
            <div className="absolute top-[37px] left-[456px] rounded-[50%] bg-gainsboro w-[165px] h-[164px]" />
            <div className="absolute top-[283px] left-[476px] rounded-3xs bg-gainsboro box-border w-[398px] h-[74px] border-[2px] border-solid border-white" />
            <div className="absolute top-[416px] left-[476px] rounded-3xs bg-gainsboro w-[398px] h-[74px]" />
            <div className="absolute top-[563px] left-[476px] rounded-3xs bg-gainsboro w-[398px] h-[74px]" />
            <div className="absolute top-[710px] left-[586px] rounded-3xs bg-gainsboro w-72 h-[74px]" />
            <div className="absolute top-[710px] left-[476px] rounded-3xs bg-gainsboro w-[92px] h-[74px]" />
            <div className="absolute grid top-[224px] left-[476px] font-light  w-[409px] h-9">
                Username
                <TextField onChange={(e) => { setUsername(e.target.value) }} id="outlined-basic" variant="outlined" />
            </div>
            <div className="absolute grid top-[364px] left-[476px] font-light  w-[409px] h-9">
                First Name
                <TextField onChange={(e) => { setFirstName(e.target.value) }} id="outlined-basic" variant="outlined" />

            </div>
            <div className="absolute grid top-[508px] left-[476px] font-light  w-[409px] h-9">
                Last Name
                <TextField onChange={(e) => { setLastName(e.target.value) }} id="outlined-basic" variant="outlined" />

            </div>
            <div className="absolute grid top-[652px] left-[476px] font-light  w-[92px] h-9">
                Age
                <TextField className='w-14' onChange={(e) => { setAge(e.target.value) }} id="outlined-basic" variant="outlined" />

            </div>
            <div className="absolute grid top-[656px] left-[586px] font-light w-[285px] h-9">
                Date of Birth
                <input onChange={(e) => { setDob(e.target.value) }} style={{ height: "56px", border: 'solid', borderRadius: "6px", borderWidth: "thin", borderColor: '#CBCBCB' }} type="date" name="date" id="dateinput" ></input>
            </div>
            <div className="absolute grid top-[800px] left-[476px] font-light w-[409px] h-9 bg-green-400 text-white">
                <Button onClick={handleSubmit} className='bg-green-400 text-white '>Success </Button>
            </div>
            <h2 className="m-0 absolute top-[104px] left-[500px] text-[48px] font-normal font-motley-forces text-mediumspringgreen inline-block w-[341px] h-[73px] mix-blend-multiply " style={{
                fontFamily: "Motley Forces", color: "#00D88E"
            }}>
                Communify
            </h2>
            <img
                className="absolute top-[110px] left-[750px] w-9 h-[41px] object-cover"
                src={technologist}
            />
            <div className=" flex absolute top-[80px] left-[460px] text-21xl font-extrabold  w-[358px] h-28">
            </div>
            <img
                className="absolute top-[543px] left-[0px] w-[476px] h-[339px] object-cover"
                alt="Avatar image "
                src="https://img.freepik.com/free-vector/open-source-concept-illustration_114360-3583.jpg?w=996&t=st=1685906975~exp=1685907575~hmac=676ea80776dbd97f03deba16d09409b1c8dc9d30cd75ca543d5dfafb7f194b1a"
            />
            <div className="absolute top-[312px] left-[192px] text-21xl font-extrabold inline-block w-80 h-[283px]">

            </div>
        </div>



    )
}

export default DetailForm

