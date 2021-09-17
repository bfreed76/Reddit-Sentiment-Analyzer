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

  return (
    <div className='results'>

      {!!results ? <ResultsHeader/> : <h3>Results not available. Please try your search again. </h3>}

      {/* <ResultsHeader /> */}
      {/* <Card.Group 
      items={items} itemsPerRow={1} 
      /> */}
    </div>
  );
};

export default ResultsContainer;
