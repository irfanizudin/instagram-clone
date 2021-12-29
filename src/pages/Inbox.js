import React, { useState } from "react";
import { Chat, ChatRoom, ContactList } from "../components/Inbox";
import Layout from "./../components/Layout/Layout";

const Inbox = () => {
  const [chatRoom, setChatRoom] = useState(false);
  const showChatRoom = () => setChatRoom(true);

  return (
    <>
      <Layout className="max-h-screen grid grid-cols-3">
        <div className="col-span-1">
          <ContactList showChatRoom={showChatRoom} />
        </div>
        <div className="col-span-2">{chatRoom ? <ChatRoom /> : <Chat />}</div>
      </Layout>
    </>
  );
};

export default Inbox;
