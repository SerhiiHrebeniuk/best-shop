import React from 'react';

import Check from '../img/Ckechmark-1.svg';
import Close from '../img/Close.svg';

import './Pricing.scss';

const Pricing = () => {
    return (
        <div className="pricing">
            <div>
                <div className="pricing__text">Pricing</div>

                <div className="pricing__box--basic"><h1>Basic</h1>
                    <ul className="pricing__box--basic--list">
                        <li className="pricing__box--basic--list--price">$0</li>
                        <li><img src={Check} alt="Check icon" />100 MB HDD</li>
                        <li><img src={Check} alt="Check icon" />1 Subdomian</li>
                        <li><img src={Check} alt="Check icon" />2 E-mails</li>
                        <li><img src={Close} alt="Close icon" />Two years license</li>
                        <li><img src={Close} alt="Close icon" />Full support</li>
                    </ul>
                    <button className="pricing__box--basic--btn">Begin</button>
                </div>

                <div className="pricing__box--profesional"><h1>Profesional</h1>
                    <ul className="pricing__box--profesional--list">
                        <li className="pricing__box--profesional--list--price">$25</li>
                        <li>Limited offer</li>
                        <li><img src={Check} alt="Check icon" />500 MB HDD</li>
                        <li><img src={Check} alt="Check icon" />2 Subdomian</li>
                        <li><img src={Check} alt="Check icon" />5 E-mails</li>
                        <li><img src={Check} alt="Check icon" />One years license</li>
                        <li><img src={Close} alt="Close icon" />Full support</li>
                    </ul>
                    <button className="pricing__box--profesional--btn">Begin</button>
                </div>

                <div className="pricing__box--premium"><h1>Premium</h1>
                    <ul className="pricing__box--premium--list">
                        <li className="pricing__box--premium--list--price">$60</li>
                        <li>Limited offer</li>
                        <li><img src={Check} alt="Check icon" />2 GB HDD</li>
                        <li><img src={Check} alt="Check icon" />5 Subdomian</li>
                        <li><img src={Check} alt="Check icon" />20 E-mails</li>
                        <li><img src={Check} alt="Check icon" />Two years license</li>
                        <li><img src={Check} alt="Check icon" />Full support</li>
                    </ul>
                    <button className="pricing__box--premium--btn">Begin</button>
                </div>
            </div>
        </div>
    )
}

export default Pricing;