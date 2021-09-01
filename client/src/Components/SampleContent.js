import React from "react";
import SampleTopContent from "../SampleTopContent.jpg";
import { Image } from "semantic-ui-react"

const SampleContent = () => {
  return (
    <div>
        <p>Search Results by Reddit Score</p>
        <h2>Sample content...</h2>
      <Image src={SampleTopContent} fluid />

      <h1>Sign Up or Login to see more!</h1>
      
    </div>
  );
};

export default SampleContent;
