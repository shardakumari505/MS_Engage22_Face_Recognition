import React from 'react';
import { NavLink } from 'react-router-dom';
import './signup-form.styles.scss';

function SignupForm() {

    return(<div className='signup-form-component'>
     <h1 className='sigup-form-title'>Sign Up</h1>
     <h4 className='signup-form-subtitle'> Already Have An Account? <NavLink className='signup-signin-button-text' to="/signin">Sign In</NavLink></h4>
     

     <form>
         <label className='signup-name-label'>Name</label>
         <input className='signup-name-input'  type='text'  name='name' id='name' ></input>
         <label className='signup-username-label'>Username</label>
         <input className='signup-username-input'  type='text'  name='username' id='username' ></input>
         <label className='signup-email-label'>Email</label>
         <input className='signup-email-input'  type='email'  name='email' id='email' ></input>
         <label className='signup-password-label'>Password</label>
         <input className='signup-password-input'  type='password' name='password' id='current-password' ></input>
         <label className='signup-confirm-password-label'>Confirm Password</label>
         <input className='signup-confirm-password-input'  type='password' name='confirm-password' id='confirm-password' ></input>
         
         <button className='signup-register-button'  >Register</button>
      </form>
    </div>);
    

}
export default SignupForm;