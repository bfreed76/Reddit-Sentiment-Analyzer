import React from "react";
import SampleTopContent from "../SampleTopContent.jpg";
import { Image } from "semantic-ui-react"

const SampleContent = () => {
  return (
    <div>
        <p>Search Results by Reddit Score</p>
        <h2>Sample content...</h2>
      <Image src={SampleTopContent} fluid />
    </div>
  );
};

export default SampleContent;
