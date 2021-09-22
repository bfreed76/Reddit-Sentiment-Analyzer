import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const EmoTargResults = ({ targ }) => {
  const { sadness, joy, fear, disgust, anger } = targ.emotion;

  const data = [
    { name: "Sadness", uv: sadness },
    { name: "Joy", uv: joy },
    { name: "Fear", uv: fear },
    { name: "Disgust", uv: disgust },
    { name: "Anger", uv: anger },
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
      <CartesianGrid strokeDasharray='1 3' />
      <XAxis dataKey='name' fontSize='15' />
      <YAxis type='number' domain={[0, 1]} />
      <Tooltip />
      <Bar dataKey='uv' fill='#3884d8' />
    </BarChart>
  );

  return (
    <div className='rechats-wrapper'>
      <p>
        Emotional score for <strong>{targ.text}</strong>
      </p>
      {renderBarChart}
    </div>
  );
};

export default EmoTargResults;
