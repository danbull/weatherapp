import React from 'react';
import WeatherWind from '../WeatherWind';
import styled from 'styled-components';
import { WEATHER_ICON_PATH } from '../../constants';

const ForecastTimesItem = styled.li`
  text-align: center;
  margin-bottom: 2rem;

  time {
    display: block;
  }

  > span {
    display: block;
    font-size: 1.5rem;
  }
`;

const ForecastDayPart = props => {
  return (
    <ForecastTimesItem>
      <time>{props.time}</time>
      <img src={`${WEATHER_ICON_PATH}${props.icon}.png`} alt="" />
      <span>{ props.temp }º</span>
      <WeatherWind windSpeed={props.windSpeed} windDeg={props.windDeg}/>
    </ForecastTimesItem>
  )
}

export default ForecastDayPart;