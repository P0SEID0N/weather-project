import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloud, faCloudRain, faCloudShowersHeavy, faSmog, faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons'

import { weatherIconProps } from './types';


class WeatherIcon extends Component<weatherIconProps, {}> {

    componentDidMount = () => {
    }

    weatherIcon = () : JSX.Element => {

        switch(true) {
            case (this.props.weatherId >= 200 && this.props.weatherId < 300 ):
                return(<FontAwesomeIcon icon={faBolt}/>)
            case (this.props.weatherId >= 300 && this.props.weatherId < 400 ):
                return(<FontAwesomeIcon icon={faCloudRain}/>)
            case (this.props.weatherId >= 500 && this.props.weatherId < 600 ):
                return(<FontAwesomeIcon icon={faCloudShowersHeavy}/>)
            case (this.props.weatherId >= 600 && this.props.weatherId < 700 ):
                return(<FontAwesomeIcon icon={faSnowflake}/>)
            case (this.props.weatherId > 700 && this.props.weatherId < 800 ):
                return(<FontAwesomeIcon icon={faSmog}/>)
            case (this.props.weatherId === 800):
                return(<FontAwesomeIcon icon={faSun}/>)
            case (this.props.weatherId >= 801 && this.props.weatherId < 900):
                return(<FontAwesomeIcon icon={faCloud}/>)
            default:
                return(<FontAwesomeIcon icon={faSun}/>)
        }
    }


    render() {
        return (
            <>{this.weatherIcon()}</>
        )
    }

}

export default WeatherIcon