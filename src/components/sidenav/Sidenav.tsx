import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FCBLLogo from "../../assets/images/fcbl_logo.png";

function Sidenav() {
  const linkStyles = {
    color: 'black', 
    textDecoration: 'none',
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar>
      <img src={FCBLLogo} alt="logo" style={{ width: '100%', height: 'auto' }} />
        <Menu>
          <Link to="/dashboard" style={linkStyles}>
            <MenuItem icon={<DashboardIcon className="text-xl" />}>
              Dashboard
            </MenuItem>
          </Link>
          <Link to="/leads" style={linkStyles}>
            <MenuItem icon={<TrendingUpOutlinedIcon className="text-xl" />}>
              Leads
            </MenuItem>
          </Link>
          <Link to="/customers" style={linkStyles}>
            <MenuItem icon={<PersonOutlineIcon className="text-xl" />}>
              Customers
            </MenuItem>
          </Link>
          <Link to="/team" style={linkStyles}>
            <MenuItem icon={<GroupOutlinedIcon className="text-xl" />}>
              Team
            </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sidenav;
