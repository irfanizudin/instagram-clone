import React from "react";
import { useParams } from "react-router-dom";
import { FooterProfile, HeaderProfile, HighlightProfile, PostProfile } from "../components/Profile";
import Layout from "./../components/Layout/Layout";

const Profile = () => {
  const { username } = useParams();

  return (
    <Layout>
      <HeaderProfile username={username} />
      <HighlightProfile />
      <PostProfile />
      <FooterProfile />
    </Layout>
  );
};

export default Profile;
