import React, { useContext, useState } from "react";
import { Divider, Header, Icon, Table, Card } from "semantic-ui-react";
import { Context } from "../context/Context";
import EmoDocResults from "./EmoDocResults";
import EmoTargResults from "./EmoTargResults";

const ResultsHeader = () => {
  const { user, results, sUsername, subreddit, searchTerms, searchTarget } = useContext(Context);

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div>
      <Divider horizontal>
        <Header as='h3'>
          <Icon name='search' />
          Search Info
        </Header>
      </Divider>

      <Table unstackable={true}>
        <Table.Body>
          <Table.Row textAlign='center'>
            <Table.Cell>Searching:</Table.Cell>
            <Table.Cell>{capitalize(searchTarget)}s</Table.Cell>
            <Table.Cell>Reddit User:</Table.Cell>
            <Table.Cell>{sUsername}</Table.Cell>
          </Table.Row>
          <Table.Row textAlign='center'>
            <Table.Cell>Subreddit:</Table.Cell>
            <Table.Cell>{subreddit}</Table.Cell>
            <Table.Cell>Topic:</Table.Cell>
            <Table.Cell>{searchTerms}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Divider horizontal>
        <Header as='h3'>
          <Icon name='bar chart' />
          Results
        </Header>
      </Divider>

      <h3>
        Overall Sentiment Score: {results.sentimentDocument.score} (
        {results.sentimentDocument.label})
      </h3>

      <div className='emoDocResults'>
        <EmoDocResults emoDoc={results.emotionDocument}></EmoDocResults>

      {!!results.emotionTarget
        ? results.emotionTarget.map((targ) => {
            return <EmoTargResults targ={targ}></EmoTargResults>;
          })
        : null}
      </div>

    </div>
  );
};

export default ResultsHeader;
