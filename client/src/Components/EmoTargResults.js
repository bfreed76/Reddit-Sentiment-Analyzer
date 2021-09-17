import React, { useContext, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { Context } from "../context/Context";
import {
  LineChart,
  BarChart,
  Bar,
  Cell,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EmoTargResults = ({ targ }) => {
  const { user, results } = useContext(Context);

  const { sadness, joy, fear, disgust, anger } = targ.emotion;
  
  const data = [
    { name: "S", uv: sadness },
    { name: "J", uv: joy },
    { name: "F", uv: fear },
    { name: "D", uv: disgust },
    { name: "A", uv: anger },
  ];
  
  // useEffect(() => {
  //   debugger;
  // }, []);

  // debugger

  const renderBarChart = (
    <BarChart
      width={250}
      height={100}
      data={data}
      margin={{
        top: 5,
        right: 5,
        left: 15,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray='1 3' />
      <XAxis dataKey='name' fontSize='15' />
      <YAxis />
      <Tooltip />
      <Bar dataKey='uv' fill='#3884d8' />
    </BarChart>
  );

  return (
    <div>
      <p>"Emotional scores for "{targ.text}" </p>
      {renderBarChart}
    </div>
  );
};

export default EmoTargResults;
