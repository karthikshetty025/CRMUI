import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import moment from 'moment';
import 'moment-timezone';
import 'bootstrap/dist/css/bootstrap.min.css';
import FCBLLogo from "../../assets/images/fcbl_logo.png";
import { useNavigate } from 'react-router-dom';

function Clock() {
  const [currentTime, setCurrentTime] = useState(moment().format('hh:mm:ss A'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('hh:mm:ss A'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span style={{ color: 'black' }}>{currentTime}</span>;
}

function TopNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
       

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link>
              <Clock />
            </Nav.Link>
            <Nav.Link>
              <AccountCircleIcon style={{ color: 'black' }} />
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/login')}>
  <ExitToAppIcon style={{ color: 'black' }} />
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   

  );
}

export default TopNavbar;
