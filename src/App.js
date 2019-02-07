import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Washington,us',
  'Montevideo,uy'
];

class App extends Component {
  render() {
    return (
      <div className="App">

       <LocationList cities = {cities} />
        

      </div>
    );
  }
}

export default App;
