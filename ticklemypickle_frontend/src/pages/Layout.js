
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
  return (
    
    <div className="layout">
      <nav className="sidebar">
        <ul>
          <li class="title"><Link to="/dashboard">TMP Dashboard</Link></li>
          <li><Link to="/Jars">Pickle Jars</Link></li>
          <li><Link to="/Profile">Profile</Link></li>


        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
