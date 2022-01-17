import React from "react";
import { ExplorePost } from "../Explore";
import { useNavigate } from "react-router-dom";

const Post = () => {
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
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-3">
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
  );
};

export default Post;
