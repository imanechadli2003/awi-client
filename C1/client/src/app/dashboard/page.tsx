"use client";

import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

// Define the color palette
const colors = {
  sales: '#11b78e',
  expenses: '#b95658',
  profit: '#f97316',
  marketShare: '#4ade80',
  satisfaction: '#fc4669',
  growth: '#11b78e', // Reusing this color for growth to keep consistency
};

const Dashboard = () => {
  // Sample data for each chart
  const salesAndExpensesData = [
    { name: 'Product A', sales: 20, expenses: 15 },
    { name: 'Product B', sales: 34, expenses: 25 },
    { name: 'Product C', sales: 23, expenses: 13 },
    { name: 'Product D', sales: 15, expenses: 10 },
  ];

  const profitData = [
    { name: 'Product A', profit: 5 },
    { name: 'Product B', profit: 10 },
    { name: 'Product C', profit: 15 },
    { name: 'Product D', profit: 20 },
  ];

  const marketShareData = [
    { name: 'Product A', value: 20 },
    { name: 'Product B', value: 30 },
    { name: 'Product C', value: 25 },
    { name: 'Product D', value: 25 },
  ];

  const satisfactionData = [
    { name: 'Product A', satisfaction: 4.5 },
    { name: 'Product B', satisfaction: 3.8 },
    { name: 'Product C', satisfaction: 4.2 },
    { name: 'Product D', satisfaction: 4.0 },
  ];

  const salesGrowthData = [
    { quarter: 'Q1', growth: 10 },
    { quarter: 'Q2', growth: 20 },
    { quarter: 'Q3', growth: 15 },
    { quarter: 'Q4', growth: 30 },
  ];

  return (
    <div className="dashboard" style={{ width: '80%', margin: '0 auto' }}>
      {/* Sales and Expenses Bar Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={salesAndExpensesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill={colors.sales} name="Sales" />
          <Bar dataKey="expenses" fill={colors.expenses} name="Expenses" />
        </BarChart>
      </ResponsiveContainer>

      {/* Profit Line Chart */}
      <ResponsiveContainer width="48%" height={400} style={{ display: 'inline-block', marginRight: '2%' }}>
        <LineChart data={profitData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="profit" stroke={colors.profit} name="Profit" />
        </LineChart>
      </ResponsiveContainer>

      {/* Market Share Pie Chart */}
      <ResponsiveContainer width="48%" height={400} style={{ display: 'inline-block' }}>
        <PieChart>
          <Pie data={marketShareData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120}>
            {marketShareData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={
                [colors.marketShare, colors.satisfaction, colors.expenses, colors.sales][index % 4]
              } />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* Customer Satisfaction Bar Chart */}
      <ResponsiveContainer width="48%" height={400} style={{ display: 'inline-block', marginRight: '2%' }}>
        <BarChart data={satisfactionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="satisfaction" fill={colors.satisfaction} name="Customer Satisfaction" />
        </BarChart>
      </ResponsiveContainer>

      {/* Sales Growth Over Quarters Bar Chart */}
      <ResponsiveContainer width="48%" height={400} style={{ display: 'inline-block' }}>
        <BarChart data={salesGrowthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="growth" fill={colors.growth} name="Sales Growth" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
