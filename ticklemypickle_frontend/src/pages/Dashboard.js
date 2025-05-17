import React from 'react'
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import './styles.css'

function Dashboard() {

    //database logic.
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/users") 
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error(err));
    }, []);

  return (
    <div className="dashboard" style={{ minHeight: '100vh', padding: '0 2.5rem', background: 'none' }}>
      {/* Personalized greeting */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '2.5rem',
        marginBottom: '0.5rem',
        paddingLeft: '0.25rem',
      }}>
        <h1 style={{
          fontWeight: 900,
          color: '#193b02',
          fontSize: '2.5rem',
          margin: 0,
          letterSpacing: '0.01em',
          textShadow: '0 2px 12px rgba(83,125,93,0.10)'
        }}>
          Welcome back, Kaibo! <span role="img" aria-label="pickle">🥒</span>
        </h1>
      </div>
      {/* return all the people in the database */}
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
      {/* Top row: 3 summary cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: '-9.5vh',
        marginBottom: '0.25rem', // further reduced from 1rem
        width: '100%'
      }}>
        {/* Total Money Owed Card */}
        <div style={{ flex: 1, minWidth: '180px', maxWidth: '400px' }}>
          <Card sx={{
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(83,125,93,0.18)',
            background: 'rgba(158, 188, 138, 0.78)', // lighter green with transparency
            border: 'none',
            minHeight: '120px',
            height: '22vw', // dynamic height based on viewport width
            maxHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3
          }}>
            <CardContent sx={{ width: '100%', p: 0, textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', color: '#537D5D', fontWeight: 700 }}>Total Money Owed</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#193b02', marginTop: '0.5rem' }}>*Insert from Database*</div>
            </CardContent>
          </Card>
        </div>
        {/* Total Money Owed To You Card */}
        <div style={{ flex: 1, minWidth: '180px', maxWidth: '400px' }}>
          <Card sx={{
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(83,125,93,0.18)',
            background: 'rgba(158, 188, 138, 0.78)', // lighter green with transparency
            border: 'none',
            minHeight: '120px',
            height: '22vw',
            maxHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3
          }}>
            <CardContent sx={{ width: '100%', p: 0, textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', color: '#537D5D', fontWeight: 700 }}>Total Money Owed To You</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#193b02', marginTop: '0.5rem' }}>*Insert from Database*</div>
            </CardContent>
          </Card>
        </div>
        {/* Net Balance Card */}
        <div style={{ flex: 1, minWidth: '180px', maxWidth: '400px' }}>
          <Card sx={{
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(83,125,93,0.18)',
            background: 'rgba(158, 188, 138, 0.78)', // lighter green with transparency
            border: 'none',
            minHeight: '120px',
            height: '22vw',
            maxHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 3
          }}>
            <CardContent sx={{ width: '100%', p: 0, textAlign: 'center' }}>
              <div style={{ fontSize: '1.1rem', color: '#537D5D', fontWeight: 700 }}>Net Balance</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#193b02', marginTop: '0.5rem' }}>*Insert from Database*</div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Bottom row: 2 cards side by side */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: '100%',
        marginBottom: '3rem' // add space at the bottom of the screen
      }}>
        {/* Upcoming Transactions Card */}
        <div className="upcoming-transactions" style={{ flex: 1, minWidth: '340px' }}>
          <Card sx={{
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(83,125,93,0.18)',
            background: 'rgba(158, 188, 138, 0.78)', // lighter green with transparency
            border: 'none',
            minHeight: '320px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            p: 3
          }}>
            <CardHeader title="Upcoming Transactions" sx={{ background: 'none', color: '#193b02', fontWeight: 700, fontSize: '1.3rem', textAlign: 'center', p: 0, mb: 2 }} />
            <CardContent sx={{ width: '100%', p: 0 }}>
              <TableContainer>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Jar</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </div>
        {/* Transaction History Card */}
        <div className="transaction-history" style={{ flex: 1, minWidth: '340px' }}>
          <Card sx={{
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(83,125,93,0.18)',
            background: 'rgba(158, 188, 138, 0.78)', // lighter green with transparency
            border: 'none',
            minHeight: '320px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            p: 3
          }}>
            <CardHeader title="Your Transaction History" sx={{ background: 'none', color: '#193b02', fontWeight: 700, fontSize: '1.3rem', textAlign: 'center', p: 0, mb: 2 }} />
            <CardContent sx={{ width: '100%', p: 0 }}>
              <TableContainer>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Jar</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard