import React, { useContext, useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import { Context } from "../context/Context";
import EmoDocResults from "./EmoDocResults";
import EmoTargResults from "./EmoTargResults";
import ResultsHeader from "./ResultsHeader";
import ResultsCard from "./ResultsCard";
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
  const { user, results } = useContext(Context);
  const { author, body, subreddit } = results.data;
  const items = [
    //dummy data
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
    },
    {
      header: "Project Report - May",
      description: "Bring to the table win-win survival strategies to ensure proactive domination.",
      meta: "ROI: 34%",
    },
    {
      header: "Project Report - June",
      description:
        "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
      meta: "ROI: 27%",
    },
  ];

  //TODO: error handling if no data reutrned
  // debugger;

  const renderCards = results.data.map((result, key) => {
    return <ResultsCard key={key} result={result} />;
  });

  return (
    <div className='results'>
      {!!results ? (
        <div>
          <ResultsHeader />
          {results.data.map((result, key) => {
            return <ResultsCard key={key} result={result} />
          })}
        </div>
      ) : (
        <h3>Results not available. Please try your search again. </h3>
        )}
    </div>
  );
};

export default ResultsContainer;
