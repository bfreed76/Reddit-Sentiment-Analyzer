import React from "react";
import { Container } from "semantic-ui-react";
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EmoDocResults = ({ emoDoc }) => {
  return (
    <div>
      <div style={{ width: "100%", height: "300px", backgroundColor: "black" }}>
        <Container>
          <BarChart
            width={500}
            height={300}
            data={emoDoc}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <Bar dataKey='uv' barSize={30} fill='#8884d8' label={"label"} />
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='l2' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='l1' stroke='#82ca9d' />
          </BarChart>
        </Container>
      </div>
    </div>
  );
};

export default EmoDocResults;
