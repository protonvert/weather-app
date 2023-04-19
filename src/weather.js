export default class Weather {
  constructor () {
    this.apikey = '2e1ce2a8ff06492da6c20740231104'
    this.city = 'Nashville'
    this.link = `http://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=${this.city}&aqi=no`
  }

  // __________________functions______________________
  updateCity (city) {
    this.city = city
  }
}
