import React from "react";
import { ExplorePost } from "../components/Explore";
import Layout from "../components/Layout/Layout";

const Explore = () => {
  return (
    <Layout className="grid items-center justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <ExplorePost />
      <ExplorePost />
      <ExplorePost />
      <ExplorePost />
      <ExplorePost />
      <ExplorePost />
      <ExplorePost />
    </Layout>
  );
};

export default Explore;
