import React from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";
import EmoDocResults from "./EmoDocResults";
import EmoTargResults from "./EmoTargResults";

const TopContentCard = ({ item }) => {
  const emoDoc = item.search_results[0].emo_doc_json;
  const emoTarg = item.search_results[0].emo_search_json;
  const sentDoc = item.search_results[0].sent_doc_json;

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
            <Table.Cell>Username:</Table.Cell>
            <Table.Cell>
              <strong>{item.user.username}s</strong>
            </Table.Cell>
            <Table.Cell>Reddit User:</Table.Cell>
            <Table.Cell>
              <strong>{item.author.name}</strong>
            </Table.Cell>
          </Table.Row>
          <Table.Row textAlign='center'>
            <Table.Cell>Subreddit:</Table.Cell>
            <Table.Cell>
              <strong>{item.subreddit.name}</strong>
            </Table.Cell>
            <Table.Cell>Topic:</Table.Cell>
            <Table.Cell>
              <strong>{item.search_term.search_term}</strong>
            </Table.Cell>
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
        Overall Sentiment Score: {sentDoc.score} ({sentDoc.label})
      </h3>
      <div className='emoDocResults'>
        <EmoDocResults emoDoc={emoDoc}></EmoDocResults>
        {emoTarg.map((targ, id) => {
          return <EmoTargResults key={id} targ={targ} />;
        })}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default TopContentCard;
