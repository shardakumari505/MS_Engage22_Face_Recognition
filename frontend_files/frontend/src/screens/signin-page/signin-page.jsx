import React from 'react';
import './signin-page.scss';
import SigninForm from '../../components/signin-form-component/signin-form.components';
import Navbar from '../../components/navbar-component/navbar-component'

const SigninPage = () => {
		return (
    <div className='signin-page'>
        <Navbar />
        <SigninForm/>
    </div>)
    
}

export default SigninPage;