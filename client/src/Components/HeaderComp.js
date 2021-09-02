import React from "react";
import { Icon, Header } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const HeaderComp = () => {
  let history = useHistory();

  const handleClick = () => {
    console.log("icon clicked");
    history.push("/profile")
  };

  return (
    <div>
      <Header as="h1" textAlign="center">
        <Header.Content>
          <div>
            <Icon name="reddit" />
            <big>Emot/r</big>
            <Icon id="userIcon" name="user outline" onClick={handleClick} />
          </div>
        </Header.Content>
      </Header>
    </div>
  );
};

export default HeaderComp;
