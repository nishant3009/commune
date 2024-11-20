import React from 'react'
import ChatSkeleton from '../ChatSkeleton'
import SidebarSkeleton from '../SidebarSkeleton'
import AiBarSkeleton from '../AiBarSkeleton'
import InputSkeleton from '../InputSkeleton'

function HomeSkeleton() {
    return (
        <div className='flex'>
            <div>
                <ChatSkeleton />
                <InputSkeleton />
            </div>
            <AiBarSkeleton />
        </div>
    )
}

export default HomeSkeleton
