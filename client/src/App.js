import "./App.css"
import { Header, Icon } from "semantic-ui-react"
import Login from "./Components/Login"
import { useState, useEffect } from "react"
import Signup from "./Components/Signup"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Profile from "./Components/Profile"

const App = () => {
  const [user, setUser] = useState({})
  const [loggedin, setLoggedin] = useState(false)

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header as="h2">
          <Icon name="reddit" />
          <Header.Content>Welcome to Emo Reddit</Header.Content>
          <Link to="/login">Login</Link>
          <br></br>
          <Link to="/signup">Signup</Link>
        </Header>
          <Switch>
           <Route exact path='/login'>
             <Login setUser={setUser} setLoggedin={setLoggedin}/>
          </Route> 
          <Route exact path='/signup'>
              <Signup setUser={setUser} setLoggedin={setLoggedin}/>
          </Route>
              {loggedin ? 
                <Route exact path='/profile'>
                  <Profile user={user}
              }
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

