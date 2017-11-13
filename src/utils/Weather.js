const TodaysWeather = (firstTime, weather) => {
    return weather.filter(w => w.dt_txt.toString() < firstTime.toString());
};

const FutureWeather = weather => {
  let days = [];

  for (let i = 0; i < 5; i += 1) {
    days.push(weather.splice(0, 8));
  }

  return days;
}

const ReverseWindDeg = deg => {
  return deg - 180;
}

const MpsToMph = speed => {
  return speed * 2.23694;
}

export { TodaysWeather, FutureWeather, ReverseWindDeg, MpsToMph };