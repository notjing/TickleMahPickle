import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; 
import jarsContext from '../context/JarsContext.js';
import DatabaseUsers from '../context/DatabaseUsers.js';

const Layout = () => {
  const [showCreateJar, setShowCreateJar] = useState(false);
  const [jarName, setJarName] = useState("");
  const [inviteEmails, setInviteEmails] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const [jarsMenuOpen, setJarsMenuOpen] = useState(false);
  const [jarsMenuAnchor, setJarsMenuAnchor] = useState(null);
  const userJars = [
    { name: 'Roommates', id: 1 },
    { name: 'Vacation Fund', id: 2 },
    { name: 'Pickleball Club', id: 3 }
  ];
  const { jars, createJar, refresh } = jarsContext();  

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
          <li style={{ position: 'relative' }}>
            <button
              className="jars-menu-btn"
              style={{
                background: 'none',
                border: 'none',
                color: '#193b02',
                fontSize: '1.15rem',
                fontWeight: 500,
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 8,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
                position: 'relative',
                zIndex: 2
              }}
              onClick={e => {
                setJarsMenuOpen(v => !v);
                setJarsMenuAnchor(e.currentTarget);
              }}
              onBlur={() => setTimeout(() => setJarsMenuOpen(false), 150)}
              aria-haspopup="true"
              aria-expanded={jarsMenuOpen}
            >
              Pickle Jars ▾
            </button>
            {jarsMenuOpen && (
              <div
                className="jars-dropdown-menu"
                style={{
                  position: 'absolute',
                  left: '100%',
                  top: 0,
                  marginLeft: 8,
                  minWidth: 180,
                  background: '#fff',
                  border: '1px solid #9EBC8A',
                  borderRadius: 12,
                  boxShadow: '0 4px 16px 0 rgba(83, 125, 93, 0.10)',
                  padding: '0.5rem 0',
                  zIndex: 10,
                }}
              >
                {userJars.map(jar => (
                  <Link
                    key={jar.id}
                    to="/Jars"
                    style={{
                      display: 'block',
                      padding: '0.7rem 1.2rem',
                      color: '#537D5D',
                      textDecoration: 'none',
                      fontWeight: 600,
                      borderRadius: 8,
                      transition: 'background 0.2s, color 0.2s',
                    }}
                    onClick={() => setJarsMenuOpen(false)}
                  >
                    🥒 {jar.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/Profile">Profile</Link></li>
        </ul>
        {/* Create Jar Button at the bottom */}
        <div style={{
          position: 'absolute',
          bottom: 32,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <button
            className="create-jar-btn"
            onClick={() => setShowCreateJar(true)}
            style={{
              background: '#9EBC8A',
              border: 'none',
              borderRadius: '18px',
              width: 180,
              height: 70,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px 0 rgba(83, 125, 93, 0.18)',
              cursor: 'pointer',
              transition: 'background 0.2s',
              outline: 'none',
              gap: 18,
            }}
          >
            <span style={{ fontSize: 38, color: '#537D5D', fontWeight: 900, lineHeight: 1, marginRight: 8 }}>+</span>
            <span style={{ fontSize: 22, color: '#537D5D', fontWeight: 700, lineHeight: 1}}>Create Jar</span>
          </button>
        </div>
        {/* Create Jar Modal */}
        {showCreateJar && (
          <div className="create-jar-modal-overlay" onClick={() => setShowCreateJar(false)}>
            <div className="create-jar-modal" onClick={e => e.stopPropagation()}>
              <h2 style={{ color: '#537D5D', marginBottom: 16 }}>Create a New Jar</h2>
              <input
                type="text"
                placeholder="Jar Name"
                value={jarName}
                onChange={e => setJarName(e.target.value)}
                style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #9EBC8A', marginBottom: 16, fontSize: 16 }}
              />
              {/* Invite emails UI */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ color: '#537D5D', fontWeight: 600, marginBottom: 6, display: 'block' }}>Invite Members</label>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                  <input
                    type="email"
                    placeholder="Add email address"
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                    style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #9EBC8A', fontSize: 15 }}
                    onKeyDown={e => {
                      if (e.key === 'Enter' && emailInput) {
                        setInviteEmails([...inviteEmails, emailInput]);
                        setEmailInput("");
                      }
                    }}
                  />
                  <button
                    type="button"
                    style={{ background: '#537D5D', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}
                    onClick={() => {
                      if (emailInput) {
                        setInviteEmails([...inviteEmails, emailInput]);
                        setEmailInput("");
                      }
                    }}
                  >Add</button>
                </div>
                {/* Show added emails as chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {inviteEmails.map((email, idx) => (
                    <span key={idx} style={{ background: '#e8e8c8', color: '#537D5D', borderRadius: 16, padding: '6px 14px', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                      {email}
                      <button
                        type="button"
                        style={{ background: 'none', border: 'none', color: '#537D5D', fontWeight: 900, fontSize: 16, marginLeft: 4, cursor: 'pointer', lineHeight: 1 }}
                        onClick={() => setInviteEmails(inviteEmails.filter((e, i) => i !== idx))}
                        aria-label={`Remove ${email}`}
                      >×</button>
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', alignItems: 'center', marginTop: 8 }}>
                <button
                  style={{
                    background: '#537D5D',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 12,
                    padding: '10px 28px',
                    fontWeight: 700,
                    fontSize: 16,
                    cursor: 'pointer',
                    minWidth: 120,
                    boxShadow: '0 2px 8px 0 rgba(83, 125, 93, 0.10)'
                  }}
                  onClick={() => {
                    // Here you would handle jar creation and invited emails

                    //for each email, find the ID and add into jars 

                    createJar(jarName, inviteEmails);
                    // for(let i = 0; i < inviteEmails.length; i++) {
                    // }
                    // jarsContext.

                    setShowCreateJar(false);
                    setJarName("");
                    setInviteEmails([]);
                    setEmailInput("");
                  }}
                >Create</button>
                <button
                  onClick={() => setShowCreateJar(false)}
                  style={{
                    background: 'transparent',
                    color: '#537D5D',
                    border: '1px solid #9EBC8A',
                    borderRadius: 12,
                    padding: '10px 28px',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: 'pointer',
                    minWidth: 100
                  }}
                >Cancel</button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <main className="content" style={{}}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
