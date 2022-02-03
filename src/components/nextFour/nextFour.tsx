import React, {Component} from 'react';
import moment from 'moment';

import WeatherIcon from '../weather-icon/weather-icon';
import Loader from '../loader/loader';
import {nextFourProps, nextFourState, forecastInterface} from './types';

import './nextFour.css';

/** Handles the display for the 4 day forecast weather
 * @state nextFourState
 * @props nextFourProps
 */
class NextFour extends Component<nextFourProps, nextFourState> {


    getDate = (n:number) :string => {
        return moment().add(n+1, 'days').format('ddd')
    }

    getAverageTemp = (min:number, max:number) :string => {
        return `${Math.round((min+max)/2)}°`;
    }

    forecastElement = () => {
        return (
            <div className="fourDayForecast-container">
                {this.props.forecast.map((v:forecastInterface, key:number) => {
                    return(
                    <div className="day" key={key}>
                        <div className="day-name">{this.getDate(key)}</div>
                        <WeatherIcon weatherId={v.weather[0].id}/>
                        <div className="day-temp">{this.getAverageTemp(v.temp.min, v.temp.max)}</div>
                    </div>
                    );
                })}
            </div>
        )
    }

    render() {
        return(this.props.forecast ? this.forecastElement() : <Loader/>)
    }

}

export default NextFour