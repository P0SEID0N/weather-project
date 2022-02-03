import React, {Component} from 'react';
import config from '../../config.json';
import { formatGetRequest } from '../../utilities/urlFormat';
import {WeatherProps, WeatherState} from './types';

import Today from '../today/today';
import NextFour from '../nextFour/nextFour';

import './weather-display.css';


class WeatherDisplay extends Component<WeatherProps, WeatherState> {
    constructor(props : WeatherProps) {
        super(props);
        this.state = {
            currentTemp: 0,
            currentForecast: {
                id: 0,
                main: '',
                description: '',
                icon: ''
            },
            fourDayForecast: [],
        }
    }


    fetchWeatherData = () => {
        let payload = {
            appid: config.apiKey,
            lat: this.props.lat, 
            lon: this.props.lon,
            units: 'metric',
            excludes: "minutely,hourly,alerts"
        };

        fetch(`https://api.openweathermap.org/data/2.5/onecall?${formatGetRequest(payload)}`)
        .then(res => res.json())
        .then(response => {
            //allocate state values
            this.setState({
                    currentTemp: response.current.temp,
                    currentForecast: response.current.weather[0],
                    fourDayForecast: response.daily.slice(0,4)
            });
        })
        .catch(error => console.log("An error has occured with the call to api.openweathermap.org please contact a system admin"));
    }

    componentDidMount = () => {
        this.fetchWeatherData();
    }
    
    componentDidUpdate = (prevProps : WeatherProps) => {
        //Only refetch weatherdata if city has changed
        if(this.props.name !== prevProps.name){ 
           this.fetchWeatherData();
        }
    }

    render() {
        return (
            <div className="weather-container">
                <Today weather={this.state.currentForecast} temperature={this.state.currentTemp}/>
                <NextFour forecast={this.state.fourDayForecast}/>
            </div>
        )
    }

}

export default WeatherDisplay