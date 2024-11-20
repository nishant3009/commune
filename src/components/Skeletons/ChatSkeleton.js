import React from 'react'
import "./ChatSkeleton.css"
function ChatSkeleton() {
    return (
        <>
            <html>
                <head>
                    <style>
                    </style>
                </head>
                <body>
                    <div class="chatSkeleton">
                        <div class="chatSkeleton-item">
                            <div class="chatSkeleton-avatar"></div>
                            <div class="chatSkeleton-message"></div>
                        </div>
                        <div class="chatSkeleton-item">
                            <div class="chatSkeleton-avatar"></div>
                            <div class="chatSkeleton-message"></div>
                        </div>
                        <div class="chatSkeleton-item">
                            <div class="chatSkeleton-avatar"></div>
                            <div class="chatSkeleton-message"></div>
                        </div>
                    </div>
                </body>
            </html>
        </>
    )
}

export default ChatSkeleton
