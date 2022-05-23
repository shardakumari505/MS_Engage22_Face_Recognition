import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import './signin-form.styles.scss';
import Glogo from './glogo.png';
import GoogleLogin from 'react-google-login';
import GoogleLoginComponent from '../google-login/google-login';

class SigninForm extends Component{

  constructor(){
    super()
    this.state = {
        email:'',
        password:''
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

changeEmail(event){
    this.setState({
        email:event.target.value
    })
}

changePassword(event){
    this.setState({
        password:event.target.value
    })
}

onSubmit(event){
    event.preventDefault()

    const signedin = {
        email: this.state.email,
        password: this.state.password
    }

    axios.post('http://localhost:5000/signin/signin', signedin)
    .then(response => console.log(response.data))

    this.setState({
        email: '',
        password: ''
    })
    
}

// responseSuccessGoogle=(response) => {
//     console.log(response);
//     console.log(response.profileObj);
// }

       render(){
        return(
        <div className='signin-form-component'>            
            <h1 className='sigin-form-title'> Sign In </h1>
            <h4 className='signin-form-subtitle'> New User ? <NavLink className='signin-signup-button-text' to="/signup">Create An Account</NavLink></h4>
            <form onSubmit={this.onSubmit}>
                <label className='signin-email-label'>Email</label>
                <input className='signin-email-input' 
                  type='email'  
                  name='email' 
                  id='email' 
                  onChange={this.changeEmail}
                  value={this.state.email}
                  required>
                </input>

                <label className='signin-password-label'>Password</label>
                <input className='signin-password-input' 
                  type='password' 
                  name='password' 
                  id='current-password'
                  onChange={this.changePassword}
                  value={this.state.password}
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

                {/* <GoogleLoginComponent /> */}

                {/* <GoogleLogin
                clientId="821565159505-q3jkrlf8reipab1kqtsribkv150ciod6.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseSuccessGoogle}
                onFailure={this.responseErrorGoogle}
                cookiePolicy={'single_host_origin'} /> */}

                <p className='signin-forget-password'> Forgot Password? </p>
            </form>
        </div>);
       }
       
   
}
    
export default SigninForm;