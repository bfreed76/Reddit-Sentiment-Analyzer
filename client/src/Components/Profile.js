import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { Button } from "semantic-ui-react";
import Login from "./Login";
import { useHistory } from "react-router";

const Profile = ({ handleLogout, toggleVisiblity, renderUpdatePage, findMe }) => {
  const context = useContext(Context);
  const { user, loggedin, isUpdating, setIsUpdating  } = useContext(Context);
  let history = useHistory()

  return (
    <div>
      {loggedin ? (
        <div>
          <h2>Username: {user.username} </h2>
          <h2>email: {user.email}</h2>
          <Button primary onClick={renderUpdatePage}>Update</Button> 
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
