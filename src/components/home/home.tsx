import React, {Component} from 'react';
import { Outlet } from 'react-router';
import './home.css';

import Navigation from '../navigation/navigation';

class Home extends Component {

    render() {
        return (
            <div className="flex-container">
                <div className="row nav-row">
                   <Navigation/> 
                </div>
                <div className="row weather-row">
                  <Outlet/>  
                </div>
            </div>
        )
    }

}

export default Home