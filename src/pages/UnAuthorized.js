import React from 'react'

function UnAuthorized() {
    return (

        <div className='bg-slate-800 h-screen '>
            <div className='flex justify-center p-10'>
                <iframe src="https://giphy.com/embed/Yycc82XEuWDaLLi2GV" width="480" height="400" class="giphy-embed" allowFullScreen></iframe>
                <p><a href="https://giphy.com/gifs/theoffice-the-office-episode-24-tv-Yycc82XEuWDaLLi2GV"></a></p>
            </div>

            <p className='text-5xl text-center text-white mt-9'>Sorry you are not authorized to view this page  !</p>
        </div>
    )
}

export default UnAuthorized
