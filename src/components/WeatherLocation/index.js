//Importamos React del packager react
import React, {Component} from 'react';
import Location from './Location';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from './../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

//https://samples.openweathermap.org/data/2.5/weather?q=montevideo,uy&appid=1212a61672658d813070d540a6504e88


class WeatherLocation extends Component { 

    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city: city,
            data: null
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    
    handleUpdateClick = () => {
     const api_weather = getUrlWeatherByCity(this.state.city);
      fetch("https://cors-anywhere.herokuapp.com/" + api_weather)
      .then(response => { 
          console.log(response.text)
          return response.json();
      }).then(data =>{
          const newWeather = transformWeather(data);
          this.setState({
              data : newWeather
          })
      }).catch((e) =>{  
        console.log(e);
        console.log("Can’t access");
      })

    }

    render(){
        return(
            <div>
                <div className="weatherLocationCont">
                    <Location city={this.state.city}/>
                    <hr className="divider"/>
                    { this.state.data ? <WeatherData data={this.state.data} /> : <CircularProgress/> }
                </div>
            </div>
        );
    }
    

}

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
}

export default WeatherLocation;