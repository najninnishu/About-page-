import React from 'react';
import './Header.css';
import logo from '../../images/Main File wtih slogan.png';
const Header = () => {
    return (
        <div>



            <header class="header">

                <div class="logo">
                    <img src={logo} alt="" />
                </div>
                <nav class="navbar">
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Services">Services</a>
                    <a href="#Blog">Blog</a>
                    <a href="#Career">Career</a>
                    <a href="#Contact">Contact</a>

                </nav>
                {/* <button class="c"> contact</button> */}
            </header>

        </div>
    );
};

export default Header;