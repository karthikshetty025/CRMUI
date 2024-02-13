import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface CustomerInteractionChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const CustomerInteractionChart: React.FC<CustomerInteractionChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: [
              {
                label: 'Customer Interactions',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'month',
                },
                title: {
                  display: true,
                  text: 'Month',
                },
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Interactions',
                },
              },
            },
          },
        });

        return () => {
          myChart.destroy();
        };
      }
    }
  }, [data]);

  return (
    // <Row className="justify-content-center">
    //   <Col xs={12} md={6}>
    //     <Card className="m-0">
    //       <Card.Body className="p-0">
    //         <Card.Title className="text-center">Customer Interaction Chart</Card.Title>
    //         <div style={{ width: '100%', height: 'auto' }}>
    //           <canvas ref={chartRef}></canvas>
    //         </div>
    //       </Card.Body>
    //     </Card>
    //   </Col>
    // </Row>
    <div style={{ width: '100%', height: '300px' }}> {/* Adjust height as needed */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CustomerInteractionChart;
