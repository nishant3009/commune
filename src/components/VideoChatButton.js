import React from 'react'
import videoCamIcon from '../images/videoCam.png'

function VideoChatButton() {
    return (
        <button className='m-3 relative bottom-2 left-3  h-12 w-64 bg-[#2c2c2c] rounded-lg' >
            <div className='flex items-center'>
                <img
                    className='m-1 relative left-3'
                    style={{ width: "40px", height: "40px" }}
                    src={videoCamIcon}>
                </img>
                <div className='relative left-12 text-lg text-white'>
                    <p>Video Chat </p>
                </div>
            </div>
        </button>
    )
}

export default VideoChatButton
