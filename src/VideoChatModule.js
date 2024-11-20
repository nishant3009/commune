// import "./VideoChatModule.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API";
import ReactPlayer from "react-player";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);
  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };
  return (
    <div className="w-72 mt-2 text-white">
      <div className="m-2 text-white">
        <TextField
          id="outlined-basic"
          label="Enter Meeting Id"
          variant="outlined"
          placeholder="Enter Meeting Id"
          onChange={(e) => {
            setMeetingId(e.target.value);
          }}
        />
      </div>
      <div>
        <Button variant="contained" onClick={onClick}>
          Join
        </Button>
        {" or "}
        <Button variant="contained" onClick={onClick}>
          Create Meeting
        </Button>
      </div>
    </div>
  );
}

function ParticipantView(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div>
      <p className="bg-slate-500 rounded-md h-10 m-2 p-2">
        Participant: {displayName}
      </p>
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          //
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"300px"}
          width={"300px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}

function Controls(props) {
  const [invertMic, setInverMic] = useState(false);
  const [invertCam, setInvertCam] = useState(false);
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  const micHandler = () => {
    setInverMic(!invertMic);
  };
  return (
    <div className="table-caption ml-4 w-[100%]">
      <Button
        variant="contained"
        color="error"
        className="w-[145%] bg-red-500"
        onClick={() => {
          leave();
        }}
      >
        Leave
      </Button>
      <div className="flex  w-[145%] justify-between mt-2">
        <Button
          color="success"
          variant="contained"
          className="w-[48%] mr-2 "
          // disabled={invertMic}
          onClick={() => {
            toggleMic();
          }}
        >
          Mic
        </Button>
        <Button
          color="success"
          variant="contained"
          className="w-[48%] m-2"
          // disabled={invertCam}
          onClick={() => toggleWebcam()}
        >
          Webcam
        </Button>
      </div>
    </div>
  );
}

function MeetingView(props) {
  const [joined, setJoined] = useState(null);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
      props.onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  return (
    <div className=" text-white m-2 w-72">
      <h3 className="bg-slate-500 rounded-md h-10 m-2 p-2">
        Meeting Id: {props.meetingId}
      </h3>
      {joined && joined == "JOINED" ? (
        <div>
          <div className="inline">
            <Controls />
          </div>

          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
            />
          ))}
        </div>
      ) : joined && joined == "JOINING" ? (
        <p className="bg-green-500 rounded-md h-10 m-2 p-2">
          Joining the meeting...
        </p>
      ) : (
        <div className="ml-2">
          <Button variant="contained" onClick={joinMeeting}>
            Join
          </Button>
        </div>
      )}
    </div>
  );
}

function VideoChatModule() {
  const [meetingId, setMeetingId] = useState(null);
  const { user } = useAuth0();

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: user.name,
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default VideoChatModule;
