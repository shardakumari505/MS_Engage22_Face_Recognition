import React from 'react';
import './facerecognize.scss';
import { NavLink } from 'react-router-dom';
import NavbarLogout from '../navbar-component/navlogout';
import TransactionForm from '../transaction-form-component/transaction-form';

const FaceRecognize = () => {
    return (
    <div className='transaction-page'>
        <NavbarLogout />
        <TransactionForm/>
        <div className='transaction-page-subsections'>
        <   button><NavLink to='/transactionpage'>Online Transaction</NavLink></button>
            <button><NavLink to='/eshop'>E-Shopping</NavLink></button>
            <button><NavLink to='/facerecognize'>Recognize Your Face</NavLink></button>
        </div>
    </div>)
}

export default FaceRecognize;