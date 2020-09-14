import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [logeedInUser,setLoggedInUser]=useContext(userContext);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button style={{cursor:'pointer',padding:'15px 20px',backgroundColor:"000", color:'#000',border:'none',}} onClick={()=>setLoggedInUser({})}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;