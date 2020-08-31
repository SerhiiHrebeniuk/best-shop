import React from 'react';

import Macbook from '../img/Macbook.png';
import IPhone from '../img/iPhone.png';
import Trumpet from '../img/Trumpet.png';

import './Benefits.scss';

const Benefits = () => {
    return (
        <div className="benefits">
            <div className="benefits__content">
                <div className="benefits__first--container">
                    <div className="benefits__first--container--box">
                        <h1>Be always first</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                            sed do eiusmod tempor incididunt ut labore et dolore<br /> magna
                            aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className="benefits__first--container--img"><img src={Macbook} alt="Macbook" /></div>
                    <div className="benefits__first--container--rhombus"></div>
                </div>
                <div className="benefits__second--container">
                    <div className="benefits__second--container--circle"></div>
                    <div className="benefits__second--container--img"><img src={IPhone} alt="iPhone" /></div>
                    <div className="benefits__second--container--shop">
                        <h1>Your shop is where you are!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
                                    sed do eiusmod tempor incididunt ut labore et dolore<br /> magna
                                aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </div>
                <div className="benefits__third--container">
                    <div className="benefits__third--container--brand">
                        <h1>Increase recognition your brand!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam.</p>
                    </div>

                    <div className="benefits__third--container--speaker">
                        <div className="benefits__third--container--speaker--img"><img src={Trumpet} alt="Trumpet" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;