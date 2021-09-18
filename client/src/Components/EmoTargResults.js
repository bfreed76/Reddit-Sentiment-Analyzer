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
    { name: "Sadness", uv: sadness},
    { name: "Joy", uv: joy },
    { name: "Fear", uv: fear },
    { name: "Disgust", uv: disgust },
    { name: "Anger", uv: anger },
  ];

  const renderBarChart = (
    <BarChart
      width={340}
      height={150}
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
      <p>"Emotional score for <strong>"{targ.text}"</strong></p>
      {renderBarChart}
    </div>
  );
};

export default EmoTargResults;
