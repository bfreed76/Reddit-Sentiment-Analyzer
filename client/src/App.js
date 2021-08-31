import "./App.css";
import { Header, Icon, Button } from "semantic-ui-react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Profile from "./Components/Profile";
import { Context } from "./context/Context";
import { useContext, useEffect } from "react";

const App = () => {
  const context = useContext(Context);
  const { user, setUser, loggedin, setLoggedin } = useContext(Context);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setLoggedin(true);
        });
      }
    });
  }, []); // NOT WORKING ON REFRESH!!

  const handleLogout = (e) => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Logged out.");
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
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
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
