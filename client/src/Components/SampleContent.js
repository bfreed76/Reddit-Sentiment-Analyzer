import React from "react";
import SampleTopContent2 from "../SampleTopContent2.jpg";

import { Image } from "semantic-ui-react";

import LoginOrSignup from "./LoginOrSignup";

const SampleContent = () => {
  return (
    <div>
      <h1 style={{ textAlign: "left" }}>Just a sample...</h1>
      <hr></hr>
      <Image src={SampleTopContent2} fluid />
      <hr></hr>
      <h1>Login to view!</h1>
      <LoginOrSignup />
    </div>
  );
};

export default SampleContent;
