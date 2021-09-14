import React, { useContext } from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";
import { Context } from "../context/Context";
import EmoDocResults from "./EmoDocResults";
import EmoTargResults from "./EmoTargResults";

const ResultsHeader = ({ sentDoc, emoDoc }) => {
  const { user, results, sUsername, subreddit, searchTerms, searchTarget } = useContext(Context);

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div>
      <Divider horizontal>
          <Header as='h3'>
        <Icon name='search' />Search Info
      </Header>
      </Divider>

      <Table unstackable={true}>
        <Table.Body>
          <Table.Row textAlign='center'>
            <Table.Cell >Searching:</Table.Cell>
            <Table.Cell >{capitalize(searchTarget)}s</Table.Cell>
            <Table.Cell >Reddit User:</Table.Cell>
            <Table.Cell >{sUsername}u/Nasty</Table.Cell>
          </Table.Row>
          <Table.Row textAlign='center'>
            <Table.Cell >Subreddit:</Table.Cell>
            <Table.Cell >{subreddit}conservative</Table.Cell>
            <Table.Cell >Search Term(s):</Table.Cell>
            <Table.Cell >{searchTerms}Trump Palin</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Divider horizontal>
      <Header as='h3'>
          <Icon name = "bar chart" />Results
          </Header> 
      </Divider>

      Sentiment Score: {sentDoc.score} ({sentDoc.label})
      <EmoDocResults results={results} emoDoc={emoDoc}></EmoDocResults>
      <EmoTargResults></EmoTargResults>
    </div>
  );
};

export default ResultsHeader;
