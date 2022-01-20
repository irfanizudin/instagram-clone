import React from "react";
import { ContactList } from "../components/Inbox";
import Layout from "./../components/Layout/Layout";
import { Outlet, useLocation } from "react-router-dom";

const Inbox = () => {
  const { pathname } = useLocation();
  const direct = pathname.split("/").includes("direct");
  return (
    <>
      <Layout className="grid h-screen grid-cols-1 md:grid-cols-3 pt-24 ">
        <div className="md:col-span-1">
          <ContactList />
        </div>
        <div className="md:col-span-2 hidden md:block">
          <Outlet />
        </div>
        {direct ? "" : <Outlet />}
      </Layout>
    </>
  );
};

export default Inbox;
