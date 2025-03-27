import { Bar } from 'react-chartjs-2';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SalesOverview = () => {
  const data = {
    labels: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
    datasets: [
      {
        label: '2023',
        data: [350, 390, 310, 360, 200, 330, 370, 390],
        backgroundColor: '#4A90E2',
      },
      {
        label: '2022',
        data: [280, 250, 270, 210, 150, 280, 290, 260],
        backgroundColor: '#ADD8E6',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold">Sales Overview</h2>
        <select className="border p-1 rounded text-sm">
          <option>June 2023</option>
        </select>
      </div>
      <Bar data={data} height={200} />
    </div>
  );
};

export default SalesOverview;