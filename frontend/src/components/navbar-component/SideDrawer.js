import "./SideDrawer.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];


  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <NavLink className='navbar-logo' to="/"> &lt; FPay &gt; </NavLink>
        </li>
        <li>
          <Link to="/transactionpage">Online Payment</Link>
        </li>
        <li>
            <button><NavLink className='navbar-login-button-text' to="/signin">Login | Signup                                
                                        </NavLink></button>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
