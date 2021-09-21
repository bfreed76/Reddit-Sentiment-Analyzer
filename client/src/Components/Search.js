import React, { useState, useContext } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { Context } from "../context/Context";

const Search = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const {
    user,
    setResults,
    sUsername,
    setSUsername,
    subreddit,
    setSubreddit,
    searchTerms,
    setSearchTerms,
    searchTarget,
    setSearchTarget,
  } = useContext(Context);

  let pushShiftURL =
    "https://api.pushshift.io/reddit/search/" +
    searchTarget +
    "/?q=" +
    searchTerms +
    "&subreddit=" +
    subreddit +
    "&author=" +
    sUsername +
    "&fields=author,created_utc,body,score,subreddit,url,title,selftext,permalink" +
    "&size=" +
    "3";

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(pushShiftURL)
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
    fetch("/reddit", postObj).then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          setResults(res);
          setError(false);
          history.push("/results");
        });
      } else {
        res.json().then((errorData) => {
          console.log("SERVER ERR: ", errorData.errors);
          setError(true);
        });
      }
    });
  };

  return (
    <Form onSubmit={handleSearch}>
      <h2>Discover emotional content on Reddit.</h2>
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
        {error ? <h4 style={{ color: "red" }}>No Results Found. Please Search Again.</h4> : null}
      </Form.Field>
      <br></br>
      <Button primary type='submit'>
        Search
      </Button>
    </Form>
  );
};

export default Search;
