import React from "react";
import { ExplorePost } from "../Explore";

const Tagged = () => {
  const Posts = [
    {
      image: "https://source.unsplash.com/collection/3295306/balance-and-wellness",
      liked: 44,
      comment: 55,
    },
    {
      image: "https://source.unsplash.com/collection/838038/happy-%2B-free-feels",
      liked: 123,
      comment: 45,
    },
    {
      image: "https://source.unsplash.com/collection/pzzjY5_eQ4k/levitation-photography",
      liked: 223,
      comment: 66,
    },
    {
      image: "https://source.unsplash.com/collection/1410291/shadow-play",
      liked: 44,
      comment: 55,
    },
    {
      image: "https://source.unsplash.com/collection/1895329/office-life",
      liked: 463,
      comment: 44,
    },
    {
      image: "https://source.unsplash.com/collection/496416/camera",
      liked: 223,
      comment: 66,
    },
    {
      image: "https://source.unsplash.com/collection/291422/night-lights",
      liked: 463,
      comment: 44,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {Posts &&
        Posts.map((post, index) => {
          return (
            <ExplorePost key={index} image={post.image} liked={post.liked} comment={post.comment} />
          );
        })}
    </div>
  );
};

export default Tagged;
