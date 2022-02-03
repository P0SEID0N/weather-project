
//This is a weather type that matches the api spec for our weather API. 
//This is used in many places in the app to format props to match the correct data responded to by the api
export interface weatherType {
    id: number,
    main: string,
    description: string,
    icon: string;
}