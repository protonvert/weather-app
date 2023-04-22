import './style.less'
import displayController from './display.js'
import Weather from './weather.js'
require('normalize.css')
const weather = new Weather()

const searchButton = document.querySelector('#submit_search')
const searchField = document.querySelector('#input_search')

console.log(searchButton)

searchButton.addEventListener('click', async () => {
  try {
    await weather.getWeatherData(searchField.value)
  } catch (error) {
    console.log(`error: ${error}`)
  }

  displayController.updateWeekWeather(weather)
  displayController.updateWeatherCity(searchField.value)
})
