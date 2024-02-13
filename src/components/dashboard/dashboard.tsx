import React from 'react';
import Layout from '../../layout/Layout';
import Card from 'react-bootstrap/Card';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CallIcon from '@mui/icons-material/Call';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CustomerInteractionChart from './CustomerInteractionChart';
import 'chartjs-adapter-date-fns';
import PieChart from './LeadsSourceChart';
import { Row, Col } from 'react-bootstrap';

interface AccessProps {
  role: string;
}
const Dashboard = ({ role }: AccessProps) => {
  const customerCount = 150;
  const leadsCount = 50;
  const closedleadsCount = 22;
  const callsCount = 99;
  const lossamt = 5000;
  const chartData = {
    labels: ['2023-09-01', '2023-10-01', '2023-11-01','2023-12-01','2024-01-01'], // Sample time labels
    values: [10, 15, 8,24,18], // Sample interaction values
  };
  const socialMediaData: Record<string, number> = {
    Facebook: 30,
    Instagram: 25,
    Twitter: 15,
    LinkedIn: 20,
    Pinterest: 10,
  };


  // Specific data and rendering based on user role
  let specificContent;
  if (role === 'admin') {
    specificContent = (
      <>
        {/* Admin-specific content here */}
        <p>Admin-specific content</p>
      </>
    );
  } else if (role === 'teamMember') {
    specificContent = (
      <>
        {/* Team Member-specific content here */}
        <p>Team Member-specific content</p>
      </>
    );
  } else if (role === 'teamLeader') {
    specificContent = (
      <>
        {/* Team Leader-specific content here */}
        <p>Team Leader-specific content</p>
      </>
    );
  }
  return (
    <Layout>
      <div className="d-flex flex-wrap justify-content-start align-items-start mb-3">
        <Card className="mb-3" style={{ width: '12rem', marginLeft: '1rem' }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center mb-0">
              <span style={{ whiteSpace: 'nowrap' }}>
                Customers
                <PersonOutlineIcon style={{ marginLeft: '0.5rem' }} />
              </span>
            </Card.Title>
            <div className="my-2 w-100 border-bottom"></div>
            <Card.Text className="text-center" style={{ fontSize: '1rem' }}>
              {customerCount}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3" style={{ width: '12rem', marginLeft: '1rem' }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center mb-0">
              <span style={{ whiteSpace: 'nowrap' }}>
                Open Leads
                <TrendingUpOutlinedIcon style={{ marginLeft: '0.5rem' }} />
              </span>
            </Card.Title>
            <div className="my-2 w-100 border-bottom"></div>
            <Card.Text className="text-center" style={{ fontSize: '1rem' }}>
              {leadsCount}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3" style={{ width: '12rem', marginLeft: '1rem' }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center mb-0">
              <span style={{ whiteSpace: 'nowrap' }}>
                Closed Leads
                <TrendingUpOutlinedIcon style={{ marginLeft: '0.5rem' }} />
              </span>
            </Card.Title>
            <div className="my-2 w-100 border-bottom"></div>
            <Card.Text className="text-center" style={{ fontSize: '1rem' }}>
              {closedleadsCount}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3" style={{ width: '12rem', marginLeft: '1rem' }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center mb-0">
              <span style={{ whiteSpace: 'nowrap' }}>
                Calls
                <CallIcon style={{ marginLeft: '0.5rem' }} />
              </span>
            </Card.Title>
            <div className="my-2 w-100 border-bottom"></div>
            <Card.Text className="text-center" style={{ fontSize: '1rem' }}>
              {callsCount}
            </Card.Text>
          </Card.Body>
        </Card>
      
        <Card className="mb-3" style={{ width: '12rem', marginLeft: '1rem' }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center mb-0">
              <span style={{ whiteSpace: 'nowrap' }}>
                Loss
                <CurrencyRupeeIcon style={{ marginLeft: '0.5rem' }} />
              </span>
            </Card.Title>
            <div className="my-2 w-100 border-bottom"></div>
            <Card.Text className="text-center" style={{ fontSize: '1rem' }}>
              {lossamt}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='container mt-3'>
      <Row>
        <Col xs={12} md={6}>
          <div className="card" style={{ width: '100%' }}>
            <div className="card-body">
              <CustomerInteractionChart data={chartData} />
              <p className="card-title" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Customer Interaction Chart
              </p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="card" style={{ width: '100%' }}>
            <div className="card-body">
              <PieChart data={socialMediaData} />
              <p className="card-title" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                Lead Source Chart
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    {specificContent}
    </Layout>
  );
};

export default Dashboard;
