import React from "react";
import Layout from "./../components/Layout/Layout";
import { FooterHome, Post, Stories, Suggestion } from "../components/Home";
import MetaTag from "./../components/Common/MetaTag";

const Home = () => {
  const posts = [
    {
      username: "johndoe",
      photoProfile: "https://randomuser.me/api/portraits/men/75.jpg",
      imagePost: "https://source.unsplash.com/collection/1163637/45",
      captionPost: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nulla.",
      likeCount: 1150,
      commentCount: 34,
      datePost: 56,
    },
    {
      username: "amirKhan",
      photoProfile: "https://randomuser.me/api/portraits/men/22.jpg",
      imagePost: "https://source.unsplash.com/collection/1103088/one-color",
      captionPost: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nulla.",
      likeCount: 1150,
      commentCount: 34,
      datePost: 56,
    },
  ];

  return (
    <>
      <MetaTag title="Instagram Clone" description="HomePage - Instagram Clone by Irfan Izudin" />
      <Layout className="grid grid-cols-3 space-x-6 pt-14 sm:pt-16">
        <div className="col-span-3 lg:col-span-2 space-y-1 lg:space-y-6">
          <Stories />
          {posts &&
            posts.map((post, index) => {
              return <Post key={index} data={post} />;
            })}
        </div>
        <div className="lg:col-span-1 w-auto h-screen fixed lg:right-[80px] xl:right-[150px] lg:left-[65%] xl:left-[67%]">
          <Suggestion />
          <FooterHome />
        </div>
      </Layout>
    </>
  );
};

export default Home;
