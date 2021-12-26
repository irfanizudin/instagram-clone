import React from "react";
import { ContactList } from "../components/Inbox";
import Layout from "./../components/Layout/Layout";

const Inbox = () => {
  return (
    <Layout className="max-h-screen grid grid-cols-3">
      <div className="col-span-1">
        <ContactList />
      </div>
    </Layout>
  );
};

export default Inbox;
