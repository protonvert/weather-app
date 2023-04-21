export default function displayController () {
  const weatherCity = document.querySelector('.weather-card__city')
  const currentTemp = document.getElementById('current_temp')

  const updateWeatherCity = (city) => {
    weatherCity.innerHTML = city
  }

  const updateCurrentTemp = (temp) => {
    currentTemp.innerHTML = `${temp}°F`
  }

  return { updateWeatherCity, updateCurrentTemp }
}
