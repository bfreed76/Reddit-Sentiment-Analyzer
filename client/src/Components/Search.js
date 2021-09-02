import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";

const Search = () => {
  const [sUsername, setSUsername] = useState("");
  const [subreddit, setSubreddit] = useState("");
  const [searchTerms, setSearchTerms] = useState(true);

const handleSearch = (e) => {
    e.preventDefault()
    console.log(sUsername, subreddit, searchTerms)
}

  return (
    <Form onSubmit={handleSearch}>
      <h2>Search Reddit to discover emotional stuff</h2>
      <Form.Field>
        <>Show: </> <Checkbox label="Comments" checked="true" /> <Checkbox label="Posts" />
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
