import React from "react";
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
  const { user, results } = React.useContext(Context);
  const data = [
    { name: "sadness", uv: emoDoc.sadness },
    { name: "joy", uv: emoDoc.joy },
    { name: "fear", uv: emoDoc.fear },
    { name: "disgust", uv: emoDoc.disgust },
    { name: "anger", uv: emoDoc.anger },
  ];

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text x={x + width / 4} y={y} fill='#666' textAnchor='middle' dy={-6}>{`${value}`}</text>
    );
  };

  const renderBarChart = (
      <ResponsiveContainer width="95"> 

    <BarChart
      width={340}
      height={250}
      data={data}
      margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Bar dataKey='uv' fill='#8884d8' />
    </BarChart>
          </ResponsiveContainer>
  );

  return (
    <div className="emoDocResults">
          {renderBarChart}
    </div>
  );
};

export default EmoDocResults;
