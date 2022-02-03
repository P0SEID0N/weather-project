import { weatherType } from "../../globalTypes/weatherType";

export interface TodayProps {
    weather: weatherType,
    temperature: number,
    isloading: boolean
}