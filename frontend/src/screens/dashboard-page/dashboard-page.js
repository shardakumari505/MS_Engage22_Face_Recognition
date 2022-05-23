import React from 'react';
import './dashboard-page.styles.scss';
import Navbar from '../../components/navbar-component/navbar-component'

const Dashboard = () => {
    return(<div className='dashboard-page-container'> 
        <Navbar />
        <div className='dashboard-page-left'>
            <div className='hometopcard'></div>
            <div className='hometopellipse'></div>
            <div className='homebottomellipse'></div>
            <div className='dashboard-left-lottie1'>
                <lottie-player
                    src="https://assets5.lottiefiles.com/packages/lf20_7Ht9wn.json"
                    background="transparent"
                    speed="0.5"
                    loop
                    autoplay
                ></lottie-player>
            </div>
        </div>
        
        <div className='dashboard-page-right'>
            <div className='dashboard-right-lottie1'>
                <lottie-player
                    src="https://assets6.lottiefiles.com/temp/lf20_XcJCfR.json"
                    background="transparent"
                    speed="0.5"
                    loop
                    autoplay
                ></lottie-player>
            </div>
            
            
        </div>
     </div> )
}

export default Dashboard;