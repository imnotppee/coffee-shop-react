import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const data = {
  labels: ['', '', ''],
  datasets: [
    {
      label: 'Votes',
      data: [, , ],
      backgroundColor: ['red', 'blue', 'yellow'],
    },
  ],
};

const options = {
  responsive: true,
};

const SalesOverview = () => {
  return (
    <div>
      <h3>Test Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesOverview;