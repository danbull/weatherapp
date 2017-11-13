import React, { Component } from 'react';
import { DayOfWeek, CutOffTime } from './utils/DateTime';
import { TodaysWeather, FutureWeather } from './utils/Weather';
import ForecastDay from './components/ForecastDay';
import { API_KEY } from './constants';

const firstTimeCutoff = CutOffTime(new Date());

class App extends Component {
  state = {
    weather: []
  };

  componentWillMount() {
    const request = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=${API_KEY}`, {
      method: 'GET'
    });
    
    request
      .then(data => data.json())
      .then(data => {
        const weatherList = data.list;
        let todaysWeatherArr = [];
        todaysWeatherArr.push(TodaysWeather(firstTimeCutoff, weatherList || []));
        
        const futureWeather = FutureWeather(weatherList.slice(todaysWeatherArr[0].length) || []);
        const weather = todaysWeatherArr.concat(futureWeather);

        this.setState({
          weather
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>5 day weather forecast for London</h1>
        </header>
        {
          this.state.weather.length ?
          <ul className="forecast">
            { this.state.weather.map((day, index) => {
                if (day.length > 0) {
                  const dayName = DayOfWeek(day[0].dt, index) || '';
                  if (index < 5) return <ForecastDay key={dayName} day={dayName} weather={day} />
                }

                return false;
              })
            }
          </ul> : <p>Loading weather</p>
        }
      </div>
    );
  }
}

export default App;
