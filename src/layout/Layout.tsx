import React, { ReactNode } from 'react';
import TopNavbar from '../components/topnav/Topnav';
import Sidenav from '../components/sidenav/Sidenav';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidenav />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopNavbar />
        <div style={{ padding: '20px', flex: 1, overflow: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
