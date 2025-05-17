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
import DatabaseUsers from "../context/DatabaseUsers.js";
import useTransactions from "../context/TransactionContext.js";

import './styles.css'

function Dashboard() {
//   const users = DatabaseUsers();

const{transactions, addTransaction, refresh} = useTransactions();


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
        gap: '1.5rem',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: '-8vh',
        marginBottom: '0.5rem',
        width: '100%'
      }}>
        {/* Total Money Owed Card */}
        <div style={{ flex: 1, minWidth: '200px', maxWidth: '400px', display: 'flex', justifyContent: 'center' }}>
          <Card sx={{
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(83,125,93,0.18)',
            background: 'rgba(158, 188, 138, 0.88)',
            border: 'none',
            minHeight: '160px',
            height: '22vw',
            maxHeight: '240px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            p: 0
          }}>
            <CardContent sx={{ width: '100%', display: 'flex', alignItems: 'center', p: '1.5rem 1.2rem' }}>
              <div style={{
                background: 'rgba(83,125,93,0.13)',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1.2rem',
                fontSize: '2.2rem',
                color: '#537D5D',
                boxShadow: '0 2px 8px 0 rgba(83,125,93,0.08)'
              }}>
                <span role="img" aria-label="money with wings">💸</span>
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: '2.1rem', fontWeight: 800, color: '#193b02', marginBottom: '0.2rem', lineHeight: 1.1 }}>
                  <b>*Insert from Database*</b>

                </div>
                <div style={{ fontSize: '1.13rem', color: '#537D5D', fontWeight: 500, letterSpacing: '0.01em', marginTop: '0.1rem' }}>
                  Total Money Owed
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Total Money Owed To You Card */}
        <div style={{ flex: 1, minWidth: '200px', maxWidth: '400px', display: 'flex', justifyContent: 'center' }}>
          <Card sx={{
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(83,125,93,0.18)',
            background: 'rgba(158, 188, 138, 0.88)',
            border: 'none',
            minHeight: '160px',
            height: '22vw',
            maxHeight: '240px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            p: 0
          }}>
            <CardContent sx={{ width: '100%', display: 'flex', alignItems: 'center', p: '1.5rem 1.2rem' }}>
              <div style={{
                background: 'rgba(83,125,93,0.13)',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1.2rem',
                fontSize: '2.2rem',
                color: '#537D5D',
                boxShadow: '0 2px 8px 0 rgba(83,125,93,0.08)'
              }}>
                <span role="img" aria-label="money bag">💰</span>
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: '2.1rem', fontWeight: 800, color: '#193b02', marginBottom: '0.2rem', lineHeight: 1.1 }}>
                  <b>*Insert from Database*</b>
                </div>
                <div style={{ fontSize: '1.13rem', color: '#537D5D', fontWeight: 500, letterSpacing: '0.01em', marginTop: '0.1rem' }}>
                  Total Money Owed To You
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Net Balance Card */}
        <div style={{ flex: 1, minWidth: '200px', maxWidth: '400px', display: 'flex', justifyContent: 'center' }}>
          <Card sx={{
            borderRadius: '32px',
            boxShadow: '0 8px 32px 0 rgba(83,125,93,0.18)',
            background: 'rgba(158, 188, 138, 0.88)',
            border: 'none',
            minHeight: '160px',
            height: '22vw',
            maxHeight: '240px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            p: 0
          }}>
            <CardContent sx={{ width: '100%', display: 'flex', alignItems: 'center', p: '1.5rem 1.2rem' }}>
              <div style={{
                background: 'rgba(83,125,93,0.13)',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1.2rem',
                fontSize: '2.2rem',
                color: '#537D5D',
                boxShadow: '0 2px 8px 0 rgba(83,125,93,0.08)'
              }}>
                <span role="img" aria-label="balance scale">⚖️</span>
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: '2.1rem', fontWeight: 800, color: '#193b02', marginBottom: '0.2rem', lineHeight: 1.1 }}>
                  <b>*Insert from Database*</b>
                </div>
                <div style={{ fontSize: '1.13rem', color: '#537D5D', fontWeight: 500, letterSpacing: '0.01em', marginTop: '0.1rem' }}>
                  Net Balance
                </div>
              </div>
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