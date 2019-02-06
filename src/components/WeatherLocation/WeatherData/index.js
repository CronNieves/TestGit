import React from 'react';
import PropTypes from  'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {CLOUD,CLOUDY,SUNNY,RAIN,SNOW,WINDY } from './../../../constans/weathers';
import './style.css';

const WeatherData = ({data : {temperature,weatherState,humidity,wind} }) => {
 return( <div className="weatherDataCont">
            <WeatherTemperature temperature={temperature} weatherState={weatherState} />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
         </div>);
}

WeatherData.PropTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  }),
}

export default WeatherData;