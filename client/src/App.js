import "./App.css";
import { Tab } from "semantic-ui-react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { Context } from "./context/Context";
import { useContext, useEffect } from "react";
import HeaderComp from "./Components/HeaderComp";
import MySearches from "./Components/MySearches";
import UpdateSuccessful from "./Components/UpdateSuccessful";
import Search from "./Components/Search";
import TopContent from "./Components/TopContent";
import ResultsContainer from "./Components/ResultsContainer";
import SampleContent from "./Components/SampleContent";
import { BrowserRouter, Route, Switch, useHistory, matchPath, NavLink } from "react-router-dom";

const App = () => {
  const { setUser, loggedin, setLoggedin } = useContext(Context);
  const history = useHistory();

  // Checks user authentication

  useEffect(() => {
    findMe();
  }, []);

  const findMe = () => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setUser(data);
          setLoggedin(true);
          history.push("/");
        }
      })
      .catch((err) => console.log("error =", err));
  };

  // Logout

  const handleLogout = () => {
    fetch("/api/logout", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedin(false);
        setUser({});
        window.location.reload();
      })
      .catch((err) => console.log("error =",err));
  };

  // Routes to signup component

  const handleUpdate = () => {
    history.push("/signup");
  };

  // Three Semantic UI tabs for primary interface/app body

  const panes = [
    {
      menuItem: {
        as: NavLink,
        content: "Most Recent",
        to: "/top_content",
        exact: true,
        key: "top_content",
      },
      render: () => (
        <Route path='/top_content' exact>
          <Tab.Pane>
            <div>
              {loggedin ? (
                <TopContent />
              ) : (
                <div>
                  <SampleContent />
                </div>
              )}
            </div>
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
        <Route path='/' exact>
          <Tab.Pane>
            <div>
              {" "}
              <Search />
            </div>
          </Tab.Pane>
        </Route>
      ),
    },
    {
      menuItem: loggedin
        ? {
            as: NavLink,
            content: "My Searches",
            to: "/my_searches",
            exact: true,
            key: "my_searches",
          }
        : {},
      render: () => (
        <Route path='/my_searches' exact>
          <Tab.Pane>
            <div>
              <MySearches />
            </div>
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

  // React routing; render header and tabs (body)

  return (
    <BrowserRouter>
      <div className='App'>
        <br></br>
        <HeaderComp handleLogout={handleLogout} handleUpdate={handleUpdate} findMe={findMe} />
        <hr></hr>
        <Tab panes={panes} defaultActiveIndex={defaultActiveIndex} />
        <br></br>
        <div></div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/results' component={ResultsContainer} />
          <Route exact path='/success'>
            <UpdateSuccessful findMe={findMe} />
          </Route>
          <Route exact path='/profile'>
            <Profile handleLogout={handleLogout} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
