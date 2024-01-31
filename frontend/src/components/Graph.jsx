import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const RenderLineChart = ({data}) => (
    <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 5 }}>
        <Line type="monotone" dataKey="amt" stroke="#00630fcc" strokeWidth={3}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
);

export default RenderLineChart;
