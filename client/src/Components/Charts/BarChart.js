import React, { useEffect } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export default function BarChart(props) {

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenues and night bookings',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const labels = []

  props.data.map(item => {
    labels.push(item.stay_date)
  })

  const roomNightsData = []

  props.data.map(item => {
    roomNightsData.push(item.room_nights)
  })

  const roomRevenues = []

  props.data.map(item => {
    roomRevenues.push(item.room_revenues)
  })
  
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Number of booked nights',
        data: roomNightsData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Revenues per day',
        data: roomRevenues,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  }

  return (
    <div className='chart-container'>
      <Bar options={options} data={data} />
    </div>
  )
}

