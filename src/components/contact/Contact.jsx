import React from 'react';

import Mail from '../img/Mail Icon.svg';
import Phone from '../img/Phone Icon.svg';

import './Contact.scss';


const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact__box--right">
                    <h1>Any questions?</h1>
                    <p>Leave your email address or call us!</p>
                    <div className="contact__box--icon">
                        <img src={Mail} alt="Mail icon" />
                        <span>info@bestshop.xyz</span>
                        <img src={Phone} alt="phone icon" />
                        <span>123 456 789</span>
                    </div>
                </div>

                <div className="contact__box--left">
                    <form className="contact__box--form">
                        <div className="contact__box--name">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name"></input>
                        </div>
                        <div className="contact__box--email">
                            <lable htmlFor="email">E-mail</lable>
                            <input type="text" id="email" name="email" placeholder="Your E-mail"></input>
                        </div>
                        <div className="contact__box--check">
                            <input type="checkbox" id="check" name="check"></input>
                            <label htmlFor="check">
                                I hereby give consent for my personal data included in my application to be processed for the purposes of the
                                recruitment process under the European Parliament’s and Council of the European Union Regulation on the Protection of
                                Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such
                                data, and repealing Directive 95/46/EC (Data Protection Directive)
                            </label>
                        </div>
                        <button className="contact__box--btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
