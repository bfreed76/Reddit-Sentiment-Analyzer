import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const EmoDocResults = ({ emoDoc }) => {
  const { sadness, joy, fear, disgust, anger } = emoDoc.emotion;

  const data = [
    { name: "Sadness", uv: sadness },
    { name: "Joy", uv: joy },
    { name: "Fear", uv: fear },
    { name: "Disgust", uv: disgust },
    { name: "Anger", uv: anger },
  ];

  const renderBarChart = (
    <BarChart width={340} height={250} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Bar dataKey='uv' fill='#8884d8' />
    </BarChart>
  );

  return (
    <div>
      <p>Overall Emotional Score </p>
      {renderBarChart}
    </div>
  );
};

export default EmoDocResults;
