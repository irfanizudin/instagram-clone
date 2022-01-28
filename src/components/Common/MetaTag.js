import React from "react";
import { Helmet } from "react-helmet";

const MetaTag = ({ title, description, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {/* <meta property="og:title" content={title} /> */}
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default MetaTag;
