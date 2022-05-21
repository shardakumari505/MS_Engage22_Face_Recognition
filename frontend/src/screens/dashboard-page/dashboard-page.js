import React from 'react';
import './dashboard-page.styles.scss';
import Navbar from '../../components/navbar-component/navbar-component'

const Dashboard = () => {
    return(<div className='dashboard-page-container'> 
        <Navbar />
        <div className='hometopcard'></div>
        <div className='hometopellipse'></div>
        <div className='homebottomellipse'></div>
     </div> )
}

export default Dashboard;