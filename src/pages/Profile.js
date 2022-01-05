import React from "react";
import { useParams } from "react-router-dom";
import { HeaderProfile, HighlightProfile, PostProfile } from "../components/Profile";
import Layout from "./../components/Layout/Layout";

const Profile = () => {
  const { username } = useParams();

  return (
    <Layout>
      <HeaderProfile username={username} />
      <HighlightProfile />
      <PostProfile />
    </Layout>
  );
};

export default Profile;
