import React, { Component } from 'react';
import Category from './Category';

const activeStyle = {
    variant: "contained",
    color: "primary",
}

const inactiveStyle = {
    variant: "text",
    color: "default",
}

const categoryStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}

class Categories extends Component {
    state = {
        categories: [
            {id: 1, title: 'All', style: activeStyle,},
            {id: 2, title: 'Business', style: inactiveStyle,},
            {id: 3, title: 'Music', style: inactiveStyle,},
            {id: 4, title: 'Spiritual', style: inactiveStyle,},
            {id: 5, title: 'Science & Tech', style: inactiveStyle,},
            {id: 6, title: 'Comedy', style: inactiveStyle,},
            {id: 7, title: 'Fashion', style: inactiveStyle,},
        ],
    }
    render() {
        return (
            <div style={categoryStyle}>
                <div>
                    <Category categories={this.state.categories} />
                </div>
                <div className='filters'>
                    <i className="fas fa-sliders-h"></i>
                    <span>Filters</span>
                </div>
            </div>
        )
    }
}



export default Categories
