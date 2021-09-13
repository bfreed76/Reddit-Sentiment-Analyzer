import React from "react";
import { List } from "semantic-ui-react";
import { Context } from "../context/Context";
import EmoDocResults from "./EmoDocResults";
import EmoTargResults from "./EmoTargResults";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ResultsContainer = () => {
  const { user, results } = React.useContext(Context);

  const sentDoc = {
    // = results.sentimentDocument[0]
    score: -0.763437,
    label: "negative",
  };

  const emoDoc = {
    emotion: {
      sadness: 0.522918,
      joy: 0.208687,
      fear: 0.007476,
      disgust: 0.099433,
      anger: 0.318133,
    },
  };

  const emoTarg = [
    {
      text: "trump",
      emotion: {
        sadness: 0.522918,
        joy: 0.208687,
        fear: 0.007476,
        disgust: 0.099433,
        anger: 0.318133,
      },
    },
    {
      text: "biden",
      emotion: {
        sadness: 0.526561,
        joy: 0.143993,
        fear: 0.034155,
        disgust: 0.178588,
        anger: 0.241992,
      },
    },
  ];

  const lData = [
    {
      author: "_myusername__",
      body: "The reason the issue feels out of hand despite a different president is because of Trump. A fire is easiest to snuff out when it first appears. The larger the fire gets, the more difficult it is to put out because at some point, the time you spend putting it out",
      created_utc: 1631565370,
      score: 1,
      subreddit: "politics",
    },
    {
      author: "ThePhildozer89",
      body: "I feel like this door swings both ways though? Regardless of which party won both when Biden and Trump were elected therI feel like this door swings both ways though? Regardless of which party won both when Biden and Trump were elected ther",
      created_utc: 1631565370,
      score: 1,
      subreddit: "politics",
    },
    {
      author: "Marcus_McTavish",
      body: "How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS? How many peopled decided Trump over Biden bc of BDS?",
      created_utc: 1631565370,
      score: 1,
      subreddit: "politics",
    },
  ];

  const data = [
    {
      name: "Block A",
      l1: 4000,
      l2: 2400,
      amt: 2400,
    },
    {
      name: "Block B",
      l1: 3000,
      l2: 1398,
      amt: 2210,
    },
    {
      name: "Block C",
      l1: 2000,
      l2: 9800,
      amt: 2290,
    },
    {
      name: "Block D",
      l1: 2780,
      l2: 3908,
      amt: 2000,
    },
  ];

  const renderResults = () => {
    return (
      <>
        {/* <List.Item> {user.email} </List.Item>
          <List.Item> {results.user} </List.Item>
          <List.Item> {results.author} </List.Item>
          <List.Item> {results.subreddit} </List.Item> */}
        {/* <List.Item> {results.sentimentDocument[0].score} </List.Item> */}
        {/* <List.Item> {results.sentimentDocument[0].label} </List.Item> */}
      </>
    );
  };

  return (
    <div>
      {/* {!!results ? renderResults() : <h3>"Results not availalbe" </h3>} */}
      <List bulleted>
        <List.Item> {sentDoc.label} </List.Item>
        <List.Item> {sentDoc.score} </List.Item>
        <List.Item> {emoDoc.emotion.anger} </List.Item>
        {/* <List.Item> { results.emotionDocument[0].} </List.Item> */}
        {/* <List.Item> { results.emotionDocument[0].} </List.Item> */}
        {/* <List.Item> { results.emotionTarget} </List.Item> */}
      </List>
        <EmoDocResults data={data} emoDoc={emoDoc.emotion}></EmoDocResults>
        <EmoTargResults></EmoTargResults>
    </div>
  );
};



export default ResultsContainer;
