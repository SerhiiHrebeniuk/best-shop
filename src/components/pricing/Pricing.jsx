import React from 'react';

import Check from '../img/Ckechmark-1.svg';
import Close from '../img/Close.svg';

import './Pricing.scss';

const Pricing = () => {
    return (
        <div className="pricing">
            <div>
                <div className="pricing__text">Pricing</div>

                <div className="pricing__box--basic">
                    <div className="pricing__box--basic--front">
                        <span>Basic</span>
                    </div>
                    <div className="pricing__box--basic--back">
                        <h1>Basic</h1>
                        <ul className="pricing__box--basic--back--list">
                            <li className="pricing__box--basic--back--list--price">$0</li>
                            <li><img src={Check} alt="Check icon" />100 MB HDD</li>
                            <li><img src={Check} alt="Check icon" />1 Subdomian</li>
                            <li><img src={Check} alt="Check icon" />2 E-mails</li>
                            <li><img src={Close} alt="Close icon" />Two years license</li>
                            <li><img src={Close} alt="Close icon" />Full support</li>
                        </ul>
                        <button className="pricing__box--basic--back--btn">Begin</button>
                    </div>
                </div>

                <div className="pricing__box--profesional">
                    <div className="pricing__box--profesional--front">
                        <span>Profesional</span>
                    </div>
                    <div className="pricing__box--profesional--back">
                        <h1>Profesional</h1>
                        <ul className="pricing__box--profesional--back--list">
                            <li className="pricing__box--profesional--back--list--price">$25</li>
                            <li>Limited offer</li>
                            <li><img src={Check} alt="Check icon" />500 MB HDD</li>
                            <li><img src={Check} alt="Check icon" />2 Subdomian</li>
                            <li><img src={Check} alt="Check icon" />5 E-mails</li>
                            <li><img src={Check} alt="Check icon" />One years license</li>
                            <li><img src={Close} alt="Close icon" />Full support</li>
                        </ul>
                        <button className="pricing__box--profesional--back--btn">Begin</button>
                    </div>
                </div>

                <div className="pricing__box--premium">
                    <div className="pricing__box--premium--front">
                        <span>Premium</span>
                    </div>
                    <div className="pricing__box--premium--back">
                        <h1>Premium</h1>
                        <ul className="pricing__box--premium--back--list">
                            <li className="pricing__box--premium--back--list--price">$60</li>
                            <li>Limited offer</li>
                            <li><img src={Check} alt="Check icon" />2 GB HDD</li>
                            <li><img src={Check} alt="Check icon" />5 Subdomian</li>
                            <li><img src={Check} alt="Check icon" />20 E-mails</li>
                            <li><img src={Check} alt="Check icon" />Two years license</li>
                            <li><img src={Check} alt="Check icon" />Full support</li>
                        </ul>
                        <button className="pricing__box--premium--back--btn">Begin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;