export default class Weather {
  constructor () {
    this.apikey = '2e1ce2a8ff06492da6c20740231104'
    this.city = 'Nashville'
    this.weatherLink = `http://api.weatherapi.com/v1/forecast.json?key=${this.apikey}&q=${this.city}&days=7&aqi=no&alerts=yes`
    this.daysOfWeek = []
    this.currentTemp = ''
  }

  // __________________functions______________________
  updateCity (city) {
    this.city = city
    this.weatherLink = `http://api.weatherapi.com/v1/forecast.json?key=${this.apikey}&q=${this.city}&days=7&aqi=no&alerts=yes`
  }

  async getWeatherData (city) {
    this.updateCity(city)

    if (this.daysOfWeek.length > 0) { // Ensures the days of the week don't go over 7 days when switching cities
      this.daysOfWeek = []
    }

    const weatherObj = await fetch(this.weatherLink)
    const weatherData = await weatherObj.json()

    console.log(weatherData.current)
    this.currentTemp = weatherData.current.temp_f
    const forecastDays = weatherData.forecast.forecastday

    forecastDays.forEach(day => {
      // const dayDate = day.date
      const date = new Date(day.date)
      const dayOfWeek = date.toString().substr(0, 3).toUpperCase()
      const dayTemp = day.day.avgtemp_f

      this.daysOfWeek.push({ date, dayTemp, dayOfWeek })
    })

    console.log(this.daysOfWeek)
  }
}
