import React from "react";
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const data = [
  { name: "Jan", retailSales: 2200, wholesaleSales: 3400 },
  { name: "Feb", retailSales: 1280, wholesaleSales: 2398 },
  { name: "Mar", retailSales: 5000, wholesaleSales: 4300 },
  { name: "April", retailSales: 4780, wholesaleSales: 2908 },
  { name: "May", retailSales: 5890, wholesaleSales: 4800 },
  { name: "June", retailSales: 4390, wholesaleSales: 3800 },
  { name: "July", retailSales: 4490, wholesaleSales: 4300 },
  { name: "Aug", retailSales: 4490, wholesaleSales: 4300 },
  { name: "Sep", retailSales: 4490, wholesaleSales: 4300 },
  { name: "Oct", retailSales: 4490, wholesaleSales: 4300 },
  { name: "Nov", retailSales: 4490, wholesaleSales: 4300 },
  { name: "Dec", retailSales: 4490, wholesaleSales: 4300 },
];

const Chart = () => (
  <ResponsiveContainer width="99%" height={320}>
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="retailSales" stroke="#82ca9d" />
      <Line
        type="monotone"
        dataKey="wholesaleSales"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
