import React from 'react';
import WeatherLocation from './WeatherLocation';
import { PropTypes } from 'prop-types';

const generateWeatherLocation = cities => (
    cities.map(city => <WeatherLocation  city={city}/>)
);

const LocationList = ({cities}) => (
    <div>
        {generateWeatherLocation(cities)}
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
} 

export default LocationList;