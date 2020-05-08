import React, { Component } from 'react';
import Category from './Category';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';

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

const filterStyle = {
    width: '131px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    border: '1px solid #E7E7EA',
    borderRadius: '10px',
    color: '#212232',
}

const filterTextStyle = {
    fontSize: '20px',
    fontWeigt: '500',
}

const categoryContainerStyle = {
    width: '900px',
    overflow: 'auto',
    whiteSpace: 'nowrap',
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
                <div style={categoryContainerStyle}>
                    <Category categories={this.state.categories} />
                </div>
                <div style={filterStyle}>
                    <FilterListOutlinedIcon style={{fontSize: '36px'}}/>
                    <span style={filterTextStyle}>Filters</span>
                </div>
            </div>
        )
    }
}



export default Categories
