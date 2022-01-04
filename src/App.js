import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Upload from "./pages/Upload";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Follower from "./components/Profile/Follower";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/direct/inbox" element={<Inbox />} />
      <Route path="/create/select" element={<Upload />} />
      <Route path="/explore/" element={<Explore />} />
      <Route path="/:username" element={<Profile />}>
        <Route path="followers" element={<Follower />} />
      </Route>
    </Routes>
  );
};

export default App;
