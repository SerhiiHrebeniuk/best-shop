import React from 'react';

import Twit from '../img/Twitter.svg';
import Face from '../img/Facebook.svg';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__left--logo">BestShop</div>
                <div className="footer__left--text">© 2019 BestShop LTD, All Rights Reserved</div>
            </div>
            <div className="footer__right">
                <img className="footer__right--twit" src={Twit} alt="Twitter"/>
                <img className="footer__right--face" src={Face} alt="Facebook"/>
            </div>
        </div>
    )
}

export default Footer;