import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; 

const Layout = () => {
  return (
    <div className="layout">
      <nav className="sidebar">
        <ul>
          <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
            <Link to="/dashboard" style={{ display: 'inline-block', padding: 0, borderRadius: 0, background: 'none' }}>
              <img className='logo-img' src="/logo.png" alt="TickleMahPickle Logo" />
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
