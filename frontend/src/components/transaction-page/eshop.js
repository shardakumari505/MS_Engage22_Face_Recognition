import React from 'react';
import './eshop.scss';
import NavbarLogout from '../navbar-component/navlogout';
import TransactionForm from '../transaction-form-component/transaction-form';
import { NavLink } from 'react-router-dom';

const Eshop = () => {
    return (
    <div className='transaction-page'>
        <NavbarLogout />
        <div className='transaction-page-subsections'>
            <button><NavLink to='/transactionpage'>Online Transaction</NavLink></button>
            <button><NavLink to='/eshop'>E-Shopping</NavLink></button>
            <button><NavLink to='/facerecognize'>Recognize Your Face</NavLink></button>
        </div>
        <div className='eshop-lottie'>
                <lottie-player
                    src="https://assets4.lottiefiles.com/packages/lf20_57TxAX.json"
                    background="transparent"
                    speed="0.5"
                    loop
                    autoplay
                ></lottie-player>
            </div>
    </div>)
}

export default Eshop;