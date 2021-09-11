import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);
  const [results, setResults] = useState("")
  const store = { user, setUser, loggedin, setLoggedin, results, setResults };
  //wrap this around the entire app, similar to BrowserRouter
  //the value prop is where we pass down our global state

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

export default ContextProvider;
