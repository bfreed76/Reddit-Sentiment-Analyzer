import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Button } from "semantic-ui-react";

const LoginOrSignup = () => {
  return (
    <div>
      <div className="Link">
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginOrSignup;
