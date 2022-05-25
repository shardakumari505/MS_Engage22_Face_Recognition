import React from 'react';
import './signin-page.scss';
import SigninForm from '../../components/signin-form-component/signin-form.components';
import Navbar from '../../components/navbar-component/navbar-component';
import Login from '../../components/google-login/google-login';

const SigninPage = () => {
		return (
    <div className='signin-page'>
        <Navbar />
        <SigninForm/>
        {/* <Login /> */}
    </div>)
    
}

export default SigninPage;