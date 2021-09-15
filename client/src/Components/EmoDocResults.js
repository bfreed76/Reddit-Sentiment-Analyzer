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

const EmoDocResults = ({ props, emoDoc }) => {
  const { user, results } = useContext(Context);

  const data = [
    { name: "Sadness", uv: emoDoc.sadness },
    { name: "Joy", uv: emoDoc.joy },
    { name: "Fear", uv: emoDoc.fear },
    { name: "Disgust", uv: emoDoc.disgust },
    { name: "Anger", uv: emoDoc.anger },
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
