import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import config from './config.json';
import Home from './components/home/home';
import WeatherDisplay from './components/weather-display/weather-display';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<WeatherDisplay {...config.geoData.ottawa}/>}/>
          <Route path="/ottawa" element={<WeatherDisplay {...config.geoData.ottawa}/>}/>
          <Route path="/tokyo" element={<WeatherDisplay {...config.geoData.tokyo}/>}/>
          <Route path="/moscow" element={<WeatherDisplay {...config.geoData.moscow}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


//
