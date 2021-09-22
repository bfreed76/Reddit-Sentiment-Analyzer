import React, { useContext } from "react";
import { Divider, Header, Icon, Table } from "semantic-ui-react";
import { Context } from "../context/Context";
import EmoDocResults from "./EmoDocResults";
import EmoTargResults from "./EmoTargResults";

const ResultsHeader = () => {
  const { results, sUsername, subreddit, searchTerms } = useContext(Context);

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
          <Table.Row textAlign='left' style={{ fontWeight: "bold" }}>
            <Table.Cell className='cellLabel'>Reddit User:</Table.Cell>
            <Table.Cell>{sUsername ? sUsername : "---"}</Table.Cell>
            <Table.Cell className='cellLabel'>Subreddit:</Table.Cell>
            <Table.Cell>{subreddit ? subreddit : "---"}</Table.Cell>
            <Table.Cell className='cellLabel'>Topic:</Table.Cell>
            <Table.Cell>{searchTerms ? searchTerms : "---"}</Table.Cell>
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
            ? results.emotionTarget.map((targ, id) => {
                return <EmoTargResults key={id} targ={targ}></EmoTargResults>;
              })
            : null}
      </div>
    </div>
  );
};

export default ResultsHeader;
