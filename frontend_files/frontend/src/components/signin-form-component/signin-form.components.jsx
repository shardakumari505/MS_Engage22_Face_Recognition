import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import './signin-form.styles.scss';
import Glogo from './glogo.png';

class SigninForm extends Component{


       render(){
        return(
        <div className='signin-form-component'>            
            <h1 className='sigin-form-title'> Sign In </h1>
            <h4 className='signin-form-subtitle'> New User ? <NavLink className='signin-signup-button-text' to="/signup">Create An Account</NavLink></h4>
            <form action="/signin" method="POST">
                <label className='signin-email-label'>Email</label>
                <input className='signin-email-input' 
                  type='email'  
                  name='inputemail' 
                  id='email' 
                  required>
                </input>

                <label className='signin-password-label'>Password</label>
                <input className='signin-password-input' 
                  type='password' 
                  name='password' 
                  id='current-password'
                  required>
                </input>

                <label className='signin-checkbox-label'>
                  <input className='signin-checkbox-input' type="checkbox"/> Remember me
                </label>
                
                <input className='signin-submit-button' 
                type='submit' 
                value='Sign In' />

                <button className='google-login-component'>
                  <img className='google-logo' src={Glogo} alt='Google'/>
                  <input className='google-login-submit-button' 
                  type='submit' 
                  value='Continue with Google' />
                </button>

                <p className='signin-forget-password'> Forgot Password? </p>
            </form>
        </div>);
       }
       
   
}
    
export default SigninForm;