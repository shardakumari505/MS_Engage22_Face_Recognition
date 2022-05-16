import React,{useContext, useState} from 'react';
import './navbar-component.styles.scss';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import { UserContext } from '../../userauth';

const Navbar = () => {
    const [loggedIn,setloggedIn] = useContext(UserContext);
    const [MenuList, setMenulist] = useState(false);
    

    const handleLogout = (event) =>{
        event.preventDefault();
        if(loggedIn===true){
        setloggedIn(false)
        alert("Logged Out Sucessfully");}
        else{
            alert("Please SignIn to Logout")
        }

    }
    

    // const handleclick1 = (event) =>{
    //     event.preventDefault();
    //     setloggedIn(true)
    //     alert("Logged In Sucessfully");
    // }
    const toggleMenu = (event) => {
        setMenulist(!MenuList);
    }

    
    return(
            <div className='navbar-container'>
        
                <h1><NavLink className='navbar-logo' to="/"> &lt; DevIN &gt; </NavLink></h1>
                    <nav>                        
                        <ul id='menu-list' className= {MenuList===true?'menu-list':'menu-list-closed'}>
                            <li>
                                <NavLink className='' to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='' to="/">Tech Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink className='' to="/">Virtual Chamber</NavLink>
                            </li>
                            
                            <li>
                                <NavLink className='' to="/">Code Editor</NavLink>
                            </li>
                    
                    <li> {loggedIn===false?
                    <button><NavLink className='navbar-login-button-text' to="/signin">
                    Login | Signup                                
                                    </NavLink></button>:<button onClick={handleLogout} className='navbar-login-button-text'>Signout</button>}</li>
                                               
                                

                             </ul>
                    </nav>
                <h1 className='hamburger-menu-icon' onClick={toggleMenu}>☰</h1>
            </div>
           
    );

}
export default Navbar;