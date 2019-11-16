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
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis dataKey="value" />
        <Bar dataKey="value" fill="#8884d8" height={20} />
      </BarChart>
    </ResponsiveContainer>
  );
}
