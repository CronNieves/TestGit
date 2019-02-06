import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from  'prop-types';
import {CLOUD,CLOUDY,SUNNY,RAIN,SNOW,WINDY } from './../../../constans/weathers';
import './style.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUNNY]: "day-sunny",
    fogy: "day-fog",
    [RAIN]: "rain",
    [WINDY]: "windy",
    [SNOW]: "snow"
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    if (icon)
        return  <WeatherIcons className="wicon" name={icon} size="4x" />
    else
        return  <WeatherIcons className="wicon" name="na" size="4x" />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weaterTemperatureCont">
        { 
            getWeatherIcon(weatherState) 
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` °C`}</span>
    </div>
);

WeatherTemperature.PropTypes = {
    temperature: PropTypes.number.isRequerid,
    weatherState: PropTypes.string.isRequerid
};

export default WeatherTemperature;