import React, { useState } from "react";
import { Chat, ChatRoom, ContactList } from "../components/Inbox";
import Layout from "./../components/Layout/Layout";
import { Outlet, useLocation } from "react-router-dom";

const Inbox = () => {
  const [chatRoom, setChatRoom] = useState(false);
  const showChatRoom = () => setChatRoom(true);

  const { pathname } = useLocation();
  const direct = pathname.split("/").includes("direct");
  return (
    <>
      <Layout className="grid h-screen grid-cols-3">
        <div className="col-span-1">
          <ContactList showChatRoom={showChatRoom} />
        </div>
        <div className="col-span-2">
          <Outlet />
        </div>
        {direct ? "" : <Outlet />}
      </Layout>
    </>
  );
};

export default Inbox;
