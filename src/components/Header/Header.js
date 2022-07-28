import React from 'react';
import './Header.css';
import logoImg from '../../assets/omg.png';
import searchIcon from '../../assets/searchIcon.png';
import bottomFacing from '../../assets/bottomFacing.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// D:\Tasks-job apply\atg-world\src\omg.png


const Header = () => {
    return (
        <div className='header-container'>

            <div className="logo-container">
                <span id='atg' className='logo-font'>ATG.</span>

                <span className='logo-font me-4'>W</span>
                <img src={logoImg} alt="" className='logo-img' />

                <span className='logo-font'>RLD</span>
            </div>

            <div className="search-bar">
                <div className='search-wrapper'>
                    <img className='search-icon' src={searchIcon} alt="" />
                    <input className='text-muted' type="text" name="" id="" placeholder='Search for your favorite groups in ATG' />

                </div>
            </div>

            <div className="account-container">
                <span className='create-text'>Create account.</span>
                <span className='free-text'>It's free!</span>
                <img className='bottom-facing' src={bottomFacing} alt="" />
            </div>
        </div>
    );
};

export default Header;