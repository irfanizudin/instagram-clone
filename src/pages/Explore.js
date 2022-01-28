import React from "react";
import { ExplorePost } from "../components/Explore";
import Layout from "../components/Layout/Layout";
import { FooterProfile } from "../components/Profile";
import { useNavigate } from "react-router-dom";
import MetaTag from "./../components/Common/MetaTag";

const Explore = () => {
  const Posts = [
    {
      image: "https://source.unsplash.com/collection/1103088/one-color",
      liked: 123,
      comment: 45,
    },
    {
      image: "https://source.unsplash.com/collection/1895329/office-life",
      liked: 44,
      comment: 55,
    },
    {
      image: "https://source.unsplash.com/collection/838038/happy-%2B-free-feels",
      liked: 463,
      comment: 44,
    },
    {
      image: "https://source.unsplash.com/collection/291422/night-lights",
      liked: 223,
      comment: 66,
    },
    {
      image: "https://source.unsplash.com/collection/1895329/office-life",
      liked: 44,
      comment: 55,
    },
    {
      image: "https://source.unsplash.com/collection/838038/happy-%2B-free-feels",
      liked: 463,
      comment: 44,
    },
    {
      image: "https://source.unsplash.com/collection/291422/night-lights",
      liked: 223,
      comment: 66,
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <MetaTag
        title="Explore - Instagram Clone"
        description="Explore - Instagram Clone by Irfan Izudin"
        image="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
      />
      <Layout className="pt-[100px] sm:pt-[100px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Posts &&
            Posts.map((post, index) => {
              return (
                <ExplorePost
                  onClick={() => navigate("/p/1")}
                  key={index}
                  image={post.image}
                  liked={post.liked}
                  comment={post.comment}
                />
              );
            })}
        </div>
        <FooterProfile />
      </Layout>
    </>
  );
};

export default Explore;
