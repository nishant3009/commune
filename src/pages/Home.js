import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import HomeSkeleton from "../components/Skeletons/pages/HomeSkeleton";
import Navbar2 from "../components/Navbar2";
import ChatModule from "../components/ChatModule";
import VideoChatModule from "../VideoChatModule";
import UnAuthorized from "./UnAuthorized";
import VideoChatButton from "../components/VideoChatButton";
import NotionButton from "../components/NotionButton";
import AIModule from "../components/AIModule";
import VideoChatDialog from "../components/VideoChatDialog";
import NotionDialogBox from "../components/NotionDialogBox";

function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [videoChatModuleVisiblity, setVideoChatModuleVisiblity] =
    useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [permitted, setPermitted] = useState(false);
  const [openDailogBox, setOpenDialogBox] = React.useState(false);
  const [redirectNotion, setRedirectNotion] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      sendUserData();
    }
  }, [isLoading]);
  if (isLoading) {
    return (
      <div>
        <HomeSkeleton />
      </div>
    );
  }

  const handleVideoChatButton = () => {
    setVideoChatModuleVisiblity(true);
  };
  const handleClickOpen = () => {
    setOpenDialogBox(true);
  };

  const sendUserData = async () => {
    axios.post("http://localhost:5000/Home", {
      email: user.email,
    });
  };

  return (
    isAuthenticated && (
      <>
        <div className="flex bg-[#20232b] h-[100%]">
          <div>
            <Navbar2 />
          </div>
          <div>
            <ChatModule />
            {/* <VideoChatModule /> */}

            <div className="flex">
              <VideoChatDialog />
              <NotionDialogBox />

              {/* <button onClick={handleClickOpen}> <VideoChatButton openDailogBox={openDailogBox} /></button> */}
            </div>
          </div>
          <AIModule />
        </div>
      </>
    )

    // isAuthorized ? () : ()
  );
}

export default Home;
