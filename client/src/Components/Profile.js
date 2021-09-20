import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Button } from "semantic-ui-react";
import Login from "./Login";

const Profile = ({ handleLogout, renderUpdatePage }) => {
  const { user, loggedin } = useContext(Context);

  return (
    <div>
      {loggedin ? (
        <div>
          <h2>Username: {user.username} </h2>
          <h2>email: {user.email}</h2>
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
