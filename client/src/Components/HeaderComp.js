import React from "react";
import { Icon, Header } from "semantic-ui-react";

const HeaderComp = () => {
  return (
    <div>
      <Header as="h1" textAlign="center">
        <Header.Content>
        <div>
          <Icon name="reddit" />        
          <big>Emot/r</big>
           <Icon id="userIcon" name="user outline" />
        </div>
        </Header.Content>

      </Header>
    </div>
  );
};

export default HeaderComp;
