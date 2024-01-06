import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: 'Jan', amt: 3000 },
    { name: 'Feb', amt: 8000 },
    { name: 'Mar', amt: 10000 },
    { name: 'Apr', amt: 5780 },
    { name: 'May', amt: 47600 },
    { name: 'Jun', amt: 30000 },
    { name: 'Jul', amt: 3000 },
    { name: 'Aug', amt: 8000 },
    { name: 'Sep', amt: 10000 },
    { name: 'Oct', amt: 5780 },
    { name: 'Nov', amt: 47600 },
    { name: 'Dec', amt: 30000 },
];

const RenderLineChart = () => (
    <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 5 }}>
        <Line type="monotone" dataKey="amt" stroke="#00630fcc" strokeWidth={3}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
);

export default RenderLineChart;
