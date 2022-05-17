import React from 'react';
import { NavLink } from 'react-router-dom';
import './transaction-form.scss';

const TransactionForm = () => {
    return (
        <div className='transaction-form-component'>            
        <h1 className='transaction-form-title'> Sign In </h1>
        <form>
            <label className='transaction-name-label'>Name</label>
            <input className='transaction-name-input'  type='text'  name='name' id='name' ></input>
            <label className='transaction-name-label'>Bank Name</label>
            <input className='transaction-name-input'  type='text'  name='name' id='name' ></input>
            <label className='transaction-name-label'>Account Number</label>
            <input className='transaction-name-input'  type='text'  name='name' id='name' ></input>
            <label className='transaction-name-label'>IFSC Code</label>
            <input className='transaction-name-input'  type='text'  name='name' id='name' ></input>
            <label className='transaction-checkbox-label'><input className='signin-checkbox-input' type="checkbox"/> Remember me</label>
            <button className='transaction-submit-button'><NavLink className='' to="/loggedindashboard">Pay</NavLink></button>
        </form>
    </div>)
}

export default TransactionForm;