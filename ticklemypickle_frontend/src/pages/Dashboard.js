<<<<<<< HEAD
const Dashboard = () => {
    return (
        <h1>Dashboard</h1>
    )
}

export default Dashboard;
=======
import React from 'react'
import './styles.css'


function Dashboard() {
  return (
    <div className="dashboard">

        <div className="sidebar">
            sidebar
        </div>

        <div className="main-content">

            <div classname="balance-summary">
                balance summary
            </div>

            <div className="upcoming-transactions"> 
                upcoming transaction
            </div>

            <div className="graphs"> 
                graphs
            </div>
            
             <div className="transaction-history"> 
                transaction history
             </div>


        </div>
        
    </div>
  )
}

export default Dashboard
>>>>>>> a8f448ca916c28d50076520512fc021270167678
