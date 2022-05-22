import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './transaction-form.scss';
import axios from 'axios';

class TransactionForm extends Component {

    constructor(){
        super()
        this.state = {
            fullName:'',
            bankName:'',
            accountNumber:'',
            ifscCode:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeBankName = this.changeBankName.bind(this)
        this.changeAccountNumber = this.changeAccountNumber.bind(this)
        this.changeIfscCode = this.changeIfscCode.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeBankName(event){
        this.setState({
            bankName:event.target.value
        })
    }

    changeAccountNumber(event){
        this.setState({
            accountNumber:event.target.value
        })
    }

    changeIfscCode(event){
        this.setState({
            ifscCode:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const paymentusers = {
            fullName: this.state.fullName,
            bankName: this.state.bankName,
            accountNumber: this.state.accountNumber,
            ifscCode: this.state.ifscCode
        }

        axios.post('http://localhost:5000/transactionpage/transactionpage', paymentusers)
        .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            bankName: '',
            accountNumber: '',
            ifscCode: ''
        })
        window.location = '/loggedindashboard'
    }

    render(){
        return (
            <div className='transaction-form-component'>            
            <h1 className='transaction-form-title'> Bank Details </h1>
            <form onSubmit={this.onSubmit}>
                <label className='transaction-name-label'>Name</label>
                <input className='transaction-name-input'  
                    type='text'  
                    name='fullName' 
                    id='name' 
                    onChange={this.changeFullName}
                    value={this.state.fullName} />
                
                <label className='transaction-name-label'>Bank Name</label>
                <input className='transaction-name-input'  
                    type='text'  
                    name='bankName' 
                    id='name'
                    onChange={this.changeBankName}
                    value={this.state.bankName} />
                
                <label className='transaction-name-label'>Account Number</label>
                <input className='transaction-name-input'  
                    type='text'  
                    name='accountNumber' 
                    id='name'
                    onChange={this.changeAccountNumber}
                    value={this.state.accountNumber} />
                
                <label className='transaction-name-label'>IFSC Code</label>
                <input className='transaction-name-input'  
                    type='text'  
                    name='ifscCode' 
                    id='name'
                    onChange={this.changeIfscCode}
                    value={this.state.ifscCode} />
                
                <label className='transaction-checkbox-label'><input className='signin-checkbox-input' type="checkbox"/> Remember me</label>
                
                <input className='transaction-submit-button'
                    value='Pay' 
                    type='submit' />
            </form>
        </div>)
    }
}

export default TransactionForm;