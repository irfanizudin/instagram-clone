import React from "react";
import HeaderStories from "../components/Stories/HeaderStories";
import HighlightStories from "../components/Stories/HighlightStories";
import StoriesItem from "./../components/Stories/StoriesItem";
import { useLocation } from "react-router-dom";
import MetaTag from "./../components/Common/MetaTag";

const Stories = () => {
  const { pathname } = useLocation();
  const highlights = pathname.split("/").includes("highlights");

  return (
    <>
      <MetaTag
        title="Stories - Instagram Clone"
        description="Stories - Instagram Clone by Irfan Izudin"
        image="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
      />
      <div className="w-screen h-screen bg-black flex relative p-[16px] overflow-hidden">
        <div className="hidden sm:block">
          <HeaderStories />
        </div>
        {highlights ? <HighlightStories /> : <StoriesItem />}
      </div>
    </>
  );
};

export default Stories;
