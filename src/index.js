import './style.less'
import displayController from './display.js'
import Weather from './weather.js'
const normalize = require('normalize.css')
const display = displayController()
const weather = new Weather()

display.updateWeatherCity('Toronto')
display.updateCurrentTemp('59')

weather.getWeatherData().then((data) => {
  // display.createNewElement('span', document.getElementById('currentWeather'), `Temperature in ${weather.city}\n${data}°f`)
})
