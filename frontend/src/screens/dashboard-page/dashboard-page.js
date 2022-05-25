import React,{useState} from 'react';
import './dashboard-page.styles.scss';
import Navbar from '../../components/navbar-component/navbar-component'
import SideDrawer from '../../components/navbar-component/SideDrawer';
import Backdrop from '../../components/navbar-component/Backdrop';

function Dashboard () {
    
    const [sideToggle, setSideToggle] = useState(false);

    
    return(<div className='dashboard-page-container'> 
        <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

        <div className='dashboard-page-left'>
            <div className='hometopcard'></div>
            <div className='hometopellipse'></div>
            <div className='homebottomellipse'></div>
            
        </div>
        <div className='dashboard-page-title'>
                <h3>Instant Transaction</h3>
                <h2>with add on <span>SECURITY</span></h2>
                <p>You can now complete your payments, transfer them to anyone or shop online securely through FPay, the only website that incorporates facial recognition technology</p>
        </div>
        
        <div className='dashboard-page-right'>
            
            
            <div className='dashboard-left-lottie1'>
                <lottie-player
                    src="https://assets6.lottiefiles.com/temp/lf20_XcJCfR.json"
                    background="transparent"
                    speed="0.5"
                    loop
                    autoplay
                ></lottie-player>
            </div>
            <div className='dashboard-left-lottie2'>
                <lottie-player
                    src="https://assets5.lottiefiles.com/packages/lf20_7Ht9wn.json"
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