import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './signup-form.styles.scss';
import axios from 'axios';
import Glogo from './glogo.png'

class SignupForm extends Component {

    constructor(){
        super()
        this.state = {
            fullName:'',
            email:'',
            password:'',
            ConfirmPassword:'',
            image:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this)
        this.changeImage = this.changeImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
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

    changeConfirmPassword(event){
        this.setState({
            ConfirmPassword:event.target.value
        })
    }
    changeImage(event){
        this.setState({
            image:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            ConfirmPassword: this.state.ConfirmPassword,
            image: this.state.image
        }

        axios.post('http://localhost:5000/signup/signup', registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            email: '',
            password: '',
            ConfirmPassword: '',
            image: ''
        })
        window.location = '/loggedindashboard'
    }

    render(){
        return(<div className='signup-form-component'>
        <h1 className='sigup-form-title'>Sign Up</h1>
        <h4 className='signup-form-subtitle'> Already Have An Account? 
            <NavLink className='signup-signin-button-text' to="/signin">Sign In</NavLink>
        </h4>
        
            <form onSubmit={this.onSubmit}>
                <label className='signup-name-label'>Name</label>
                <input className='signup-name-input'  
                    type='text'  
                    name='name' 
                    id='name'
                    required
                    onChange={this.changeFullName}
                    value={this.state.fullName} />

                <label className='signup-email-label'>Email</label>
                <input className='signup-email-input'  
                    type='email'  
                    name='email' 
                    id='email'
                    required
                    onChange={this.changeEmail}
                    value={this.state.email} />

                <label className='signup-password-label'>Password</label>
                <input className='signup-password-input'  
                    type='password' 
                    name='password' 
                    id='current-password'
                    required
                    onChange={this.changePassword}
                    value={this.state.password} />

                <label className='signup-confirm-password-label'>Confirm Password</label>
                <input className='signup-confirm-password-input' 
                    type='password' 
                    name='confirm-password' 
                    id='confirm-password'
                    required
                    onChange={this.changeConfirmPassword}
                    value={this.state.ConfirmPassword} />

                <label className='signup-upload-image-label'>Upload Your Photo</label>
                <input className='signup-upload-image-input' 
                type="file" id="image-input" 
                accept="image/jpeg, image/png, image/jpg"
                required
                onChange={this.changeImage}
                value={this.state.image} />

                <button className='google-signup-component'>
                  <img className='google-logo' src={Glogo} alt='Google'/>
                  <input className='google-signup-submit-button' 
                  type='submit' 
                  value='Sign Up with Google' />
                </button>

                
                <input className='signup-register-button' value='Register' type='submit'/>

            </form>
    </div>);
    }
    

}

export default SignupForm;