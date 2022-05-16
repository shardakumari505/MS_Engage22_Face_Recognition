import React from 'react';
import { NavLink } from 'react-router-dom';
import './signin-form.styles.scss';

function SigninForm() {
       
       return(
        <div className='signin-form-component'>            
            <h1 className='sigin-form-title'> Sign In </h1>
            <h4 className='signin-form-subtitle'> New User ? <NavLink className='signin-signup-button-text' to="/signup">Create An Account</NavLink></h4>
            <form>
                <label className='signin-email-label'>Email</label>
                <input className='signin-email-input'  type='email'  name='email' id='email' required></input>
                <label className='signin-password-label'>Password</label>
                <input className='signin-password-input'  type='password' name='password' id='current-password' required></input>
                <label className='signin-checkbox-label'><input className='signin-checkbox-input' type="checkbox"/> Remember me</label>
                <button className='signin-submit-button'><NavLink className='' to="/loggedindashboard">Login</NavLink></button>
                <p className='signin-forget-password'> Forgot Password? </p>
            </form>
        </div>);
       
   
}
    
export default SigninForm;