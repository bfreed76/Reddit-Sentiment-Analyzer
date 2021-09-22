import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const EmoDocResults = ({ emoDoc }) => {
  const { sadness, joy, fear, disgust, anger } = emoDoc.emotion;

  const data = [
    { name: "Sadness", Score: sadness },
    { name: "Joy", Score: joy },
    { name: "Fear", Score: fear },
    { name: "Disgust", Score: disgust },
    { name: "Anger", Score: anger },
  ];

  const renderBarChart = (
    <BarChart
      width={325}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 5,
        left: 0,
        bottom: 5,
      }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis type='number' domain={[0, 1]} />
      <Tooltip />
      <Bar dataKey='Score' fill='#8884d8' />
    </BarChart>
  );

  return (
    <div>
      <p>Emotional score overall </p>
      {renderBarChart}
    </div>
  );
};

export default EmoDocResults;
