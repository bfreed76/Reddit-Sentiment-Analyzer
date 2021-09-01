import "./App.css";
import { Button, Tab } from "semantic-ui-react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  matchPath,
  NavLink,
} from "react-router-dom";
import Profile from "./Components/Profile";
import { Context } from "./context/Context";
import { useContext, useEffect } from "react";
import Header from "./Components/HeaderComp";
import Footer from "./Components/Footer";
import Tabs from "./Components/Tabs";

//Don't forget! Ensure a max width of 414px, small size 360px for MOBILE (to ensure responsive design)

const App = () => {
  const context = useContext(Context);
  const { user, setUser, loggedin, setLoggedin } = useContext(Context);

  useEffect(() => {
    findMe()
  }, []); // NOT WORKING ON REFRESH!!

  const findMe = () => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        console.log("current user: ", data);
        if (!data.error) {
          setUser(data);
          setLoggedin(true);
        }
      })
      .catch((err) => console.log("error =", err));
  };

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

  const panes = [
    {
      menuItem: {
        as: NavLink,
        content: "Feed",
        to: "/feed",
        exact: true,
        key: "feed"
      },
      render: () => (
        <Route path="/feed" exact>
          <Tab.Pane>
            <div>Authentication content or feed here</div>
          </Tab.Pane>
        </Route>
      ),
    },
    {
      menuItem: {
        as: NavLink,
        content: "Search",
        to: "/",
        exact: true,
        key: "home",
      },
      render: () => (
        <Route path="/" exact>
          <Tab.Pane>
            <div>Search Component Here</div>
          </Tab.Pane>
        </Route>
      ),
    },
  ];

  const defaultActiveIndex = panes.findIndex(pane => {
    return !!matchPath(window.location.pathname, {
      path: pane.menuItem.to,
      exact: true
    });
  });

  return (
    <BrowserRouter>
    <div className="App">
        <br></br>
        <Header />
        <div>
          <Tab panes={panes} defaultActiveIndex={defaultActiveIndex} />
          </div>

        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {loggedin ? (
            <Route exact path="/profile" component={Profile} />
            ) : (
              <Redirect to="/login" component={Login} />
              )}
        </Switch> */}
        <Footer />
    </div>
      </BrowserRouter>
  );
};

export default App;
