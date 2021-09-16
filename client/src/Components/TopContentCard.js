import React from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";
import EmoDocResults from "./EmoDocResults";
import EmoTargResults from "./EmoTargResults";

const topContentCard = ({ item }) => {
  // const { score, label } = item.search_results[0].sent_doc_json[0]
  // const label = item.search_results[0].sent_doc_json[0].label
  // const score = item.search_results[0].sent_doc_json[0].score
  // const emoTarg = item.search_results[0].emo_search_json
  // const emoDoc = item.search_results[0].emo_doc_json[0]
  // debugger

  const emoDoc = Array.from(item.emo_doc_json);
  const emoTarg = item.emo_search_json;

  return (
    <div>
      <Divider horizontal>
        <Header as='h3'>
          <Icon name='search' />
          Search Info
        </Header>
      </Divider>

      {/* <Table unstackable={true}>
          <Table.Body>
            <Table.Row textAlign='center'>
              <Table.Cell>Username:</Table.Cell>
              <Table.Cell>{item.user.username}s</Table.Cell>
              <Table.Cell>Reddit User:</Table.Cell>
              <Table.Cell>{item.author.name}u/Nasty</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>Subreddit:</Table.Cell>
              <Table.Cell>{item.subreddit.name}</Table.Cell>
              <Table.Cell>Search Term(s):</Table.Cell>
              <Table.Cell>{item.search_term.search_term}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table> */}

      <Divider horizontal>
        <Header as='h3'>
          <Icon name='bar chart' />
          Results
        </Header>
      </Divider>
      <br></br>
      <br></br>

      <p>
        Overall Sentiment Score: {"score"} ({"label"})
      </p>
      <div className='emoDocResults'>
      {emoDoc.map((doc) => {
            return <EmoDocResults doc={doc}></EmoDocResults>;})}

        {emoTarg.map((targ) => {
          return <EmoTargResults targ={targ}></EmoTargResults>;
        })}
      </div>
    </div>
  );
};

export default topContentCard;
