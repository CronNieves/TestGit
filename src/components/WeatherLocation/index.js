//Importamos React del packager react
import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import './style.css';
import {SUNNY} from './../../constans/weathers';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constans/api_url';

//https://samples.openweathermap.org/data/2.5/weather?q=montevideo,uy&appid=1212a61672658d813070d540a6504e88

const data = {
    temperature: 5,
    weatherState: SUNNY,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component { 
    
    constructor(){
        super();
        this.state = {
            city: "Montevideo!",
            data: data
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
                    <WeatherData data={this.state.data} />
                </div>
                <button onClick={this.handleUpdateClick}>click</button>
            </div>
        );
    }
    

}

//Hace que este disponible a todos.
export default WeatherLocation;