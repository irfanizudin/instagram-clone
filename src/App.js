import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Upload from "./pages/Upload";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import { Post, Reels, Videos, Saved, Tagged, Follower, Following } from "./components/Profile";
import { Chat, ChatRoom, ChatGeneral, NewMessage } from "./components/Inbox";
import Stories from "./pages/Stories";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/direct" element={<Inbox />}>
        <Route path="inbox">
          <Route path="" element={<Chat />} />
          <Route path="general" element={<ChatGeneral />} />
        </Route>
        <Route path="new" element={<NewMessage />} />
        <Route path="t/:name" element={<ChatRoom />} />
      </Route>
      <Route path="/create/select" element={<Upload />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/:username" element={<Profile />}>
        <Route path="followers" element={<Follower />} />
        <Route path="following" element={<Following />} />
        <Route path="" element={<Post />} />
        <Route path="reels" element={<Reels />} />
        <Route path="channel" element={<Videos />} />
        <Route path="saved" element={<Saved />} />
        <Route path="tagged" element={<Tagged />} />
      </Route>
      <Route path="/stories/:username/:id" element={<Stories />} />
      <Route path="/stories/highlights/:id" element={<Stories />} />
    </Routes>
  );
};

export default App;
