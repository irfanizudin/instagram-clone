import React from "react";
import HeaderStories from "../components/Stories/HeaderStories";
import StoriesItem from "./../components/Stories/StoriesItem";

const Stories = () => {
  return (
    <div className="w-screen h-screen bg-black flex relative p-[16px]">
      <HeaderStories />
      <StoriesItem />
    </div>
  );
};

export default Stories;
