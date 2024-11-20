import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import UnAuthorized from "./UnAuthorized";
import HomeSkeleton from "../components/Skeletons/pages/HomeSkeleton";
import DialogBox from "../components/DialogBox";
import PageIdDialogBox from "../components/PageIdDialogBox";
import { useState } from "react";
import NotionDbSideBar from "../components/NotionDbSideBar";

import axios from "axios";
import NotionPageModule from "../components/NotionPageModule";
import VideoChatModule from "../VideoChatModule";
function NotionNotes() {
  const { isAuthenticated, loginWithRedirect, isLoading, user } = useAuth0();
  const [showDialog, setShowDialog] = useState(false);
  const [dbUser, setdbuser] = useState({});
  const [pageIdBox, setPageIdBox] = useState(false);
  const [pageId, setPageId] = useState({});
  // loginWithRedirect()
  console.log(isAuthenticated);
  const pageInfo = async () => {
    try {
      console.log(user.email);
      const res = await axios.post("http://localhost:5000/fetchUserInfo", {
        email: user.email,
      });
      setdbuser(res.data);
      if (res.pageId == []) {
        setPageIdBox(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const boxCallback = (data) => {
    setPageIdBox(data);
  };
  useEffect(() => {
    if (!isLoading) {
      pageInfo();
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div>
        <HomeSkeleton />
      </div>
    );
  }

  const handlePageId = async (data) => {
    pageIdBox(data);
  };

  return isAuthenticated ? (
    <div className="flex bg-[#20232b] h-[710px]">
      <NotionDbSideBar user={user} boxCallback={boxCallback} />
      <NotionPageModule pageId={pageId} />
      <VideoChatModule />
      <PageIdDialogBox
        sendPageId={handlePageId}
        pageIdBox={pageIdBox}
        user={dbUser}
      />
    </div>
  ) : (
    <UnAuthorized />
  );
}

export default NotionNotes;
