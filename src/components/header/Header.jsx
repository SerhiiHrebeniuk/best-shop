import React from 'react';

import Background from '../img/Background.png';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__navbar">
                <div className="header__logo">Best Shop</div>
                <div className="header__list">
                    <ul>
                        <li><a href="#WHY US">WHY US</a></li>
                        <li><a href="#BENEFITS">BENEFITS</a></li>
                        <li><a href="#PRICES">PRICES</a></li>
                        <li><a href="#CONTACT">CONTACT</a></li>
                    </ul>
                </div>
            </div>
            <div className="header__content">
                <h1>Sell More!</h1>
                <p>Open shop on our platform and increase your sales</p>
                <button>Open your shop</button>
                <div className="header__content--image"><img src={Background} alt="Work laptop" /></div>
            </div>
        </div>
    )
}

export default Header;