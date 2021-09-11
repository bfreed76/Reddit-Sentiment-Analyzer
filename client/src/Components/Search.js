import React, { useState, useContext } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { Context } from "./context/Context";

const Search = () => {
  const [sUsername, setSUsername] = useState("");
  const [subreddit, setSubreddit] = useState("");
  const [searchTerms, setSearchTerms] = useState(true);
  const [targetTerms, setTargetTerms] = useState("");
  const [overallEmo, setOverallEmo] = useState("");
  const [overallSent, setOverallSent] = useState("");
  const [searchTarget, setSearchTarget] = useState("comment");
  const context = useContext(Context);
  const { user, setUser, loggedin, setLoggedin } = useContext(Context);
  const history = useHistory();

  let pushShiftURL =
    "https://api.pushshift.io/reddit/search/" +
    searchTarget +
    "/?q=" +
    searchTerms +
    "&subreddit=" +
    subreddit +
    "&author=" +
    sUsername +
    "&fields=author,created_utc,body,score,subreddit,url,title,selftext" +
    "&size=" +
    "3";

  const handleSearch = (e) => {
    e.preventDefault();
    const postObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        url: pushShiftURL,
        sUsername,
        subreddit,
        searchTerms,
      }),
    };
    fetch("/reddit", postObj)
      .then((res) => res.json())
      .then((res) => {
        console.log(pushShiftURL);
        console.log(res);
        setOverallEmo(res.emotion.document.emotion);
        setOverallSent(res.sentiment.document);
        setTargetTerms(res.emotion.targets);
        history.push("/results");
      })
      .catch((err) => console.log("reddit get err = ", err));
  };

  const handleCheck = (e) => {
    setSearchTarget(e.target.value);
  };

  return (
    <Form onSubmit={handleSearch}>
      <h2>Search Reddit to discover emotional stuff</h2>
      <Form.Field>
        <Checkbox
          label='Comments'
          radio
          id='comment'
          value='comment'
          checked={searchTarget === "comment"}
          onChange={handleCheck}
        />
        <Checkbox
          label='Submissions'
          radio
          id='submission'
          value='submission'
          checked={searchTarget == "submission"}
          onChange={handleCheck}
        />
      </Form.Field>
      <Form.Field>
        <Input
          icon='search'
          iconPosition='left'
          placeholder='u/ username'
          onChange={(e) => setSUsername(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          icon='search'
          iconPosition='left'
          placeholder='r/ subreddit'
          onChange={(e) => setSubreddit(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          icon='search'
          iconPosition='left'
          placeholder='search terms'
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </Form.Field>
      <br></br>
      <Button primary type='submit'>
        Go
      </Button>
    </Form>
  );
};

export default Search;
