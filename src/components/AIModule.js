import React, { useState } from 'react'
import appleRobot from "../images/appleRobot.png"
import appleRocket from "../images/apple-rocket.png"
import Alert from '@mui/material/Alert';
import { HfInference } from '@huggingface/inference'
import axios from 'axios'
function AIModule() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [alertMessage, setAlertMessage] = useState('')
    const [alert, setAlert] = useState(false)
    const API_KEY = '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';
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input == '') {
            setAlert(true)
            setAlertMessage("No input provided")
        }
        else {
            const hf = await new HfInference('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')
            try {
                const res = await hf.textGeneration({
                    model: 'gpt2-xl',
                    inputs: input,
                })
                setOutput(res)
                console.log(output)
            } catch (e) {
                console.log(e)
            }


        }
    }
    return (
        <div>

            <div className="w-[553px] h-[680px] bg-[#171717] m-3 rounded-xl">
                <div className="m-3 relative top-3 bg-[#2c2c2c] w-120 rounded-xl h-14 ">
                    <div className="flex justify-center">
                        <img
                            className="relative top-2 opacity-100 w-[43px] h-[43px]"
                            alt=""
                            src={appleRobot}
                        />
                        <div>
                            <p className="text-white text-xl font-bold relative left-4 top-3 "> GPT 3.5 </p>
                        </div>
                    </div>
                    <div className='relative top-5 opacity-50 w-[98%] flex justify-center' style={alert ? { visiblity: "visible" } : { visibility: "hidden" }}>
                        {
                            <Alert autoHideDuration={1000} severity="warning">{alertMessage}</Alert>
                        }

                    </div>
                    <div className='chat-module h-[500px]'>
                        <p></p>
                    </div>
                    <div className="flex">
                        <input className="relative top-[20px] bg-[#2c2c2c] w-[90%] rounded-xl text-white p-3 h-12" placeholder='Enter the prompt' onChange={(e) => { setInput(e.target.value) }}></input>
                        <div className="relative top-[20px] left-2 w-[50px] h-[50px] bg-green-400 rounded-[50%] ">
                            <button  >
                                <img
                                    className=" relative top-2 left-2 w-[33px] h-[33px] object-cover"
                                    alt=""
                                    src={appleRocket}
                                    onClick={handleSubmit}
                                />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AIModule
