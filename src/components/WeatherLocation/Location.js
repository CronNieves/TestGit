import React from 'react';
import PropTypes from  'prop-types';
import './style.css';

const Location = ({city}) => (
  //Destructuring si te viene el parametro props.city
  //const {city, ...} =  props;
  //O directamente podes aplicarlo en el parametro de entrada de la funcion
  <div className="locationCont">
    <h1>{city}</h1>
  </div>

);

Location.PropTypes = {
  city: PropTypes.string.isRequired
}

export default Location;    