import React from "react";
import Layout from "./../components/Layout/Layout";
import { Post, Stories, Suggestion } from "../components/Home";

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
      imagePost: "https://source.unsplash.com/collection/1163637/6",
      captionPost: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, nulla.",
      likeCount: 1150,
      commentCount: 34,
      datePost: 56,
    },
  ];

  return (
    <Layout className="pt-24 pb-10 grid grid-cols-3 space-x-6">
      <div className="col-span-2 space-y-6">
        <Stories />
        {posts &&
          posts.map((post, index) => {
            return <Post key={index} data={post} />;
          })}
      </div>
      <div className="col-span-1 w-auto h-screen fixed right-[200px] left-[62%]">
        <Suggestion />
      </div>
    </Layout>
  );
};

export default Home;
