import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Detail from "./pages/Detail";
import UnAuthorized from "./pages/UnAuthorized";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NotionNotes from "./pages/NotionNotes";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:5000");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/UnAuthorized" element={<UnAuthorized></UnAuthorized>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/NotionNotes" element={<NotionNotes />} />
      </Routes>
    </>
  );
}

export default App;
