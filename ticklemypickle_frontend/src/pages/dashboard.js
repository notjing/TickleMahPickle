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