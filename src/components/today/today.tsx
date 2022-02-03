import React, {Component} from 'react';
import Loader from '../loader/loader';
import { TodayProps } from './types';

import WeatherIcon from '../weather-icon/weather-icon';
import './today.css';


class Today extends Component<TodayProps,{}> {

    formatTemperatureData = () : string => {
        return `${Math.round(this.props.temperature)}°`;
    }

    todayElement = () => {
        return (
            <div className="today-container">
                <div className="today-row today-name">
                   <div className="day-name">Today</div> 
                </div>
                <div className="today-row today-weather">
                    <div className="today-inner-col weather-icon">
                        <WeatherIcon weatherId={this.props.weather.id}/>
                    </div>
                    <div className="today-inner-col weather-temp">
                        <div className="day-temp">{this.formatTemperatureData()}</div>
                        <div className="weather-type">{this.props.weather.main}</div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
       return(this.props.weather && this.props.temperature ? this.todayElement() : <Loader/>)
    }

}

export default Today