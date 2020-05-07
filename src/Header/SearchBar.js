import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <i className="fas fa-search"></i>
                <input type="search" placeholder="Search events"></input>
            </div>
        )
    }
}

export default SearchBar;
