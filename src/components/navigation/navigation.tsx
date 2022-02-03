import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import './navigation.css'

class Navigation extends Component {

    render() {
        return (
            <nav className="nav-bar">
                <NavLink to="moscow" className='element'>Moscow</NavLink>
                <NavLink to="tokyo" className='element'>Tokyo</NavLink>
                <NavLink to="" className='element'>Ottawa</NavLink>
            </nav>
        )
    }

}

export default Navigation