import React, { type ReactNode, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';
import './LineGraph.css';

type LineProps = {
  options: ChartOptions<'line'>;
  data: ChartData<'line'>;
};

function LineGraph(): ReactNode {
  const [stocks, setStocks] = useState<number[]>([]);
  const [daily, setDaily] = useState<string[]>([]);
  const createMockData = () => {
    const stockValues: number[] = [];
    const formattedDates: string[] = [];
    let value = 50;
    for (let i = 0; i < 200; i++) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      const formatDate = date.toLocaleDateString();
      stockValues.push(value);
      formattedDates.push(formatDate);
    }
    setDaily(formattedDates);
    setStocks(stockValues);
  };

  useEffect(() => {
    createMockData();
  }, []);

  const lineData: LineProps = {
    data: {
      labels: daily,
      datasets: [
        {
          type: 'line',
          label: 'online tutorial subjects',
          data: stocks,
          backgroundColor: 'black',
          borderColor: '#5AC53B',
          borderWidth: 2,
          pointBorderColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: 'rgba(0, 0, 0, 0)',
          pointHoverBackgroundColor: '#5AC53B',
          pointHoverBorderColor: '#000000',
          pointHoverBorderWidth: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: 'index',
          intersect: true,
        },
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
        },
      },
    },
  };

  return (
    <div className="linegraph">
      <Line {...lineData} />
    </div>
  );
}

export default LineGraph;
