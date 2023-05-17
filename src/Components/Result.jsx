// src/components/Result.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Result = () => {
  const location = useLocation();

  const data = location.state?.data || {};
  console.log(location);
  console.log(data);
  // Get the crop with the highest average predicted yield
  const highestYieldCrop = Object.keys(data).reduce((a, b) =>
    (data[a][0] + data[a][1]) / 2 > (data[b][0] + data[b][1]) / 2 ? a : b
  );

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'KNR Yield Prediction',
        data: Object.values(data).map((values) => values[0]),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'SVR Yield Prediction',
        data: Object.values(data).map((values) => values[1]),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
  };

  return (
    <div className='width-60'>
      <div class='alert alert-primary' role='alert'>
        <h3>Highest Average Yield: {highestYieldCrop}</h3>
      </div>
      <div className='health-card-wrapper'>
        <h2 className='health-card-heading'>Yield Predictions</h2>
        <div className='soil-test-result'>
          <table>
            <thead>
              <tr>
                <th>Crop</th>
                <th>KNR Predicted Yield</th>
                <th>SVR Predicted Yield</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([crop, yieldPredictions]) => (
                <tr key={crop}>
                  <td>{crop}</td>
                  {yieldPredictions.map((yieldPrediction, index) => (
                    <td key={index}>{yieldPrediction}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Result;
