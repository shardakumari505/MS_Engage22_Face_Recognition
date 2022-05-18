import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './signin-form.styles.scss';
import { UserContext } from '../../userauth';

class SigninForm extends React.Component{
  constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
      fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        })
      }).then(response => response.json())
        .then(data => {
          if (data === 'success'){
            this.props.onRouteChange('home');
          }
        })
    }

    // const [loggedIn,setloggedIn] = useContext(UserContext);
    // const clickHandler = e => {
    //    e.preventDefault();
    //    if(loggedIn===false){
    //    setloggedIn(true);
    //    alert("LoggedIn Sucessfully!");}
    //    else{
    //        alert("Already loggedIn!");
    //    } 
    // }

       render(){
        return(
        <div className='signin-form-component'>            
            <h1 className='sigin-form-title'> Sign In </h1>
            <h4 className='signin-form-subtitle'> New User ? <NavLink className='signin-signup-button-text' to="/signup">Create An Account</NavLink></h4>
            <form>
                <label className='signin-email-label'>Email</label>
                <input className='signin-email-input' onChange={this.onEmailChange} type='email'  name='email' id='email' required></input>
                <label className='signin-password-label'>Password</label>
                <input className='signin-password-input' onChange={this.onPasswordChange} type='password' name='password' id='current-password' required></input>
                <label className='signin-checkbox-label'><input className='signin-checkbox-input' type="checkbox"/> Remember me</label>
                
                <input className='signin-submit-button' onClick={this.onSubmitSignIn} type='submit' value='sign in' />
                <p className='signin-forget-password'> Forgot Password? </p>
            </form>
        </div>);
       }
       
   
}
    
export default SigninForm;