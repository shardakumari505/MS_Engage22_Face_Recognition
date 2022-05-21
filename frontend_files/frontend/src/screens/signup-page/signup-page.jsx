import React from 'react';
import './signup-page.scss';
import Navbar from '../../components/navbar-component/navbar-component'
import SignupForm from '../../components/signup-form-component/signup-form.component';

const SignupPage = () => {
    return (<div className='signup-page'>
        <Navbar />
        <SignupForm/>
        </div>)
}

export default SignupPage;