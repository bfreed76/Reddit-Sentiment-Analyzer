import React from "react";
import {Icon, Header} from "semantic-ui-react"

const HeaderComp = () => {
  return (
    <div>
      <Header as="h1" textAlign="center">
        <Header.Content>
          Welcome to r/Emo 
          <Icon name="reddit" />
        </Header.Content>
        {/* <Icon name="reddit" /> */}
      </Header>
    </div>
  );
};

export default HeaderComp;
