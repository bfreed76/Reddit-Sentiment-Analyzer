import "./App.css";
import { Button } from "semantic-ui-react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Profile from "./Components/Profile";
import { Context } from "./context/Context";
import { useContext, useEffect } from "react";
import Header from "./Components/HeaderComp";
import Footer from "./Components/Footer"

//Don't forget! Ensure a max width of 414px, small size 360px for MOBILE (to ensure responsive design)

const App = () => {
  const context = useContext(Context);
  const { user, setUser, loggedin, setLoggedin } = useContext(Context);

  //Check backend for user auth
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

  //Header, Tab 1 (Feed/login/Register), Tab 2 (Search and Search Results), Footer
  //See URL: Loading tab: https://react.semantic-ui.com/modules/tab/#states-loading


  return (
    <div className="App">
      <BrowserRouter>
        <br></br> 
        <Header />
        <div>
          <Button>Search</Button>
          <Button>Feed</Button>
        </div>
        <br></br>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/signup">Signup</Link>
        <br></br>
        <Link to="/profile">Profile</Link>
        <br></br>
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
        <Footer />  
      </BrowserRouter>
    </div>
  );
};

export default App;
