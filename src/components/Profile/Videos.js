import React from "react";
import VideoPost from "./VideoPost";

const Videos = () => {
  const Videos = [
    {
      image: "https://source.unsplash.com/collection/9389477/tokyo",
      liked: 123,
      comment: 45,
      play: 325,
    },
    {
      image: "https://source.unsplash.com/collection/496416/camera",
      liked: 44,
      comment: 55,
      play: 456,
    },
    {
      image: "https://source.unsplash.com/collection/3295306/balance-and-wellness",
      liked: 463,
      comment: 44,
      play: 123,
    },
    {
      image: "https://source.unsplash.com/collection/pzzjY5_eQ4k/levitation-photography",
      liked: 223,
      comment: 66,
      play: 235,
    },
    {
      image: "https://source.unsplash.com/collection/4324303/vinyl-and-covers",
      liked: 44,
      comment: 55,
      play: 543,
    },
    {
      image: "https://source.unsplash.com/collection/1410291/shadow-play",
      liked: 463,
      comment: 44,
      play: 432,
    },
    {
      image: "https://source.unsplash.com/collection/3694365/gradient-nation",
      liked: 223,
      comment: 66,
      play: 223,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {Videos &&
        Videos.map((video, index) => {
          return (
            <VideoPost
              key={index}
              className="max-w-[300px] aspect-square"
              image={video.image}
              liked={video.liked}
              comment={video.comment}
              play={video.play}
            />
          );
        })}
    </div>
  );
};

export default Videos;
