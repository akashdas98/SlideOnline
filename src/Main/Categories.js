import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {
    state = {
        categories: [
            {id: 1, title: 'All', style:currentStyle,},
            {id: 2, title: 'Business', style:{},},
            {id: 3, title: 'Music', style:{},},
            {id: 4, title: 'Spiritual', style:{},},
            {id: 5, title: 'Science & Tech', style:{},},
            {id: 6, title: 'Comedy', style:{},},
            {id: 7, title: 'Fashion', style:{},},
        ]
    };

    render() {
        return (
            <div className='categories'>
                <Category categories={this.state.categories} />
                <div className='filters'>
                    <i className="fas fa-sliders-h"></i>
                    <span>Filters</span>
                </div>
            </div>
        )
    }
}

const currentStyle = {
    backgroundColor: '#4B6EED',
    color: '#FFFFFF',
}

export default Categories
