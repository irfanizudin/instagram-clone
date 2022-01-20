import React from "react";
import HeaderStories from "../components/Stories/HeaderStories";
import HighlightStories from "../components/Stories/HighlightStories";
import StoriesItem from "./../components/Stories/StoriesItem";
import { useLocation } from "react-router-dom";

const Stories = () => {
  const { pathname } = useLocation();
  const highlights = pathname.split("/").includes("highlights");

  return (
    <div className="w-screen h-screen bg-black flex relative p-[16px] overflow-hidden">
      <div className="hidden sm:block">
        <HeaderStories />
      </div>
      {highlights ? <HighlightStories /> : <StoriesItem />}
    </div>
  );
};

export default Stories;
