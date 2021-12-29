import React from "react";
import { NewPost } from "./../components/Upload";
import Layout from "./../components/Layout/Layout";

const Upload = () => {
  return (
    <Layout className="flex items-center justify-center">
      <NewPost />
    </Layout>
  );
};

export default Upload;
