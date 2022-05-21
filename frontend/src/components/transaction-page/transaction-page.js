import React from 'react';
import './transaction-page.scss';
import Navbar from '../../components/navbar-component/navbar-component'
import TransactionForm from '../transaction-form-component/transaction-form';

const TransactionPage = () => {
    return (
    <div className='transaction-page'>
        <Navbar />
        <TransactionForm/>
    </div>)
}

export default TransactionPage;