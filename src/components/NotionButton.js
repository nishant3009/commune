import React from 'react'
import notionIcon from '../images/notionIcon.jpg'
import { useEffect } from 'react'
function NotionButton(redirectNotion) {
    console.log()
    useEffect(() => {
        console.log(redirectNotion)
    }, redirectNotion)
    return (
        <div>
            <button className='m-3 relative bottom-2 left-3  h-12 w-64 bg-white rounded-lg' >
                <div className='flex items-center'>
                    <img
                        className='m-1 relative left-3'
                        style={{ width: "60px", height: "36px" }}
                        src={notionIcon}>
                    </img>
                    <div className='relative left-12 text-lg '>
                        <p>Notion</p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default NotionButton
