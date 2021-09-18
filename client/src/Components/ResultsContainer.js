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

  const renderCards = results.data.map((result, key) => {
    return <ResultsCard key={key} result={result} />;
  });

  return (
    <div className='results'>
      {(!!results) ? (
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
