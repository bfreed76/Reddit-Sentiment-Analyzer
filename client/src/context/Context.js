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
  const CSRFToken = (cookies) => {
    console.log('**********HELLLLOOOO', document.cookie)
    console.log( document.cookie)
    // debugger
    if (!!cookies) {
      const splitCookies = cookies.split("; ");
      return splitCookies.find((cookie) => cookie.startsWith("CSRF-TOKEN=")).split("=")[1];
    } else {
      return cookies
    }
  };

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
    setIsUpdating,
    CSRFToken,
  };
  //wrap this around the entire app, similar to BrowserRouter
  //the value prop is where we pass down our global state

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

export default ContextProvider;
