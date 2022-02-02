import React from "react";
import { NewPost } from "./../components/Upload";
import Layout from "./../components/Layout/Layout";
import MetaTag from "./../components/Common/MetaTag";

const Upload = () => {
  return (
    <>
      <MetaTag
        title="Upload - Instagram Clone"
        description="Upload - Instagram Clone by Irfan Izudin"
      />
      <Layout className="flex items-center justify-center">
        <NewPost />
      </Layout>
    </>
  );
};

export default Upload;
