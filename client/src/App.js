import "./App.css";
import { Header, Icon, Button } from "semantic-ui-react";
import Login from "./Components/Login";
import { useState, useEffect } from "react";
import Signup from "./Components/Signup";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Profile from "./Components/Profile";

const App = () => {
  const [user, setUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {}, []);

  const handleLogout = (e) => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Logged out: ", user);
        setLoggedin(false);
        setUser({});
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header as="h2">
          <Icon name="reddit" />
          <Header.Content>Welcome to Emo Reddit</Header.Content>
          <Link to="/login">Login</Link>
          <br></br>
          <Link to="/signup">Signup</Link>
          <br></br>
          <Link to="/profile">Profile</Link>
          <br></br>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Switch>
          <Route exact path="/login">
            <Login setUser={setUser} setLoggedin={setLoggedin} />
          </Route>
          <Route exact path="/signup">
            <Signup setUser={setUser} setLoggedin={setLoggedin} />
          </Route>
          {loggedin ? (
            <Route exact path="/profile" component={Profile} />
          ) : (
            <Redirect to="/login" component={Login} />
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
