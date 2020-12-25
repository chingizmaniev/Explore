import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Logo from '../Images/headerLogo1.png';


function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__icon"
                    src={Logo}
                    alt=""
                />
            </Link>


            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Link to="/signin">
                    <AccountCircleIcon />
                </Link>


            </div>

        </div>
    )
}

export default Header
