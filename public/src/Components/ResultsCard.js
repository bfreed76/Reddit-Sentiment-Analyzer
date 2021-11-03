import { Card } from "semantic-ui-react";
import React from "react";

const ResultsCard = ({ result }) => {
  const link = `http://www.reddit.com` + result.permalink;

  // Renders and links to Reddit comments found by pushshift api

  return (
    <Card.Group itemsPerRow={1}>
      <Card centered href={link} target='_blank'>
        <Card.Content textAlign='left' header={result.author + " says..."} />
        <Card.Content textAlign='left' description={result.body} />
        <Card.Content extra>Subreddit: {result.subreddit}</Card.Content>
      </Card>
      <br></br>
    </Card.Group>
  );
};

export default ResultsCard;
