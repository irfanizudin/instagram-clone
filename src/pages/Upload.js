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
        image="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
      />
      <Layout className="flex items-center justify-center">
        <NewPost />
      </Layout>
    </>
  );
};

export default Upload;
