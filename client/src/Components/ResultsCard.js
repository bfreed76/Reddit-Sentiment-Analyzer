import { Container, Card, Feed } from "semantic-ui-react";
import React, { useContext, useEffect, useState } from "react";
import { List, Icon } from "semantic-ui-react";
import { Context } from "../context/Context";

const ResultsCard = ({ result }) => {
  const { results } = useContext(Context);
  const link = `http://www.reddit.com` + result.permalink;
  //   debugger
  return (
    <Card.Group itemsPerRow={1}>
      <Card centered href={link} target="_blank">
        <Card.Content header={"Author:  " + result.author} />
        <Card.Content textAlign='left' description={result.body} />
        <Card.Content extra>Subreddit: {result.subreddit}</Card.Content>
      </Card>
      <br></br>
    </Card.Group>
  );
};

export default ResultsCard;
