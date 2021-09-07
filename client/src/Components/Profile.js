import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Button } from "semantic-ui-react";
import Login from "./Login";

const Profile = ({handleLogout}) => {
  const context = useContext(Context);
  const { user, loggedin } = useContext(Context);
  return (
    <div>
      {loggedin ? (
        <div>
          <h2>Username: {user.username} </h2>
          <h2>email: {user.email}</h2>
          <Button primary>Update</Button>
          <Button primary onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Profile;
