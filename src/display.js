export default (function displayController () {
  const weatherCity = document.querySelector('.weather-card__city')
  const currentTemp = document.getElementById('current_temp')

  const weatherDays = document.querySelectorAll('.weekday')
  const weatherTemps = document.querySelectorAll('.weekday_temp')

  const updateWeatherCity = (city) => {
    weatherCity.innerHTML = city
  }

  // const updateCurrentTemp = (temp) => {
  //   currentTemp.innerHTML = `${temp}°F`
  // }

  const updateWeekWeather = (dateObjects) => {
    currentTemp.innerHTML = `${dateObjects.currentTemp}°F`
    for (let i = 0; i < weatherDays.length; i++) {
      weatherDays[i].textContent = dateObjects.daysOfWeek[i].dayOfWeek
      weatherTemps[i].textContent = dateObjects.daysOfWeek[i].dayTemp + '°F'
    }
    console.log(dateObjects)
  }

  return { updateWeatherCity, updateWeekWeather }
})()
