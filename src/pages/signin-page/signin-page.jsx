import React from 'react';
import './signin-page.scss';
import SigninForm from '../../components/signin-form-component/signin-form.components';

class SigninPage extends React.Component {
	render(){
		return (
    <div className='signin-page'>
        <SigninForm/>
    </div>)
	}
    
}

export default SigninPage;