import React,{useContext, useState} from 'react';
import './navbar-component.styles.scss';
import { NavLink } from 'react-router-dom';
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
        
                <h1>{loggedIn===false?<NavLink className='navbar-logo' to="/"> &lt; DevIN &gt; </NavLink>:<NavLink className='navbar-logo' to="/loggedindashboard"> &lt; DevIN &gt; </NavLink>}</h1>
                    <nav>                        
                        <ul id='menu-list' className= {MenuList===true?'menu-list':'menu-list-closed'}>
                            <li>{loggedIn===false?<p></p>:
                                <NavLink className='' to="/">Home</NavLink>}
                            </li>
                            <li>{loggedIn===false?<p></p>:
                                <NavLink className='' to="/transactionpage">Online Payment</NavLink>}
                            </li>
                            <li>{loggedIn===false?<p></p>:
                                <NavLink className='' to="/">Virtual Chamber</NavLink>}
                            </li>
                            
                            <li>{loggedIn===false?<p></p>:
                                <NavLink className='' to="/">Code Editor</NavLink>}
                            </li>

                            <li> {loggedIn===false?
                                <button><NavLink className='navbar-login-button-text' to="/signin">Login | Signup                                
                                        </NavLink></button>:<button onClick={handleLogout} className='navbar-login-button-text'>Signout</button>}
                            </li>
                                               
                                

                        </ul>
                    </nav>
                <h1 className='hamburger-menu-icon' onClick={toggleMenu}>☰</h1>
            </div>
           
    );

}
export default Navbar;