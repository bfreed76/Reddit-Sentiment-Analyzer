import React from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";
import EmoDocResults from "./EmoDocResults";

const topContentCard = ({ item }) => {

    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
      };
      
      // debugger

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
              <Table.Cell>{item.user}s</Table.Cell>
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
        </Table>

        <Divider horizontal>
          <Header as='h3'>
            <Icon name='bar chart' />
            Results
          </Header>
        </Divider>

        <p>
          Overall Sentiment Score: {"sentDoc.score"} ({"sentDoc.label"})
        </p>
        <div className='emoDocResults'>
          <EmoDocResults></EmoDocResults>
          {/* {emoTarg.map((targ) => {
            return <EmoTargResults targ={targ}></EmoTargResults>;
          })} */}
        </div>
      </div>
  );
};

export default topContentCard;
