import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import ProfileIcon from './ProfileIcon';

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Navbar />
            <SearchBar />
            <ProfileIcon />
        </div>
    )
}

export default Header;
