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
    <div className="dashboard">

        {/* return all the people in the database */}
        <ul>
            {users.map((user, idx) => (
            <li key={idx}>{user.firstName} {user.lastName}</li>
            ))}
        </ul>


        <div className="main-content">
                <div className="balance-summary">
                    <Card sx={{borderRadius: "32px"}}>
            
                        <CardContent sx={{backgroundColor: "#73946B"}}>
                            <div className="card-stats">
                
                                    <div>Total Money Owed: *Insert from Database*</div>
                                    <div>Total Money Owed To You: *Insert from Database*</div>
                                    <div>Net Balance: *Insert from Database*</div>
                                
                            </div>
                            
                            
                        </CardContent>
                        
                    </Card>
                </div>
            

            <div className="upcoming-transactions"> 
                    <Card sx={{borderRadius: "32px"}}>
                        <CardHeader title="Upcoming Transactions" sx={{backgroundColor: "#73946B"}}/>
                        <CardContent sx={{backgroundColor: "#73946B"}}>
                           <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableCell> Type </TableCell>
                                    <TableCell> Jar </TableCell>
                                    <TableCell> Name </TableCell>
                                    <TableCell> Date </TableCell>
                                </TableHead>
                            </Table>
                           </TableContainer>
                        </CardContent>
                        
                    </Card>
            </div>

            <div className="graphs"> 
                graphs
            </div>
            
             <div className="transaction-history"> 
                <Card sx={{borderRadius: "32px"}}>
                        <CardHeader title="Your Transaction History" sx={{backgroundColor: "#73946B"}}/>
                        <CardContent sx={{backgroundColor: "#73946B"}}>
                           <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableCell> Type </TableCell>
                                    <TableCell> Jar </TableCell>
                                    <TableCell> Name </TableCell>
                                    <TableCell> Date </TableCell>
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