import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Upload from "./pages/Upload";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Post from "./components/Profile/Post";
import Reels from "./components/Profile/Reels";
import Videos from "./components/Profile/Videos";
import Saved from "./components/Profile/Saved";
import Tagged from "./components/Profile/Tagged";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/direct/inbox" element={<Inbox />} />
      <Route path="/create/select" element={<Upload />} />
      <Route path="/explore/" element={<Explore />} />
      <Route path="/:username" element={<Profile />}>
        <Route path="" element={<Post />} />
        <Route path="reels" element={<Reels />} />
        <Route path="channel" element={<Videos />} />
        <Route path="saved" element={<Saved />} />
        <Route path="tagged" element={<Tagged />} />
      </Route>
    </Routes>
  );
};

export default App;
