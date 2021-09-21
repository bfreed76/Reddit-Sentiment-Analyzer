import React from "react";
import { Link } from "react-router-dom";

const LoginOrSignup = () => {
  return (
    <div>
      <div className='Link'>
        <Link to='/login'>Login</Link> | <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginOrSignup;
