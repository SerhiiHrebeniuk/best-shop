import React from 'react';

import './Statistics.scss';

const Statistics = () => {
    return (
        <div className="content">
            <h1>The most popular sales platform in country</h1>
            <div className="content__box">
                <div className="content__info">
                    <div className="content__info--daily"></div>
                    <div className="content__info--count">100000+</div>
                    <div className="content__info--text">daily entries</div>
                </div>
                <div className="content__info">
                    <div className="content__info--products"></div>
                    <div className="content__info--count">2000000+</div>
                    <div className="content__info--text">seen products every day</div>
                </div>
                <div className="content__info">
                    <div className="content__info--post"></div>
                    <div className="content__info--count">1000+</div>
                    <div className="content__info--text">added posts daily</div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;