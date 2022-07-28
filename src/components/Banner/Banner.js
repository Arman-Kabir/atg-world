import React from 'react';
import './Banner.css';
import heroImage from '../../assets/heroImage.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            {/* <div className='color-overlay'></div> */}
            <div className='hero-text'>
                <h1 className='hero-title'>Computer Engineering</h1>
                <p className='hero-caption'>142,765 Computer Engineers follow this</p>
            </div>
            
        </div>
    );
};

export default Banner;