import React from "react";

import {
  BarChart,
  CartesianAxis,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer
} from "recharts";

function CustomShape(props) {
  const {x,y,width, height} = props;
  return <path d="" />
}

export function UsageChart() {
  const data = [
    {
      name: 12,
      value: 5
    },
    {
      name: 14,
      value: 3
    },
    {
      name: 20,
      value: 1
    },
    {
      name: 24,
      value: 8
    }
  ];
  return (
    <ResponsiveContainer width={"100%"} height={200}>
      <BarChart data={data} barCategoryGap={4} barGap={4}>
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
        <YAxis dataKey="value" orientation="right" width={20} axisLine={false} tickLine={false} tick={{fontSize: 12}} />
        <Bar dataKey="value" fill="rgb(111,131,209)" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}
