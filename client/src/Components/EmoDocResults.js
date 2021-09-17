import React, { useContext } from "react";
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

const EmoDocResults = ({ emoDoc }) => {
  const { user, results } = useContext(Context);

  const {sadness, joy, fear, disgust, anger} = emoDoc.emotion
  

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
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 5,
        left: 15,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Bar dataKey='uv' fill='#8884d8' />
    </BarChart>
  );

  return <div>
      <p>Overall Emotional Scores </p>
      {renderBarChart}
      </div>;
};

export default EmoDocResults;
