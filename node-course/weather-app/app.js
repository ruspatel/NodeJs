const request = require('request')

//api url
const url = 'https://api.darksky.net/forecast/bbd429de0bff23627c60f113dc9ed810/37.8267,-122.4233'

request({url: url}, (error, response) => {
    //console.log(response)
    //parsing the data to convert JSON to Javascript object
    const data = JSON.parse(response.body)
    console.log(data.currently)
    
})