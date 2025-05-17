import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <ul>
          <li style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Link to="/dashboard">
              <img className='nav-img' src="./logo.png" alt="TickleMahPickle Logo" style={{ width: '90px', height: '90px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(83,125,93,0.15)', objectFit: 'contain' }} />
            </Link>
          </li>
          <li className="title"><Link to="/dashboard">TMP Dashboard</Link></li>
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
