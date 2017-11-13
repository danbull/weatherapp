import React from 'react';
import styled from 'styled-components';

const WeatherWindWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.25rem;
  position: relative;
  padding-top: 5px;
`;

const WeatherWindSpeed = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  position: absolute;
  background-color: #1f1f1f;
  color: #fff;
  padding: 0.25rem;
  z-index: 20;
`;

const WeatherWindDeg = styled.span`
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  color: #1f1f1f;
  z-index: 10;

  > span {
    position: absolute;
    left: 50%;
    margin-left: -8px;
    top: -0.25rem;
    font-size: 2rem;
  }
`;

const WeatherWind = props => {
  const windDegTransform = {
    transform: `rotate(${props.windDeg}deg)`
  }

  return (
    <WeatherWindWrapper>
      <WeatherWindSpeed>{props.windSpeed}</WeatherWindSpeed>
      <WeatherWindDeg style={windDegTransform}>
        <span>↑</span>
      </WeatherWindDeg>
    </WeatherWindWrapper>
  )
}

export default WeatherWind;
