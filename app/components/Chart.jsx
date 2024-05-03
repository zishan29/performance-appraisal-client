import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const HorizontalBarChart = ({ labels, data }) => {
  const chartRef = useRef(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    let chartInstance = null;
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              axis: 'y',
              label: 'Scores',
              data: data,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: {
              labels: {
                color: darkMode ? 'white' : 'black',
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                color: darkMode ? 'white' : 'black',
                font: darkMode ? 'white' : 'black',
              },
              grid: {
                color: darkMode
                  ? 'rgba(255, 255, 255, 0.2)'
                  : 'rgba(0, 0, 0, 0.1)',
              },
            },
            y: {
              ticks: {
                color: darkMode ? 'white' : 'black',
                font: darkMode ? 'white' : 'black',
              },
              grid: {
                color: darkMode
                  ? 'rgba(255, 255, 255, 0.2)'
                  : 'rgba(0, 0, 0, 0.1)',
              },
            },
          },
        },
      });
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartRef, labels, data, darkMode]);

  return <canvas ref={chartRef} />;
};

export default HorizontalBarChart;
