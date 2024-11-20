import React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { PeopleCommunity } from "@styled-icons/fluentui-system-filled/PeopleCommunity"
import { ChatMultiple } from "@styled-icons/fluentui-system-filled/ChatMultiple"
import { Home } from "@styled-icons/entypo/Home"
import { Settings } from '@styled-icons/fluentui-system-filled/Settings';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [activeItem, setActiveItem] = useState("Home");
    const { user } = useAuth0();
    return (
        <Box
            sx={{
                width: 224,
                height: 714,
                borderRadius: 8,
                margin: 1,
                backgroundColor: 'black',
                opacity: 0.8,
            }}
        >
            {/* Box content goes here */}
            <div className="text-center flex">
                <Avatar
                    className="mt-2 ml-2"
                    alt="Remy Sharp"
                    src={user.picture}
                    sx={{ width: 56, height: 56 }}
                />
                <div className="text-white text-left ml-2 grid-rows-3 font-bold text-sm mt-3">
                    <a>UserName</a>
                    <br></br>
                    <a>First Name-last Name</a>
                </div>
            </div>
            <div className="grid text-white text-left ml-3 gap-y-4 mt-4">
                <a><PeopleCommunity className="h-8 mr-2" />Groups</a>
                <a><ChatMultiple className="h-8 mr-2" />Private Chats</a>
                <a><Home className="h-8 mr-2" />Home</a>
                <a><Settings className="h-8 mr-2" />Settings</a>
            </div>
            <a></a>
        </Box >
    );
}

export default Navbar;