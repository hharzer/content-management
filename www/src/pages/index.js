import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import { StitchContext } from "../contexts/stitch-context";

const IndexPage = () => {
  const { state } = useContext(StitchContext);

  return (
    <div className="container">
      <SEO title="Gallery" keywords={[`gatsby`, `application`, `react`]} />
      {state && state.isLoggedIn ? <h1>gallery</h1> : null}
      <style jsx>{`
        .container {
          max-width: 990px;
          margin: 140px auto 0;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
