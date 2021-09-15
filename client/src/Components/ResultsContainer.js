import React, { useContext } from "react";
import { List } from "semantic-ui-react";
import { Context } from "../context/Context";
import EmoDocResults from "./EmoDocResults";
import EmoTargResults from "./EmoTargResults";
import ResultsHeader from "./ResultsHeader";
import { Container, Card, Feed } from "semantic-ui-react";
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

  const items = [
    {
      header: "_myusername__",
      description:
        "The reason the issue feels out of hand despite a different president is because of Trump. A fire is easiest to snuff out when it first appears. The larger the fire gets, the more difficult it is to put out because at some point, the time you spend putting it out",
      created_utc: 1631565370,
      score: 1,
      meta: "politics",
    },
    {
      header: "ThePhildozer89",
      description:
        "I feel like this door swings both ways though? Regardless of which party won both when Biden and Trump were elected therI feel like this door swings both ways though? Regardless of which party won both when Biden and Trump were elected ther",
      created_utc: 1631565370,
      score: 1,
      meta: "politics",
    },
    {
      header: "Marcus_McTavish",
      description:
        "How many peopled decided Ty peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS?How many peopled decided Trump over Biden bc of BDS? How many peopled decided Trump over Biden bc of BDS?",
      created_utc: 1631565370,
      score: 1,
      meta: "politics",
    },
    {
        header: "ThePhildozer89",
        description:
          "I feel like this door swsdfasdasdfasdfhich party won both when Biden and Trump were elected therI feel like this door swings both ways though? Regardless of which party won both when Biden and Trump were elected ther",
        created_utc: 1631565370,
        score: 1,
        meta: "politics",
      },
  ];

  return (
    <div className='results'>
      {/* {!!results ? renderResults() : <h3>"Results not availalbe" </h3>} */}

      <ResultsHeader sentDoc={sentDoc} emoDoc={emoDoc.emotion} emoTarg={emoTarg} />
      <Card.Group items={items} itemsPerRow={1} />
    </div>
  );
};

export default ResultsContainer;
