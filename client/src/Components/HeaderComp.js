import React, { useContext } from "react";
import { Icon, Header } from "semantic-ui-react";
import { Divider, Transition } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import LoginOrSignup from "./LoginOrSignup";
import { Context } from "../context/Context";

const HeaderComp = ({ handleLogout, findMe }) => {
  const { loggedin, setIsUpdating } = useContext(Context);
  const [visible, setVisible] = useState(false);
  let history = useHistory();

  // Toggles profile/login visibility

  const toggleVisibility = () => {
    findMe();
    setVisible(!visible);
  };

  // Helper that toggles update state and visibility

  const renderUpdatePage = () => {
    setIsUpdating(true);
    toggleVisibility();
    history.push("/signup");
  };

  // Renders header, toggles profile and login/signup

  return (
    <div>
      <Header as='h1'>
        <Header.Content>
          <div as='h1.ui.header'>
            <Icon name='reddit' />
            <big>Emot/r</big>
            <Icon id='userIcon' name='user outline' onClick={toggleVisibility} />
          </div>
        </Header.Content>
      </Header>
      <Divider hidden />
      <Transition visible={visible} animation='fade' duration={300}>
        <div>
          {loggedin ? (
            <Profile handleLogout={handleLogout} renderUpdatePage={renderUpdatePage} />
          ) : (
            <LoginOrSignup />
          )}
        </div>
      </Transition>
    </div>
  );
};

export default HeaderComp;
