import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Button } from "semantic-ui-react";
import Login from "./Login";

const Profile = ({handleLogout}) => {
  const context = useContext(Context);
  const { loggedin } = useContext(Context);
  return (
    <div>
      {loggedin ? (
        <div>
          <h2>Username: Bophus</h2>
          <h2>email: bfasdf@gmail.com</h2>
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
