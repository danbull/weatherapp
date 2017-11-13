import React from 'react';
import { TimeOfDay } from '../../utils/DateTime';
import { ReverseWindDeg, MpsToMph } from '../../utils/Weather';
import ForecastDayPart from '../ForecastDayPart';

const ForecastDay = (props) => (
  <li className="forecast__day">
    <h2>{props.day}</h2>
    <ul className="forecast__times">
      {
        props.weather.map(weatherPart => {
          const time = TimeOfDay(weatherPart.dt);
          const icon = weatherPart.weather[0].icon;
          const temp = Math.round(weatherPart.main.temp);
          const windSpeed = Math.round(MpsToMph(weatherPart.wind.speed));
          const windDeg = Math.round(ReverseWindDeg(weatherPart.wind.deg));

          return (
            <ForecastDayPart time={time} temp={temp} windSpeed={windSpeed} windDeg={windDeg} icon={icon} />
          );
        })
      }
    </ul>
  </li>
);

export default ForecastDay;
