import React from 'react';
import "./Footer.css"
import photo1 from '../Images/photo1.svg'
import photo2 from '../Images/photo2.svg'
import photo3 from '../Images/photo3.svg'
// import logo from '../img/logo1.png'
// import search from '../img/loupe.png'
// import { authContext } from '../../contexts/AuthContext';
// import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footContainer">
                <div className="footBar">
                    <p><a className="footer-link" href="">About us</a></p>
                    <p><a className="footer-link" href="">Contact us</a></p>
                    <p><a className="footer-link" href="">Gift card</a></p>
                    <p><a className="footer-link" href="">Support</a></p>
                    <p><a className="footer-link" href="">Privacy policy</a></p>
                    <p><a className="footer-link" href="">For partners</a></p>

                    <div className="footIcons">
                        <a href="https://www.facebook.com/bookshop.org/" target="_blank" rel="noopener noreferrer">
                            <img className="footImg" src={photo1} alt="" />
                        </a>
                        <a href="https://www.instagram.com/bookshop_org/" target="_blank" rel="noopener noreferrer">
                            <img className="footImg" src={photo2} alt="" />
                        </a>
                        <a href="https://twitter.com/bookshop_org?lang=ru" target="_blank" rel="noopener noreferrer">
                            <img className="footImg" src={photo3} alt="" />
                        </a>
                    </div>
                </div>
                {/* <Link to="/"> */}
                {/* <div className="footerLogo">
                        <img src={logo} alt="" />
                    </div> */}
                {/* </Link> */}
            </div>

            {/* <div className="footContainer2">
                <div className="logIn">
                    <Link to="/signup">
                        <button className="footer-btn">Регистрация</button>
                    </Link>
                    <Link to="/signin">
                        <button className="footer-btn">Войти</button>
                    </Link>
                </div>
            </div> */}
        </div>
    );
};

export default Footer;