import React,{useContext, useState} from 'react';
import './navbar-component.styles.scss';
import { NavLink } from 'react-router-dom';

const NavbarLogout = ({ click }) => {
    
    
    return(
            <div className='navbar-container'>
                    <nav>
                        <ul id='menu-list' className='navbar__link'>
                                            
                            <li>
                                <NavLink className='' to="/"></NavLink>
                            </li>

                            <li>
                                <button><NavLink className='navbar-login-button-text' to="/">Signout                               
                                        </NavLink></button>
                            </li>
                                               
                        </ul>
                        <div className="hamburger__menu" onClick={click}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </nav>
            </div>
           
    );

}
export default NavbarLogout;