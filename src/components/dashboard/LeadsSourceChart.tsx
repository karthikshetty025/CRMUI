import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface PieChartProps {
  data: Record<string, number>;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartOptions = {
    labels: Object.keys(data),
    colors: [
      '#FF6358',
      '#FFC200',
      '#7C4DFF',
      '#4D7CFF',
      '#50D2E3',
    ],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  };

  const chartSeries = Object.values(data);

  return (
    <ReactApexChart
      type="pie"
      options={chartOptions}
      series={chartSeries}
      height={300}
    />
  );
};

export default PieChart;
