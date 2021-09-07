import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";

const Search = () => {
  const [sUsername, setSUsername] = useState("");
  const [subreddit, setSubreddit] = useState("");
  const [searchTerms, setSearchTerms] = useState(true);
  const [searchTarget, setSearchTarget] = useState("submission");
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
    "&size=100";

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(sUsername, subreddit, searchTerms, searchTarget);
    console.log(pushShiftURL);
  };

  const handleCheck = (e) => {
    setSearchTarget(e.target.value);
  };

  return (
    <Form onSubmit={handleSearch}>
      <h2>Search Reddit to discover emotional stuff</h2>
      <Form.Field>
        <Checkbox
          label="Comments"
          radio
          id="comment"
          value="comment"
          checked={searchTarget === "comment"}
          onChange={handleCheck}
        />
        <Checkbox
          label="Submissions"
          radio
          id="submission"
          value="submission"
          checked={searchTarget == "submission"}
          onChange={handleCheck}
        />
      </Form.Field>
      <Form.Field>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="u/ username"
          onChange={(e) => setSUsername(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="r/ subreddit"
          onChange={(e) => setSubreddit(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="search terms"
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </Form.Field>
      <br></br>
      <Button primary type="submit">
        Go
      </Button>
    </Form>
  );
};

export default Search;
