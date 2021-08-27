import "./App.css";
import { Header, Icon, List } from "semantic-ui-react";
import Login from "./Components/Login";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  const onLogin = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <Header as="h2">
        <Icon name="reddit" />
        <Header.Content>This is app</Header.Content>
      </Header>
      <List items={["Apples", "Pears", "Oranges"]} />
      <Login onLogin={onLogin} />
    </div>
  );
};

export default App;

