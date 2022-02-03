
import {weatherType} from "../../globalTypes/weatherType";

//export interface weatherObj {
//    id: number,
//    icon: string,
//    main: string,
//}

export interface forecastInterface {
    weather: weatherType[],
    temp: {
        min: number,
        max: number
    }
}

export interface nextFourProps {
    forecast: forecastInterface[],
    isloading: boolean
}

export interface nextFourState {

}