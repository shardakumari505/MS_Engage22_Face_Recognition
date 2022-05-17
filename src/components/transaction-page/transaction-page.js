import React from 'react';
import './transaction-page.scss';
import TransactionForm from '../transaction-form-component/transaction-form';

const TransactionPage = () => {
    return (
    <div className='transaction-page'>
        <TransactionForm/>
    </div>)
}

export default TransactionPage;