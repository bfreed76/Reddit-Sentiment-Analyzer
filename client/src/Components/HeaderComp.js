import React from "react";
import { Icon, Header } from "semantic-ui-react";
import { Button, Divider, Image, Transition } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import LoginOrSignup from "./LoginOrSignup";
import { Context } from "../context/Context";
import { useContext } from "react";

const HeaderComp = ({ handleLogout }) => {
  let history = useHistory();
  const context = useContext(Context);
  const { loggedin } = useContext(Context);
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Header as='h1' >
        <Header.Content>
          <div as="h1.ui.header">
            <Icon name='reddit' />
            <big>Emot/r</big> 
            <Icon id='userIcon' name='user outline' onClick={toggleVisibility} />
          </div>
        </Header.Content>
      </Header>
      <Divider hidden />
      <Transition visible={visible} animation='fade' duration={300}>
        <div>{loggedin ? <Profile handleLogout={handleLogout} /> : <LoginOrSignup />}</div>
      </Transition>
    </div>
  );
};

export default HeaderComp;
