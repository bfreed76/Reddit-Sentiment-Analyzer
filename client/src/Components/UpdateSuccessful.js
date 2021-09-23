import React, { useEffect, useContext } from "react";
import { Context } from "../context/Context";

const UpdateSuccessful = ({ findMe }) => {
  const { user } = useContext(Context);

  // Authenticates user with updated profile data

  useEffect(() => {
    findMe();
  }, []);

  // Success message

  return (
    <div>
      <h2>Welcome {user.username}.</h2>
      <h3>Click a tab to continue.</h3>
    </div>
  );
};

export default UpdateSuccessful;
