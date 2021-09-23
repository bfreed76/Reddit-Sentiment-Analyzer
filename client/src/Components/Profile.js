import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Button } from "semantic-ui-react";
import Login from "./Login";

const Profile = ({ handleLogout, renderUpdatePage }) => {
  const { user, loggedin } = useContext(Context);

  // Render profile info or login/signup prompt

  return (
    <div>
      {loggedin ? (
        <div>
          <h3>Username: {user.username} </h3>
          <h3>email: {user.email}</h3>
          <Button primary onClick={renderUpdatePage}>
            Update
          </Button>
          <Button primary onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Profile;
