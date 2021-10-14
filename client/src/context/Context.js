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
  const [isUpdating, setIsUpdating] = useState(false);

  // Context 'store'

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
    isUpdating,
    setIsUpdating
  };

  // Wrapped contenxt provider component at Index.js
  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

export default ContextProvider;
