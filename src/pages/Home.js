import React from "react";
import Layout from "./../components/Layout/Layout";
import { Stories } from "../components/Home";

const Home = () => {
  return (
    <Layout className="pt-24 grid grid-cols-3">
      <div className="col-span-2">
        <Stories />
      </div>
    </Layout>
  );
};

export default Home;
