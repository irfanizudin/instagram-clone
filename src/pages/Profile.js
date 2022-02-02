import React from "react";
import { useParams } from "react-router-dom";
import { FooterProfile, HeaderProfile, HighlightProfile, PostProfile } from "../components/Profile";
import Layout from "./../components/Layout/Layout";
import MetaTag from "./../components/Common/MetaTag";

const Profile = () => {
  const { username } = useParams();

  return (
    <>
      <MetaTag
        title="Profile - Instagram Clone"
        description="Profile - Instagram Clone by Irfan Izudin"
      />
      <Layout className="pt-[100px] sm:pt-[100px]">
        <HeaderProfile username={username} />
        <HighlightProfile />
        <PostProfile />
        <FooterProfile />
      </Layout>
    </>
  );
};

export default Profile;
