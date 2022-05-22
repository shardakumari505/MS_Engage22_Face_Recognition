import React,{useContext, useState} from 'react';
import './navbar-component.styles.scss';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../userauth';

const Navbar = () => {
    // const [loggedIn,setloggedIn] = useContext(UserContext);
    // const [MenuList, setMenulist] = useState(false);
    

    // const handleLogout = (event) =>{
    //     event.preventDefault();
    //     if(loggedIn===true){
    //     setloggedIn(false)
    //     alert("Logged Out Sucessfully");}
    //     else{
    //         alert("Please SignIn to Logout")
    //     }

    // }
    

    // const handleclick1 = (event) =>{
    //     event.preventDefault();
    //     setloggedIn(true)
    //     alert("Logged In Sucessfully");
    // }
    // const toggleMenu = (event) => {
    //     setMenulist(!MenuList);
    // }

    
    return(
            <div className='navbar-container'>
        
                <h1><NavLink className='navbar-logo' to="/"> &lt; EPay &gt; </NavLink></h1>
                    <nav>                        
                        {/* <ul id='menu-list' className= {MenuList===true?'menu-list':'menu-list-closed'}> */}
                        <ul id='menu-list' className=''>
                            <li>
                                <NavLink className='' to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='' to="/transactionpage">Online Payment</NavLink>
                            </li>
                            <li>
                                <NavLink className='' to="/eshop">E-Shopping</NavLink>
                            </li>
                            
                            <li>
                                <NavLink className='' to="/"></NavLink>
                            </li>

                            {/* <li>
                                <button><NavLink className='navbar-login-button-text' to="/signin">Login | Signup                                
                                        </NavLink></button>:<button onClick={handleLogout} className='navbar-login-button-text'>Signout</button>
                            </li> */}
                            <li>
                                <button><NavLink className='navbar-login-button-text' to="/signin">Login | Signup                                
                                        </NavLink></button>
                            </li>
                                               
                                

                        </ul>
                    </nav>
                {/* <h1 className='hamburger-menu-icon' onClick={toggleMenu}>☰</h1> */}
                <h1 className='hamburger-menu-icon' >☰</h1>
            </div>
           
    );

}
export default Navbar;