import {forecastInterface} from '../nextFour/types';
import { weatherType } from '../../globalTypes/weatherType';

export interface WeatherProps {
    name?: string;
    lat?: number;
    lon?: number;
  }
  
  //these represent object data from external api endpoint.
  export interface WeatherState {
      currentTemp: number;
      currentForecast: weatherType;
      fourDayForecast: forecastInterface[];
      loading: boolean;
  }