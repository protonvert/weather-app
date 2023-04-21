export default class Weather {
  constructor () {
    this.apikey = '2e1ce2a8ff06492da6c20740231104'
    this.city = 'Nashville'
    this.weatherLink = `http://api.weatherapi.com/v1/forecast.json?key=${this.apikey}&q=${this.city}&days=7&aqi=no&alerts=yes`
  }

  // __________________functions______________________
  updateCity (city) {
    this.city = city
    // re-run all functions
    // update city name on page
  }

  async getWeatherData () {
    const weatherObj = await fetch(this.weatherLink)
    const weatherData = await weatherObj.json()

    const currentFeelsLike = weatherData.current.feelslike_f
    const forecastDays = weatherData.forecast.forecastday

    console.log(forecastDays)
    return (currentFeelsLike)
  }
}
