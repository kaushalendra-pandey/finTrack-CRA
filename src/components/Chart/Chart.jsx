import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import ChartHeading from '../ChartHeading/ChartHeading';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };

export const data = {
  labels,
  datasets: [
    {
      label: 'Expenses',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'black',
    }
    ]
};

const Chart = () => {
    return (
        <>
            <ChartHeading/>
            <Bar options={options} data={data} />
        </>
    )
}

export default Chart
