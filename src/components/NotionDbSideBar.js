import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function NotionDbSideBar({ user, boxCallback }) {
  //   const [databaseList, setDatabaseList] = useState([]);
  const [dialogBoxStatus, setDialogBoxStatus] = useState(false);
  const handleClick = async () => {
    setDialogBoxStatus(true);
    boxCallback(dialogBoxStatus);
  };

  return (
    <>
      <div className="w-[100px] h-[680px] m-3  bg-[#171717] text-white rounded-lg font-roboto">
        <div>
          <img
            className="relative top-8  left-4 rounded-[50px] w-[68px] h-[68px] object-cover"
            alt="Avatar"
            loading="lazy"
            src={user.picture}
          />
          <button className="relative top-16 left-8 " onClick={handleClick}>
            <AddCircleIcon fontSize="large" />
          </button>
        </div>
      </div>
    </>
  );
}

export default NotionDbSideBar;
