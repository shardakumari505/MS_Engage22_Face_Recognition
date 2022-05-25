import React,{useContext, useState} from 'react';
import './navbar-component.styles.scss';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../userauth';

const Navbar = ({ click }) => {

    
    return(
            <div className='navbar-container'>
        
                <h1><NavLink className='navbar-logo' to="/"> &lt; FPay &gt; </NavLink></h1>
                    <nav>                        
                        {/* <ul id='menu-list' className= {MenuList===true?'menu-list':'menu-list-closed'}> */}
                        <ul id='menu-list' className='navbar__link'>
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
                        <div className="hamburger__menu" onClick={click}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </nav>
                {/* <h1 className='hamburger-menu-icon' onClick={toggleMenu}>☰</h1> */}
                {/* <h1 className='hamburger-menu-icon' >☰</h1> */}
            </div>
           
    );

}
export default Navbar;