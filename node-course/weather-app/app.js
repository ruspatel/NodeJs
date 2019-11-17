const request = require('request')

//api url
const url = 'https://api.darksky.net/forecast/bbd429de0bff23627c60f113dc9ed810/37.8267,-122.4233'


request({url: url, json : true}, (error, response) => {
    //console.log(response)
    //parsing the data to convert JSON to Javascript object
    //json is set to true so no need for: const data = JSON.parse(response.body)
    const currentTemp = response.body.currently.temperature
    const precipChance = response.body.currently.precipProbability
    console.log("It is currently "+currentTemp+", with a "+precipChance+" chance of rain.")
})