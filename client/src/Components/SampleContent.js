import React from "react";
import SampleTopContent from "../SampleTopContent.jpg";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SampleContent = () => {
  return (
    <div>
      <p>Search Results by Reddit Score</p>
      <h2>Sample content...</h2>
      <Image src={SampleTopContent} fluid />

      <h1>Sign in to see more!</h1>
      <div className="Link">
        <Link to="/login">Login</Link>
        <p style={{marginBottom: "0px"}}>-or-</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SampleContent;
