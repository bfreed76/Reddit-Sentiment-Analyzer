import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);
  const [results, setResults] = useState();
  const [sUsername, setSUsername] = useState("");
  const [subreddit, setSubreddit] = useState("");
  const [searchTerms, setSearchTerms] = useState("");
  const [searchTarget, setSearchTarget] = useState("comment");
  const store = {
    user,
    setUser,
    loggedin,
    setLoggedin,
    results,
    setResults,
    sUsername,
    setSUsername,
    subreddit,
    setSubreddit,
    searchTerms,
    setSearchTerms,
    searchTarget,
    setSearchTarget,
  };
  //wrap this around the entire app, similar to BrowserRouter
  //the value prop is where we pass down our global state

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

export default ContextProvider;
