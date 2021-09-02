import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";

const Search = () => {
  const [sUsername, setSUsername] = useState("");
  const [subreddit, setSubreddit] = useState("");
  const [searchTerms, setsearchTerms] = useState(true);

  return (
    <Form>
      <h2>Search Reddit to discover emotional stuff</h2>
      <Form.Field>
        <>Show: </> <Checkbox label="Comments" /> <Checkbox label="Posts" />
      </Form.Field>
      <Form.Field>
        <Input icon="search" iconPosition="left" placeholder="u/ username" />
      </Form.Field>
      <Form.Field>
        <Input icon="search" iconPosition="left" placeholder="r/ subreddit" />
      </Form.Field>
      <Form.Field>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="search terms"
        />
      </Form.Field>
      <Button primary type="submit">
        Go
      </Button>
    </Form>
  );
};

export default Search;
