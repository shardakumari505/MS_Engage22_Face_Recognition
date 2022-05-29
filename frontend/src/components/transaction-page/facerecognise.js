import React from 'react';
import './facerecognize.scss';
import { NavLink } from 'react-router-dom';
import NavbarLogout from '../navbar-component/navlogout';

const FaceRecognize = () => {
    return (
    <div className='transaction-page'>
        <NavbarLogout />
        <div className='transaction-page-subsections'>
            <button><NavLink to='/transactionpage'>Online Transaction</NavLink></button>
            <button><NavLink to='/eshop'>E-Shopping</NavLink></button>
            <button><NavLink to='/facerecognize'>Recognize Your Face</NavLink></button>
        </div>
        <div className='facerecog-lottie'>
                <lottie-player
                    src="https://assets7.lottiefiles.com/packages/lf20_2szpas4y.json"
                    background="transparent"
                    speed="0.5"
                    loop
                    autoplay
                ></lottie-player>
        </div>
    </div>)
}

export default FaceRecognize;