import "./App.css";
import { Button, Tab } from "semantic-ui-react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { Context } from "./context/Context";
import { useContext, useEffect } from "react";
import Header from "./Components/HeaderComp";
import Footer from "./Components/Footer";
import Tabs from "./Components/Tabs";
import Search from "./Components/Search";
import TopContent from "./Components/TopContent";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  matchPath,
  NavLink,
} from "react-router-dom";

//Don't forget! Ensure a max width of 414px, small size 360px for MOBILE (to ensure responsive design)

const App = () => {
  const context = useContext(Context);
  const { user, setUser, loggedin, setLoggedin } = useContext(Context);

  useEffect(() => {
    findMe();
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
        content: "Top Content",
        to: "/top_content",
        exact: true,
        key: "top_content",
      },
      render: () => (
        <Route path="/top_content" exact>
          <Tab.Pane>
            <div>
              {loggedin ? (
            <TopContent />
            ) : (
              <Login />
              )}
              </div>
          </Tab.Pane>
        </Route>
      ),
    },
    {
      menuItem: {
        as: NavLink,
        content: "My Searches",
        to: "/",
        exact: true,
        key: "home",
      },
      render: () => (
        <Route path="/" exact>
          <Tab.Pane>
            <div> <Search /></div>
          </Tab.Pane>
        </Route>
      ),
    },
  ];

  const defaultActiveIndex = panes.findIndex((pane) => {
    return !!matchPath(window.location.pathname, {
      path: pane.menuItem.to,
      exact: true,
    });
  });

  return (
    <BrowserRouter>
      <div className="App">
        <br></br>
        <Header />
        <hr></hr>
        <br></br>
        <div>
          <Tab panes={panes} defaultActiveIndex={defaultActiveIndex} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
